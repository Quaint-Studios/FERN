import { IRoute } from './Routes';

import Dashboard from '../pages/Dashboard/Dashboard';
import Hire from '../pages/Hire/Hire';
import Home from '../pages/Home/Home';

// tslint:disable: object-literal-sort-keys

const RootRoutes: IRoute[] = [
  {
    name: 'Dashboard',
    description: `You can view test analytics for this Firebase Express React NodeJS Template (FERN)! As well as view admin-related content.`,
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: 'Firebase Express React NodeJS',
    description: `This is a firebase react express nodejs template. With authentication, user roles, administration panels, and database usage. Implementing the basic CRUD operations.`,
    path: '/',
    component: Home
  },
  {
    name: 'Hire a Developer',
    description: `Want a Firebase React website built like this? This is the place to go. Feel free to send in a request to have your website developed!`,
    path: '/hire',
    component: Hire
  }
];

export default RootRoutes;
