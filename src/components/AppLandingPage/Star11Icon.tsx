import { memo, SVGProps } from 'react';

const Star11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 65' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M32 0.70874L33.5047 30.6377L62.4338 22.8202L34.4347 33.4998L50.8091 58.5973L32 35.2687L13.1909 58.5973L29.5653 33.4998L1.56619 22.8202L30.4953 30.6377L32 0.70874Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Star11Icon);
export { Memo as Star11Icon };
