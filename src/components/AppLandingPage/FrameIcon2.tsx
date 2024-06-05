import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5316 12.4724C15.5207 16.4604 16.4257 11.8467 18.9655 14.3848C21.4142 16.8328 22.8215 17.3232 19.7191 20.4247C19.3305 20.737 16.8615 24.4943 8.18448 15.8197C-0.4936 7.144 3.26146 4.67244 3.57385 4.28395C6.68374 1.17385 7.16574 2.58938 9.61437 5.03733C12.1542 7.5765 7.54254 8.48441 11.5316 12.4724Z'
      fill='#FF5555'
    />
  </svg>
);

const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
