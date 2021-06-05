import { FunctionComponent } from 'react';
import BlueCircle from './svgs/BlueCircle.svg';
import Scribble from './svgs/Scribble.svg';

type Icon = 'BlueCircle' | 'Scribble';

type Images = {
  [key in Icon]: FunctionComponent;
};

const images: Images = {
  BlueCircle,
  Scribble,
};

export default images;
