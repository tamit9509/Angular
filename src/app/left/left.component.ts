import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service'
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  title = 'Right Child Component'
  today;
  @Input() lcolor;
  @Input() txtcolor;
  constructor(private myservice: MyServiceService) { }

  ngOnInit() {
    this.today = this.myservice.showTodayDate();
  }

}
