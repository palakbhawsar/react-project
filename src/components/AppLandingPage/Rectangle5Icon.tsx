import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 57 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5.10058 37.6526L41.2432 0.375529L56.7167 15.4534L15.7781 57.4661L5.10058 37.6526Z' fill='black' />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
