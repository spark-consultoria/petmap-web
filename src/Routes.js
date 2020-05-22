/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.js';
import Icons from 'views/Icons.js';
import Map from 'views/Map.js';
import Notifications from 'views/Notifications.js';
import Rtl from 'views/Rtl.js';
import TableList from 'views/TableList.js';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';

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
    path: '/icons',
    name: 'Locais',
    rtlName: 'الرموز',
    icon: 'tim-icons icon-book-bookmark',
    component: Icons,
    layout: '/admin'
  },
  {
    path: '/map',
    name: 'Advogados',
    rtlName: 'خرائط',
    icon: 'tim-icons icon-single-02',
    component: Map,
    layout: '/admin'
  }
];
export default routes;
