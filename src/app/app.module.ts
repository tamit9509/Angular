import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyServiceService } from './my-service.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LeftComponent } from './left/left.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LeftComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
