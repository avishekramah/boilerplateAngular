import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  items = ["Angular 4", "React","UnderScore"];

  newItem = "";
  pushItem = function(){
    if(this.newItem !=""){
      this.items.push(this.newItem);
      this.newItem ="";

    }
  }

  removeItem = function(index){
    this.items.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
