import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BankNote3.module.css';
import { BankNote3Icon } from './BankNote3Icon.js';

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
/* @figmaId 101:35 */
export const BankNote3: FC<Props> = memo(function BankNote3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <BankNote3Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
