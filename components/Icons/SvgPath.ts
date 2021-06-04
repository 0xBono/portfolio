import { FunctionComponent } from 'react';
import BlueCircle from './svgs/BlueCircle.svg';
import GreenCircle from './svgs/GreenCircle.svg';
import PurpleCircle from './svgs/PurpleCircle.svg';

type Icon =
  | 'BlueCircle'
  | 'GreenCircle'
  | 'PurpleCircle';

type Images = {
  [key in Icon]: FunctionComponent;
};

const images: Images = {
  BlueCircle,
  GreenCircle,
  PurpleCircle,
};

export default images;
