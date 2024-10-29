import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-big',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-big.component.html',
  styleUrl: './card-big.component.css'
})
export class CardBigComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() image_url!: string;
  @Input() date!: string;
}
