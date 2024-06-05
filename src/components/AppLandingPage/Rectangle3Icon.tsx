import { memo, SVGProps } from 'react';

const Rectangle3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 298 304' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.1557 229.089C29.3589 226.33 30.1027 223.355 32.1044 221.295L240.875 6.45444C243.957 3.28271 249.028 3.21356 252.195 6.30005L292.05 45.1361C295.215 48.2196 295.28 53.2845 292.197 56.4489L61.1998 293.506C56.9176 297.901 49.4863 296.038 47.7842 290.142L30.1557 229.089Z'
      fill='#FF5555'
    />
  </svg>
);

const Memo = memo(Rectangle3Icon);
export { Memo as Rectangle3Icon };
