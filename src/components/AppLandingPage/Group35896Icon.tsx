import { memo, SVGProps } from 'react';

const Group35896Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 317 230' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_f_202_45)'>
      <ellipse cx={145} cy={153.5} rx={145} ry={76.5} fill='#FDE598' />
    </g>
    <g filter='url(#filter1_f_202_45)'>
      <ellipse cx={175} cy={76.5} rx={142} ry={76.5} fill='#FF5555' />
    </g>
    <defs>
      <filter
        id='filter0_f_202_45'
        x={-100}
        y={-23}
        width={490}
        height={353}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={50} result='effect1_foregroundBlur_202_45' />
      </filter>
      <filter
        id='filter1_f_202_45'
        x={-67}
        y={-100}
        width={484}
        height={353}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={50} result='effect1_foregroundBlur_202_45' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group35896Icon);
export { Memo as Group35896Icon };
