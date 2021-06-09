import { FunctionComponent } from 'react';
import BlueCircle from './svgs/BlueCircle.svg';
import Scribble from './svgs/Scribble.svg';
import ArrowDown from './svgs/ArrowDown.svg';
import ArrowRight from './svgs/ArrowRight.svg';
import ArrowLeft from './svgs/ArrowLeft.svg';

type Icon = 'BlueCircle' | 'Scribble' | 'ArrowDown' | 'ArrowRight' | 'ArrowLeft';

type Images = {
  [key in Icon]: FunctionComponent;
};

const images: Images = {
  BlueCircle,
  Scribble,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
};

export default images;
