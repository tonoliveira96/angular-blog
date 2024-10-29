import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-small',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-small.component.html',
  styleUrl: './card-small.component.css'
})
export class CardSmallComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() image_url!: string;
  @Input() date!: string;
}
