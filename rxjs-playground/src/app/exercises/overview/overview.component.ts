import { Component, OnInit } from '@angular/core';
import { Exercises } from '../../shared/types';
import { exercisesList } from '../exercises';

@Component({
  selector: 'rxw-overview',
  templateUrl: './overview.component.html',
  styles: []
})
export class OverviewComponent implements OnInit {

  exercises: Exercises = exercisesList;

  constructor() { }

  ngOnInit() {
  }

}
