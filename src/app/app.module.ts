import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SearchPipe } from './pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CapitalizeFirstPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
