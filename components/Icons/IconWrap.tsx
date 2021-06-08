/**
 * @author jjtjs159-jg
 * @see https://github.com/jjtjs159-jg
 */

import _ from 'lodash';
import { KeyboardEventHandler, useCallback, RefObject, memo } from 'react';

import classnames from 'classnames/bind';
import styles from './IconWrap.module.scss';

const cx = classnames.bind(styles);

interface IconProps {
  icon: React.FC;
  className?: string;
  onClick?: (e?: any) => void;
  forwardRef?: RefObject<HTMLSpanElement>;
}

const Icons: React.FC<IconProps> = ({ icon, forwardRef, className, onClick }) => {
  const Component = icon;

  const isClickable = !!onClick;

  const handleKeyDown: KeyboardEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      if (_.isEqual(e.key, 'Enter')) {
        onClick && onClick();
      }
    },
    [onClick],
  );

  const classes = cx('wrapper', className, {
    button: isClickable,
  });

  if (isClickable) {
    return (
      <span className={classes} ref={forwardRef} onClick={onClick} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
        <Component />
      </span>
    );
  }

  return (
    <span className={classes} ref={forwardRef}>
      <Component />
    </span>
  );
};

export default memo(Icons);
