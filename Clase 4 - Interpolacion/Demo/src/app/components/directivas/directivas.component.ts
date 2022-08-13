import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  variable1: number = 10;
  variable2: string = 'Abner';
  arreglo: string[] = ['Item 1 *ngFor', 'Item 2 *ngFor', 'Item 3 *ngFor'];

  constructor() { }

  ngOnInit(): void {
  }

}
