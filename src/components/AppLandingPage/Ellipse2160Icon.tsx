import { memo, SVGProps } from 'react';

const Ellipse2160Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={15.6845} cy={15.6845} r={15.6845} stroke='#FF5555' strokeWidth={0.653521} />
  </svg>
);

const Memo = memo(Ellipse2160Icon);
export { Memo as Ellipse2160Icon };
