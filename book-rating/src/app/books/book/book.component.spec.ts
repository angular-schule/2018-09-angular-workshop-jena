import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spy, verify, mock, instance, when, anything } from 'ts-mockito'; // npm i -D ts-mockito

import { BookComponent } from './book.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let rs: BookRatingService;


  beforeEach(async(() => {
    // gemockten BookRatingService erstellen (kommt von ts-mockito)
    // hat dieselbe Schnittstelle, aber keine Funktionalität
    rs = mock(BookRatingService);

    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        // BookRatingService ersetzen: Angular verwendet jetzt immer
        // instance(rs), wenn jemand den BookRatingService anfordert
        // instance(rs) erstellt eine konkrete Instanz des Mocks
        { provide: BookRatingService, useValue: instance(rs) }
      ]
    })
    .overrideComponent(BookComponent, {
      set: { // Strategy manuell auf default setzen, sonst funktioniert CD nicht
        changeDetection: ChangeDetectionStrategy.Default
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture: Komponente mit gerendertem Template
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // book bereitstellen, weil es keine Elternkomponente
    // gibt, die Property Binding machen kann
    component.book = {
      title: 'a',
      description: 'b',
      isbn: 'c',
      rating: 3
    };

    // Wichtig: diese Zeile NACH der Initialisierung des Buchs, damit das
    // book in der View aktualisiert wird
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the RatingService for comp.rateUp()', () => {
    // Aktion/Durchführung
    component.rateUp();

    // Erwartung: verify statt expect, weil ts-mockito.
    // instance(mock()) besitzt bereits einen Spy
    // Man kann hier direkt konkretes Argument für Aufruf angeben
    verify(rs.rateUp(component.book)).once();
  });

  it('should call comp.rateUp() on button click', () => {
    // überwachtes Exemplar der Komponente erstellen
    const spiedComp = spy(component);

    // fixture.debugElement ist das gerenderte Template der Komponente
    const rateUpBtn = fixture.debugElement
      .query(By.css('.testing-rate-up-btn'))
      .nativeElement;

    rateUpBtn.click();

    // verify statt expect, weil spy von ts-mockito
    verify(spiedComp.rateUp()).once();
  });

  fit('should display the correct rating', () => {
    const ratingBox = fixture.debugElement
      .query(By.css('.testing-rating-box'))
      .nativeElement;

    expect(ratingBox.textContent).toBe('3');

    component.book = { ...component.book, rating: 5 };
    fixture.detectChanges(); // CD manuell aufrufen, damit View aktualisiert wird

    expect(ratingBox.textContent).toBe('5');
  });

  fit('should throw rate event for rateUp', (done) => {
    // Mockservice mit Funktionalität füllen: Wenn rateUp aufgerufen wird
    // dann konkreten Wert returnen
    when(rs.rateUp(anything()))
      .thenReturn({
        isbn: 'aaa',
        title: 'bbb',
        description: 'ccc',
        rating: 4
      }); // oder .thenReturn({ ...component.book })

    // Event abonnieren
    component.rate.subscribe(book => {
      expect(book).toBeTruthy();
      console.log(book);
      // Jasmine wartet so lange mit dem Test, bis done() gerufen wird
      // nötig, weil Event asynchron sein könnte
      // (ist es nicht, aber das wissen wir ja nicht)
      done();
    });

    component.rateUp();
  });

});
