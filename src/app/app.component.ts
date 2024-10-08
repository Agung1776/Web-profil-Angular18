import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProyekComponent} from './proyek/proyek.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ProyekComponent],
  template: `
  <main>
    <div id="header">
    <h1>Agung Ramadhan's Profile</h1>
    <ul>
        <li><a [routerLink]="['/project']" >Project</a></li>
        <li><a [routerLink]="['/']" >Home</a></li>        
    </ul>
    </div>
    <section>
    <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-portfolio';
}
