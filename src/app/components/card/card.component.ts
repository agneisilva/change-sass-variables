import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cardSamples = [
    {
      title: 'Card 1',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.'
    },
    {
      title: 'Card 2',
      value: 'Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Fusce nec tellus sed augue semper porta.'
    }
  ]

}