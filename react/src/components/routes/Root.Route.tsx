import { IRoute } from './Routes';

import Home from '../pages/Home/Home';
import Hire from '../pages/Hire/Hire';

// tslint:disable: object-literal-sort-keys

const RootRoutes: IRoute[] = [
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
