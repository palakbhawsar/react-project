import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Trophy1.module.css';
import { Trophy1Icon } from './Trophy1Icon.js';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 101:37 */
export const Trophy1: FC<Props> = memo(function Trophy1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <Trophy1Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
