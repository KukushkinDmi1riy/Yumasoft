import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convertor-app';

  cars = [
    {
      name: 'Ford',
      age:25,
      b: 4,
      sx: 'm'
    },
    {
      name: 'Mazda',
      age:5,
      b: 8

    },
    {
      name: 'Mercedes',
      age:56,
      b: 12,
      sx: 'm',
      xl:'xl'
    }
  ];

  addTextToList(someText: string) {
    this.cars = [
      ...this.cars,
      {
        name: someText,
        age:235,
        b: 1,
        sx: 'm',
      }
    ];


  }

  
}
