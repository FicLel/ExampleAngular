import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalClass : boolean = false;
  constructor() {
  }

  ngOnInit() {

  }

  showMessage():void{
    alert("hey");
  }
  changeClass():void{
    //this.modalClass = !modalClass;
    if(this.modalClass)
    {
      this.modalClass = false;
    }
    else
    {
      this.modalClass = true;
    }
  }


}
