import _ from 'lodash';

import { Icon, SvgPath } from 'components/Icons';

import classNames from 'classnames/bind';
import styles from './Jumbotron.module.scss';

const cx = classNames.bind(styles);

export const Jumbotron: React.FC<{}> = () => {
  return (
    <section className={cx('wrap')}>
      <div className={cx('inner')}>
        <span className={cx('title')}>Hola,</span>
        <span className={cx('subtitle')}>EVERYONE</span>
        <div className={cx('scribble-content')}>
          <Icon className={cx('icon')} icon={SvgPath.Scribble} />
          <span className={cx('scribble-text')}>I heartily welcome you to visit!</span>
        </div>
        <div className={cx('epilogue-content')}>
          <p className={cx('epilogue-text')}>
            While working at a startup, I tried to introduce various cultures.
            <br />
            All team members grow together, and we create and follow a culture
            <br />
            where personal growth can lead to company growth.
          </p>
          <a href="mailto:iam@sonjim.in">
            <button type="button" className={cx('epilogue-button')}>
              Contact us
            </button>
          </a>
        </div>
        <Icon className={cx('mouse-ux')} icon={SvgPath.ArrowDown} />
      </div>
    </section>
  );
};
