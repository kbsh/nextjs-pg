import { SvgIconProps } from '@material-ui/core';

export type Route = {
  name: string;
  href: string;
  icon: React.ComponentType<SvgIconProps>;
};
