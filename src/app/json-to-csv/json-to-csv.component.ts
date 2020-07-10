import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.scss']
})
export class JsonToCSVComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exportAsCSV() {
    console.log('exportAsCSV');
    
  }

}
