import { Injectable } from '@angular/core';
import {Dataproyek} from './dataproyek';

@Injectable({
  providedIn: 'root'
})
export class ProyekService {

  data_proyek: Dataproyek[] = [
    {
      judul: 'Express Cleaning',
      tgl: '2022/11/08',
      gambar: 'ExpressCleaning.png',
      deskripsi: 'Project pertama saya yang saya kerjakan untuk kepentingan tugas sekolah. Saya mengerjakannya sendiri menggunakan HTML, PHP dan CSS. Express cleaning merupakan web laundry yang diperuntukkan untuk kasir dan digunakan untuk memproses pesanan orang secara manual.',
    },
    {
      judul: 'Lakamasu',
      tgl: '2022/11/11',
      gambar: 'Lakamasu.png',
      deskripsi: 'Project kedua saya yang saya kerjakan untuk kepentingan tugas sekolah. Saya mengerjakannya sendiri menggunakan HTML, PHP dan CSS. Lakamasu merupakan web toko online yang memungkinkan penggunanya untuk memesan barang secara online.',
    },
    {
      judul: 'Exam Web',
      tgl: '2023/05/22',
      gambar: 'ExamWeb.png',
      deskripsi: 'Project ketiga saya adalah Exam web. Saya mengerjakan ini bersama teman saya menggunakan HTML, PHP dan CSS. peran saya adalah membuat proses pengisian soal oleh siswa. Web ini digunakan oleh guru dan siswa sebagai web ujian.',
    },
    {
      judul: 'Web Inventaris',
      tgl: '2023/12/05',
      gambar: 'WebInventaris.png',
      deskripsi: 'Web inventaris merupakan website yang saya buat untuk kebutuhan kantor magang saya yang masih menghitung inventaris secara manual. Web ini saya buat menggunakan HTML, CSS dan JavaScript. Untuk framework-nya saya menggunakan React.js dan Node.js',
    },
    {
      judul: 'Web Divtik',
      tgl: '2024/01/29',
      gambar: 'WebDivtik.png',
      deskripsi: 'Web divtik merupakan website yang saya buat untuk kebutuhan kantor magang saya dikarenakan divisi saya tidak memiliki website. Website ini saya buat untuk memperkenalkan divisi tempat magang saya, Divisi Teknologi Informasi dan Komunikasi Kepolisian Republik Indonesia. Saya membuat website ini menggunakan HTML, CSS dan PHP.',
    }
  ];


  getAllProyek(): Dataproyek[] {
    return this.data_proyek;
  }
  
  number(){
    return Math.floor(Math.random() * 5);
  }
  random(angka:number){
    return this.data_proyek[angka];
  }
  
  
  constructor() { 
  }
}
