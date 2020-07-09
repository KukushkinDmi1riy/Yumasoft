import { Component, OnInit, EventEmitter, Output} from '@angular/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() onTextAdd = new EventEmitter<String>();

  someText = '';
  disabled = true;

  convert() {
    console.log(`------------`);
    console.log(this.someText);

      //convert to Obj from JSON
    // const parseJ = JSON.parse(this.someText);
    // console.log(`-------**-----`);
    // console.log(parseJ);


    this.onTextAdd.emit(this.someText);
    this.someText = '';
  }

}
