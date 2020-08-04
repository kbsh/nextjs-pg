import AcUnitSharp from '@material-ui/icons/AcUnitSharp';
import FaceIcon from '@material-ui/icons/Face';
import GetApp from '@material-ui/icons/GetApp';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Mail from '@material-ui/icons/Mail';

import { Route } from '../interfaces/routes';

export enum Path {
  Home = '/',
  Profile = '/profile',
  APILogin = '/api/auth/login',
  APIProfile = '/api/auth/profile',
}

export const routes: Route[] = [
  {
    name: 'Home',
    href: Path.Home,
    icon: FaceIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: GetApp,
  },
  {
    name: 'Users',
    href: '/users',
    icon: LiveTvIcon,
  },
  {
    name: 'Users List',
    href: '/api/users',
    icon: Mail,
  },
  {
    name: 'Profile',
    href: Path.Profile,
    icon: AcUnitSharp,
  },
];
