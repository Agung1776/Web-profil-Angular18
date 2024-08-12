import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DataProyekComponent } from '../data-proyek/data-proyek.component';
import {Dataproyek} from '../dataproyek';
import {ProyekService} from '../proyek.service';

@Component({
  selector: 'app-proyek',
  standalone: true,
  imports: [CommonModule, DataProyekComponent],
  templateUrl: './proyek.component.html',
  styleUrl: './proyek.component.css'
})
export class ProyekComponent {
  filteredproyek: Dataproyek[]=[];
  data_proyek;
  filterResults(text: string) {
    if (!text) {
      this.filteredproyek = this.data_proyek;
      return;
    }
    this.filteredproyek = this.data_proyek.filter((data_proyek) =>
      data_proyek?.judul.toLowerCase().includes(text.toLowerCase()),
    );
  }
  
  proyekService: ProyekService = inject(ProyekService);
  constructor() {
    this.data_proyek = this.proyekService.getAllProyek();
    this.filteredproyek= this.data_proyek;
    
  }
}
