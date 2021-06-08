import _ from 'lodash';
import { GNBLayout } from 'components/Layout';
import { Jumbotron } from 'components/Jumbotron';
import { ImageCard } from 'components/Card';
import { Experience } from './contents';

import classNames from 'classnames/bind';
import styles from './Landing.module.scss';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
  return (
    <GNBLayout>
      <Jumbotron />
      <section className={cx('work-section')}>
        <span className={cx('content-title')}>Work</span>
        <div className={cx('card-content')}>
          {_.map(Experience, (item, idx) => (
            <ImageCard
              articleId={idx.toString()}
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
    </GNBLayout>
  );
};