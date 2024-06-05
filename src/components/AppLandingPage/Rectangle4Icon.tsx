import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 257 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.501418 8.23241C0.511312 3.82114 4.09013 0.250351 8.5014 0.250351L248.361 0.250351C252.779 0.250351 256.361 3.83207 256.361 8.25035V63.2402C256.361 67.6624 252.773 71.2458 248.351 71.2402L8.36858 70.9349C3.94727 70.9292 0.368853 67.3382 0.378769 62.9169L0.501418 8.23241Z'
      fill='#FF5555'
    />
  </svg>
);

const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
