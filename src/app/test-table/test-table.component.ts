import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Car } from '../models';


@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit, OnChanges {

  @Input() data: Car[];

  keyz = [];

  ngOnChanges(){
    let newVal = this.data.reduce((acc, item)=> {
      // return Object.assign(acc, item)
      return acc = {...acc, ...item}
    }, [])

    this.keyz = Object.keys(newVal)

    console.log(this.keyz)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
