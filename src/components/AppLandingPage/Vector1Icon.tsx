import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24.3536 0.353553C24.5488 0.158291 24.5488 -0.158291 24.3536 -0.353553L21.1716 -3.53553C20.9763 -3.7308 20.6597 -3.7308 20.4645 -3.53553C20.2692 -3.34027 20.2692 -3.02369 20.4645 -2.82843L23.2929 0L20.4645 2.82843C20.2692 3.02369 20.2692 3.34027 20.4645 3.53553C20.6597 3.7308 20.9763 3.7308 21.1716 3.53553L24.3536 0.353553ZM0 0.5H24V-0.5H0V0.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
