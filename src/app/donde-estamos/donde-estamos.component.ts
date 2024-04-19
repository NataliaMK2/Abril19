import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-donde-estamos',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule],
  templateUrl: './donde-estamos.component.html',
  styleUrl: './donde-estamos.component.css'
})
export class DondeEstamosComponent {

}
