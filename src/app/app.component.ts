import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentList = [{ name: "obj1", number: 1 }, { name: "obj2", number: 2 }, { name: "obj3", number: 3 }];

  onAddObjParent(event) {
    //console.log(event)
    //دریافت اطلاعات از فرزند
    this.parentList.push({
      name: event.name,
      number: event.number
    })
  }

}

