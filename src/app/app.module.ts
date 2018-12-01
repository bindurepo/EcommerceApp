import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WomenDressListComponent } from './women-dress-list/women-dress-list.component';
import { MenDressListComponent } from './men-dress-list/men-dress-list.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WomenDressListComponent,
    MenDressListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
