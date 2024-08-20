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
      deskripsi: 'My first project was Express Cleaning. I made that website as an assignment. It was a laundry website where there was 2 roles, Admin and Cashier. Cashier will take order from costumer and admin can add new cashier and product. It was used to buy product online. I was acting as Full Stack Developer. I used PHP, HTML and CSS to made that website.',
    },
    {
      judul: 'Lakamasu',
      tgl: '2022/11/11',
      gambar: 'Lakamasu.png',
      deskripsi: 'My second project was Lakamasu. I made that website as an assignment. It was an online store website. It had 2 roles, User and Admin. Admin can see every user and add more products and User can buy the products and create their own account. It was used to buy product online. I was acting as Full Stack Developer. I used PHP, HTML and CSS to made that website.',
    },
    {
      judul: 'Exam Web',
      tgl: '2023/05/22',
      gambar: 'ExamWeb.png',
      deskripsi: 'My third project was Exam Web. We made that website as an assignment with a team. It was a website for exam. It had 2 roles, User and Teacher. Teacher can see every user’s score and add more assignment and User can do the assignment. It was used to do exam online. I was acting as Backend Developer. We used PHP, HTML and CSS to made that website.',
    },
    {
      judul: 'Web Inventaris',
      tgl: '2023/12/05',
      gambar: 'WebInventaris.png',
      deskripsi: 'My fourth project was Web Inventaris. I made that website as an assignment when I was an Intern at the Police Headquarters. It was a website to count inventory. It had 1 role, Admin. Admin can update the quantity of items inside the website and add more items. It was used to count inventory digitally. I was acting as Full Stack Developer. I used React.js, Node.js, JavaScript, HTML and CSS to made that website.',
    },
    {
      judul: 'Web Divtik',
      tgl: '2024/01/29',
      gambar: 'WebDivtik.png',
      deskripsi: 'My fifth project was Web Divtik. I made that website when I was an intern at the Police Headquarters because of my Division, Information and Communication Technology has no website. So, they assign me to made it. It was a website for my division. It had 1 role, Admin. Admin can add news and events about my division. It was used to introduce my division to the public. I was acting as Full Stack Developer. I used PHP, HTML and CSS to made that website.',
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
