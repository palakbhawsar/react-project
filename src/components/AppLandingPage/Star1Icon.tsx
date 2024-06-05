import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M32 0L33.5047 29.9289L62.4338 22.1115L34.4347 32.7911L50.8091 57.8885L32 34.56L13.1909 57.8885L29.5653 32.7911L1.56619 22.1115L30.4953 29.9289L32 0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
