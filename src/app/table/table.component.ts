import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  @Input() data: Car[];


  // _data: Car[];

  constructor() { }

  ngOnInit(): void {}

  // ngOnChanges(changes) {
  //   this._data = JSON.parse(JSON.stringify(this.data));
  //   // this._data[0].name = 'Ford1';
  // }

}
