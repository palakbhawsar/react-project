import { memo, SVGProps } from 'react';

const Star7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.1689 0.241913L22.1523 19.8011L41.058 14.6922L22.76 21.6716L33.4611 38.0733L21.1689 22.8276L8.87674 38.0733L19.5778 21.6716L1.27976 14.6922L20.1855 19.8011L21.1689 0.241913Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Star7Icon);
export { Memo as Star7Icon };
