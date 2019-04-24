import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.scss']
})
export class SwitchPageComponent implements OnInit {
  columns = [ 'name', 'size', 'kind', 'items' ];
  selectedId = 2;
  data = [
    {
      data: { id: 1, name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
    },
    {
      data: { id: 2, name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
    },
    {
      data: { id: 3, name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
