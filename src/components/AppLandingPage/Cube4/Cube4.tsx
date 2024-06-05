import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cube4.module.css';
import { Cube4Icon } from './Cube4Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 101:43 */
export const Cube4: FC<Props> = memo(function Cube4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <Cube4Icon className={classes.icon2} />
      </div>
    </div>
  );
});
