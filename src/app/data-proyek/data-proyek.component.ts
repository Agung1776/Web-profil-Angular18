import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Dataproyek} from '../dataproyek';

@Component({
  selector: 'app-data-proyek',
  standalone: true,
  imports: [],
  templateUrl: './data-proyek.component.html',
  styleUrl: './data-proyek.component.css'
})
export class DataProyekComponent {
  @Input() data_proyek!: Dataproyek;
}
