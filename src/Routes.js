import Dashboard from 'views/Dashboard.js';

import Places from './views/Places.js';
import Map from 'views/Map.js';
import UserProfile from 'views/UserProfile.js';
import Missions from 'views/Missions';

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-chart-pie-36',
    component: Dashboard,
    layout: '/admin'
  },
  {
    path: '/places',
    name: 'Locais',
    rtlName: 'الرموز',
    icon: 'tim-icons icon-book-bookmark',
    component: Places,
    layout: '/admin'
  },
  {
    path: '/map',
    name: 'Parceiros',
    rtlName: 'خرائط',
    icon: 'tim-icons icon-single-02',
    component: Map,
    layout: '/admin'
  },
  {
    path: '/missions',
    name: 'Missoes',
    rtlName: 'خرائط',
    icon: 'tim-icons icon-single-02',
    component: Missions,
    layout: '/admin'
  }
  // {
  //   path: '/profile',
  //   name: 'Configuracoes',
  //   rtlName: 'خرائط',
  //   icon: 'tim-icons icon-settings-gear-63',
  //   component: UserProfile,
  //   layout: '/admin'
  // }
];
export default routes;
