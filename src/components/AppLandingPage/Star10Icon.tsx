import { memo, SVGProps } from 'react';

const Star10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M50.9117 17.6793L35.8375 34.3495L55.3253 45.5456L34.8128 36.3606L30.1867 58.3544L32.5835 36.0075L10.2366 38.4043L32.2304 33.7782L23.0454 13.2657L34.2415 32.7535L50.9117 17.6793Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Star10Icon);
export { Memo as Star10Icon };
