import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cube2.module.css';
import { Cube2Icon } from './Cube2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 101:41 */
export const Cube2: FC<Props> = memo(function Cube2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <Cube2Icon className={classes.icon2} />
      </div>
    </div>
  );
});
