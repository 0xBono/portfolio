import _ from 'lodash';
import { ReactNode } from 'react';
import { Header } from 'components/Header';
import classNames from 'classnames/bind';
import styles from './GNBLayout.module.scss';

const cx = classNames.bind(styles);

interface GNBLayoutProps {
  children: ReactNode;
}

export const GNBLayout: React.FC<GNBLayoutProps> = ({ children }) => {
  return (
    <section className={cx('wrap')}>
      <Header />
      {children}
    </section>
  );
};
