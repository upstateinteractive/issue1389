import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-failing-page',
  templateUrl: './failing-page.component.html',
  styleUrls: ['./failing-page.component.scss']
})
export class FailingPageComponent implements OnInit {
  form: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  lists = [{
    id: 1,
    name: 'first'
  }, {
    id: 2,
    name: 'last'
  }]

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: '',
      startDate: '',
      endDate: '',
      list: ''
    });
  }

  ngOnInit() {
  }

  onClick({ value }) {
    value.endDate = new Date(value.endDate).getTime();
    value.startDate = new Date(value.startDate).getTime();
    this.submit.emit(value);
  }
}
