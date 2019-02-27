import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Today Date';
  today;
  hasError = false;
  color;
  txtcolor;
  backgroundColor = 'whitesmoke';
  boxshadow = '0px 0px 3px';
  combo = {
    "color": "gray",
    "font-weight": "bold",
    "font-style": "italic"
  }
  constructor(private myservice: MyServiceService) {

  }
  ngOnInit() {
    this.today = this.myservice.showTodayDate();
    console.log(this.today);
  }
}
