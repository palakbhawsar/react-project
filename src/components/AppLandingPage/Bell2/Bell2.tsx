import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Bell2.module.css';
import { Bell2Icon } from './Bell2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 101:45 */
export const Bell2: FC<Props> = memo(function Bell2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <Bell2Icon className={classes.icon2} />
      </div>
    </div>
  );
});
