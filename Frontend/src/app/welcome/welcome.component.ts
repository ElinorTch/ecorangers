import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeColors, hugeUser } from '@ng-icons/huge-icons';
import path from 'path';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NgIconComponent, RouterModule, NavbarComponent],
  viewProviders: [provideIcons({ hugeUser, hugeColors })],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  values = [
    {
      icon: 'hugeUser',
      description: '+10 utilisateurs',
      nextDescription: 'satisfaits',
    },
    {
      icon: 'hugeUser',
      description: '+10 annonces',
      nextDescription: 'vérifiées',
    },
    {
      icon: 'hugeUser',
      description: '+10 partenaires',
      nextDescription: 'de confiance',
    },
    {
      icon: 'hugeUser',
      description: 'Pleins',
      nextDescription: 'de bons plans',
    },
  ];
  images = [
    {
      path: 'assets/welcome.jpeg',
      name: 'Pl. W. Churchil',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Pl. Carnot',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Mairie',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Opéra',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Mal Juin',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Av. Ernest Rubert',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Rue F. Perrin',
    },
    {
      path: 'assets/welcome.jpeg',
      name: 'Rue. A. Camut',
    },
  ];
}
