import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cards } from '../cards';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  card;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.card = cards[+params.get('cardId')];
    });
  }
}
