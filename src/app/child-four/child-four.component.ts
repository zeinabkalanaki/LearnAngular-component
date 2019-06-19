import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {

  @Input() childInput: { name: string, number: number }
  constructor() { }

  ngOnInit() {
  }

}
