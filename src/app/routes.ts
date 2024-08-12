import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProyekComponent} from './proyek/proyek.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Beranda',
    },
    {
      path: 'proyek',
      component: ProyekComponent,
      title: 'Proyek',
    },
  ];
  export default routeConfig;