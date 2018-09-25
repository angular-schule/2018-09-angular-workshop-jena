import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'rxw-chat-window',
  templateUrl: './chat-window.component.html',
  styles: []
})
export class ChatWindowComponent implements OnInit {

  @Input() name: string;
  @Output() message = new EventEmitter<string>();
  @Output() leave = new EventEmitter<any>();

  form: FormGroup;
  online = true;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl('')
    });
  }

  sendMessage() {
    this.message.emit(this.form.value.message);
    this.form.reset({ message: '' });
  }

  leaveChat() {
    this.online = false;
    this.leave.emit();
  }

}
