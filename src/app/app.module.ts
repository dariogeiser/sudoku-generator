import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SudokuPageComponent } from './components/sudoku-page/sudoku-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
