import _ from 'lodash';

import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './ImageCard.module.scss';

const cx = classNames.bind(styles);

interface ImageCardProps {
  articleId: string;
  content: {
    img?: string;
    tag: string | string[];
    title: string;
    date: Date;
  };
  to?: string;
  slug: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ articleId, content, to, slug, ...rest }) => {
  return (
    <Link href={`/${to}/${encodeURIComponent(slug)}`}>
      <article id={articleId} className={cx('wrap')} {...rest}>
        <img src={content.img} alt={content.title} className={cx('image')} />
        <div className={cx('tag-content')}>
          {_.map(content.tag, (tag, key) => (
            <span key={key} className={cx('tag')}>
              {tag}
            </span>
          ))}
        </div>
        <span className={cx('content-title')}>{content.title}</span>
        <span className={cx('date')}>{content.date.toDateString()}</span>
      </article>
    </Link>
  );
};
