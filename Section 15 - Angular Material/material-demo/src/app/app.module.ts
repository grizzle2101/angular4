import { BrowserModule } from '@angular/platform-browser';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatIconModule, MatButtonModule } from '@angular/material';
//Task 1 - Import Chips Module:
import { MatChipsModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
