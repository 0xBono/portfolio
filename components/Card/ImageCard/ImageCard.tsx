import _ from 'lodash';

import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './ImageCard.module.scss';

const cx = classNames.bind(styles);

interface ImageCardProps {
  id: string;
  content: {
    img?: string;
    tag: string[];
    title: string;
    date?: Date;
    current?: boolean;
  };
  to: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ id, content, to, ...rest }) => {
  return (
    <Link href={to}>
      <article id={id} className={cx('wrap')} {...rest}>
        <img src={content.img} alt={content.title} className={cx('image')} />
        <div className={cx('tag-content')}>
          {_.map(content.tag, (tag, key) => (
            <span key={key} className={cx('tag')}>
              {tag}
            </span>
          ))}
        </div>
        <span className={cx('content-title')}>{content.title}</span>
        <span className={cx('date')}>{content.current ? 'Current' : content.date?.toDateString()}</span>
      </article>
    </Link>
  );
};
