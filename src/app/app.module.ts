import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatebindingComponent } from './datebinding/datebinding.component';
import {FormsModule} from "@angular/forms";
import {TestComponent} from "./test/test.component";
import { ShowformComponent } from './showform/showform.component';
import { DegisnComponent } from './degisn/degisn.component';
import { ListDegisnComponent } from './list-degisn/list-degisn.component';
import { ChildrentComponent } from './childrent/childrent.component';
import { ParemtComponent } from './parent/paremt.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ValidateComponent } from './validate/validate.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DatebindingComponent,
    ShowformComponent,
    DegisnComponent,
    ListDegisnComponent,
    ChildrentComponent,
    ParemtComponent,
    ViewChildComponent,
    ViewParentComponent,
    ValidateComponent
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
