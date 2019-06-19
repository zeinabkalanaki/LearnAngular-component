import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Output() newObj: EventEmitter<{ name: string, number: number }> = new EventEmitter<{ name: string, number: number }>();

  newObjName: string  ;
  newObjNumber: number  ;
  constructor() { }

  ngOnInit() {
  }

  onAddObjChild(){
    this.newObj.emit(
      {
        name : this.newObjName,
        number: this.newObjNumber
      }
    ); //ارسال مقدار به پدر 
  }

}
