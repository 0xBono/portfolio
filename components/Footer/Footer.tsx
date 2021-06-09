import _ from 'lodash';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

export const Footer: React.FC = () => {
  return (
    <section className={cx('wrap')}>
      <div className={cx('footer-content')}>
        <span>© Jimin Son(0xBono). All rights reserved.</span>
      </div>
    </section>
  );
};
