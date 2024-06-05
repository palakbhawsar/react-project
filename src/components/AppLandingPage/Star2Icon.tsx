import { memo, SVGProps } from 'react';

const Star2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 66 66' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M44.7847 53.5692L32.584 34.6941L16.7256 50.6201L30.9067 33.1838L10.8596 23.0229L31.8247 31.1218L35.2934 8.91608L34.0695 31.3578L56.2603 27.7947L34.5387 33.5655L44.7847 53.5692Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Star2Icon);
export { Memo as Star2Icon };
