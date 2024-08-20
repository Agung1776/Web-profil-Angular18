import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProyekComponent} from './proyek/proyek.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home',
    },
    {
      path: 'project',
      component: ProyekComponent,
      title: 'Project',
    },
  ];
  export default routeConfig;
