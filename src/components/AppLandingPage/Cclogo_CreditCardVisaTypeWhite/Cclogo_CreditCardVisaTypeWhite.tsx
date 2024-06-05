import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cclogo_CreditCardVisaTypeWhite.module.css';
import { Visa_logo_whiteIcon } from './Visa_logo_whiteIcon.js';

interface Props {
  className?: string;
  classes?: {
    visa_logo_white?: string;
    root?: string;
  };
  swap?: {
    visa_logo_white?: ReactNode;
  };
}
/* @figmaId 101:48 */
export const Cclogo_CreditCardVisaTypeWhite: FC<Props> = memo(function Cclogo_CreditCardVisaTypeWhite(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.visa_logo_white || ''} ${classes.visa_logo_white}`}>
        {props.swap?.visa_logo_white || <Visa_logo_whiteIcon className={classes.icon} />}
      </div>
    </div>
  );
});
