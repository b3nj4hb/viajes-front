import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  buttons: Array<any> = [
    {
      text: 'Gestión de Buses',
      url: '#'
    },
    {
      text: 'Gestión de viajes',
      url: '#'
    },
    {
      text: 'Gestión de conductores',
      url: '#'
    },
    {
      text: 'Gestión de Rutas',
      url: '#'
    },
  ]
}
