import { FunctionComponent } from 'react';
import BlueCircle from './svgs/BlueCircle.svg';
import Scribble from './svgs/Scribble.svg';
import ArrowDown from './svgs/ArrowDown.svg';

type Icon = 'BlueCircle' | 'Scribble' | 'ArrowDown';

type Images = {
  [key in Icon]: FunctionComponent;
};

const images: Images = {
  BlueCircle,
  Scribble,
  ArrowDown,
};

export default images;
