import { Route } from '@interfaces/routes';
import AcUnitSharp from '@material-ui/icons/AcUnitSharp';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';
import FaceIcon from '@material-ui/icons/Face';
import GetApp from '@material-ui/icons/GetApp';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Mail from '@material-ui/icons/Mail';

export enum Path {
  Home = '/',
  Profile = '/profile',
  Areas = '/areas',
  APILogin = '/api/auth/login',
  APILogout = '/api/auth/logout',
  APIProfile = '/api/auth/profile',
  APIAreas = '/api/areas',
  APIUsers = '/api/users',
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
  {
    name: 'Areas',
    href: Path.Areas,
    icon: ArrowDropDownCircle,
  },
];
