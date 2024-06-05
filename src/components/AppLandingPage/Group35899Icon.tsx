import { memo, SVGProps } from 'react';

const Group35899Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 458 718' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_f_202_42)'>
      <ellipse
        cx={231.618}
        cy={525.068}
        rx={198.714}
        ry={107.054}
        transform='rotate(150 231.618 525.068)'
        fill='#FF5555'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_202_42'
        x={-51.8079}
        y={286.019}
        width={566.853}
        height={478.098}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={51.5773} result='effect1_foregroundBlur_202_42' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group35899Icon);
export { Memo as Group35899Icon };
