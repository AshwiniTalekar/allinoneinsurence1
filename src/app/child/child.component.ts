import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() ChildData:any;
DataFromParentToChild:any;
@Output() event = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
Data(){
  this.event.emit(this.DataFromParentToChild)
}
}
