import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatebindingComponent } from './datebinding/datebinding.component';
import {FormsModule} from "@angular/forms";
import {TestComponent} from "./test/test.component";
import { ShowformComponent } from './showform/showform.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DatebindingComponent,
    ShowformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
