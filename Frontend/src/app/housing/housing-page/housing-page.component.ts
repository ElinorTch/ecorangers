import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeArrowDown01 } from '@ng-icons/huge-icons';
import { CommonModule } from '@angular/common';
import { HousingCardComponent } from '../../shared/housing-card/housing-card.component';
import { HousingService } from '../data-access/housing.service';

@Component({
  selector: 'app-housing-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    NgIconComponent,
    HousingCardComponent,
  ],
  viewProviders: [provideIcons({ hugeArrowDown01 })],
  templateUrl: './housing-page.component.html',
  styleUrl: './housing-page.component.scss',
})
export class HousingPageComponent {
  filter?: string;
  houses: any;

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.getHouse();
  }

  showFilter(filter?: string): void {
    this.filter = filter == this.filter ? undefined : filter;
  }

  getHouse(): void {
    this.housingService.getHouses().subscribe({
      next: (houses: any) => {
        this.houses = houses;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
