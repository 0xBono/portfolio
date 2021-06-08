import _ from 'lodash';

import classNames from 'classnames/bind';
import styles from './AwardCard.module.scss';

const cx = classNames.bind(styles);

interface AwardCardProps {
  id: string;
  content: {
    tag: string[];
    title: string;
    date: Date;
  };
}

export const AwardCard: React.FC<AwardCardProps> = ({ id, content, ...rest }) => {
  return (
    <article id={id} className={cx('wrap')} {...rest}>
      <div className={cx('tag-content')}>
        {_.map(content.tag, (tag, key) => (
          <span key={key} className={cx('tag')}>
            {tag}
          </span>
        ))}
      </div>
      <span className={cx('content-title')}>{content.title}</span>
      <span className={cx('date')}>{content.date?.toDateString()}</span>
    </article>
  );
};
