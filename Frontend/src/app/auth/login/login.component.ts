import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeGoogle, hugeMicrosoft, hugeUser } from '@ng-icons/huge-icons';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIconComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  viewProviders: [provideIcons({ hugeUser, hugeGoogle, hugeMicrosoft })],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });
}
