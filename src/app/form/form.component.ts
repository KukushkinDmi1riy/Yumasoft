import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  disabled = true;

  ngOnInit() {

  }

  inputHandler(e: any){
    console.log(e.target.value)
    if(e.target.value) {
      this.disabled = false;
    }
  }

}
