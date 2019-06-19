import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css'],
  encapsulation: ViewEncapsulation.Emulated // حالت پیش فرض
  //encapsulation: ViewEncapsulation.Native // همان بالایی است فقط برای مرورگر هایی که پشتیبانی می کنند
  //encapsulation: ViewEncapsulation.None // css این کامپوننت مث گلوبال عمل می کند
})
export class ChildThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
