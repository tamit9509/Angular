import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title = "Left Child Component";
  today;
  @Input() ccolor;
  @Input() txtcolor;
  constructor(private myservice: MyServiceService) { }
  ngOnInit() {
    this.today = this.myservice.showTodayDate();
    console.log(this.today)
  }
}
