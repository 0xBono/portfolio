import _ from 'lodash';
import { useRef } from 'react';
import { GNBLayout } from 'components/Layout';
import { Jumbotron } from 'components/Jumbotron';
import { ImageCard } from 'components/Card';
import { Icon, SvgPath } from 'components/Icons';
import { Experience, Award } from './contents';

import classNames from 'classnames/bind';
import styles from './Landing.module.scss';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
  const carouslRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 0.32,
      });
  };

  const handleNext = () => {
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 0.32,
      });
  };
  return (
    <GNBLayout>
      <Jumbotron />
      <section className={cx('work-section')}>
        <span className={cx('content-title')}>Work</span>
        <div className={cx('card-content')}>
          {_.map(Experience, (item, idx) => (
            <ImageCard
              id={idx.toString()}
              content={{
                img: item.content.img,
                tag: item.content.tag,
                title: item.content.title,
                date: item.content.date,
                current: item.content.current,
              }}
              to={item.to}
            />
          ))}
        </div>
      </section>
      <section className={cx('work-section')}>
        <span className={cx('content-title')}>Award</span>
        <div className={cx('carousl-button')}>
          <Icon className={cx('icon')} icon={SvgPath.ArrowLeft} onClick={handlePrev} />
          <Icon className={cx('icon')} icon={SvgPath.ArrowRight} onClick={handleNext} />
        </div>
        <div ref={carouslRef} className={cx('slide-content')}>
          {_.map(Award, (item, idx) => (
            <ImageCard
              id={idx.toString()}
              content={{
                img: item.content.img,
                tag: item.content.tag,
                title: item.content.title,
                date: item.content.date,
              }}
              to={item.to}
            />
          ))}
        </div>
      </section>
    </GNBLayout>
  );
};
