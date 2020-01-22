import { Component, OnInit } from '@angular/core';
import { Field } from '../models/Field';
import { Line } from '../models/Line';

@Component({
  selector: 'app-sudoku-page',
  templateUrl: './sudoku-page.component.html',
  styleUrls: ['./sudoku-page.component.scss']
})
export class SudokuPageComponent implements OnInit {

  private f1: Field;
  public allLines: Line[];

  constructor() { }

  ngOnInit() {
    this.f1 = new Field();
    this.buildSudoku();
  }

  public buildSudoku(){
    this.allLines = this.f1.generateSoduku();
  }
}
