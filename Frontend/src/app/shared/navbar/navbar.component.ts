import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeUser, hugeColors } from '@ng-icons/huge-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterModule],
  viewProviders: [provideIcons({ hugeUser, hugeColors })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() color!: string;
  @Input() page!: string;
  links = [
    {
      icon: '',
      name: 'Logement',
    },
    {
      icon: '',
      name: 'Vie étudiante',
    },
    {
      icon: '',
      name: 'Annonces',
    },
    {
      icon: '',
      name: 'Mon profil',
    },
  ];
}
