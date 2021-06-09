import _ from 'lodash';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
  return (
    <section className={cx('wrap')}>
      <div className={cx('navbar-content')}>
        <ul className={cx('navbar-wrap')}>
          <li className={cx('navbar-logo-title')}>2021</li>
        </ul>
        <ul className={cx('navbar-wrap')}>
          <li className={cx('navbar-item')}>
            <a>About</a>
          </li>
          <li className={cx('navbar-item')}>
            <a href="#work">Work</a>
          </li>
          <li className={cx('navbar-item')}>
            <a href="#award">Award</a>
          </li>
          <li className={cx('navbar-item')}>
            <a href="#project">Project</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
