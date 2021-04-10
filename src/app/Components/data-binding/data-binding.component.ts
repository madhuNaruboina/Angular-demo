import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  //String Interpolation
  name :String = "Madhu";
  department : String =  "Fullstack Developer"
  clickMessage: string

  //property binding
  animal = {
    name: 'Lion',
    type: 'Wild Animal'
  }

  // two-way binding
  fullName: string = "Angular Two way binding";  



  color = 'indianred';
      fontSize = '25px';
      opacity = 0.7;

  ngOnInit(): void {
  }

  onClickMe() {
    this.clickMessage = "'The (click) to the left of the equals sign identifies the button's click event as the target of the binding. The text in quotes to the right of the equals sign is the template statement, which responds to the click event by calling the component's onClickMe method!";
  }

  onClickDisable(){
    this.clickMessage = ''
  }

}
