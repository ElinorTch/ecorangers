import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-housing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-card.component.html',
  styleUrl: './housing-card.component.scss',
})
export class HousingCardComponent {
  @Input() house: any;
}
