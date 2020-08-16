import { Component, OnInit } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards = cards;
  constructor() {}

  ngOnInit(): void {}
}
