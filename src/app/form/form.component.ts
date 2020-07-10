import { Component, OnInit, EventEmitter, Output} from '@angular/core';

// import {ArrOfObj} from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() onTextAdd = new EventEmitter<Array<any>>();

  // someText: Array<any> = [
  //   {
  //     name: 'Ford',
  //     age: 25,
  //     sex: 'm'
  //   },
  //   {
  //     name: 'Mazda',
  //     age: 5
  //   },
  //   {
  //     name: 'Mercedes',
  //     age: 56
  //   }
  // ];
  someText2: any = '';

  someText: Array<any> = [];

  disabled = true;

  

  convert() {


    const parseObj = JSON.parse(this.someText2.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '))

    const newOb = [...this.someText,...parseObj];

    console.log("Пришёл JSON", newOb);

    this.onTextAdd.emit(newOb);
    this.someText2 = '';
  }

}
