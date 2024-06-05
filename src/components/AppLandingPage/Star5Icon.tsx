import { memo, SVGProps } from 'react';

const Star5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 65' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M32.0001 0.70874L33.5049 30.6377L62.4339 22.8202L34.4348 33.4998L50.8092 58.5973L32.0001 35.2687L13.191 58.5973L29.5654 33.4998L1.56631 22.8202L30.4954 30.6377L32.0001 0.70874Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Star5Icon);
export { Memo as Star5Icon };
