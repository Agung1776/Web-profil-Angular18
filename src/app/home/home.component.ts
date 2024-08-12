import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProyekService} from '../proyek.service';
import {Dataproyek} from '../dataproyek';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements 
OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  proyekService = inject(ProyekService);
  data_proyek: Dataproyek | undefined; 
  nomer:any;
  angka = Math.floor(Math.random() * 5);
  ngOnInit(){
    this.startTimer();
  } 
  startTimer() {
    this.nomer = setInterval(() => {
      this.angka =Math.floor(Math.random() * 5);
      this.data_proyek = this.proyekService.random(this.angka);
    }, 5000);
  }
 
  constructor() {
    const angka= Number(this.angka);
    this.data_proyek = this.proyekService.random(angka);
    
  }
}
