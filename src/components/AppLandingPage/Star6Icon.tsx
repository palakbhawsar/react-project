import { memo, SVGProps } from 'react';

const Star6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 68' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M50.9117 16.9706L35.8375 33.6408L55.3253 44.8369L34.8128 35.6519L30.1867 57.6456L32.5835 35.2988L10.2366 37.6956L32.2304 33.0695L23.0454 12.557L34.2415 32.0448L50.9117 16.9706Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Star6Icon);
export { Memo as Star6Icon };
