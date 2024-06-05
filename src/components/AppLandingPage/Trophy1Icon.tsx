import { memo, SVGProps } from 'react';

const Trophy1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.84227 8.80279C4.67669 8.80279 2.92114 7.04724 2.92114 4.88166L2.92114 1.25099C2.92114 0.980531 2.92114 0.845302 2.96055 0.737018C3.02662 0.555492 3.16962 0.412496 3.35114 0.346426C3.45943 0.307014 3.59466 0.307014 3.86512 0.307014L9.81942 0.307014C10.0899 0.307014 10.2251 0.307014 10.3334 0.346426C10.5149 0.412496 10.6579 0.555492 10.724 0.737018C10.7634 0.845302 10.7634 0.980531 10.7634 1.25099V4.88166C10.7634 7.04724 9.00785 8.80279 6.84227 8.80279ZM6.84227 8.80279V10.7634M10.7634 1.61406L12.3972 1.61406C12.7017 1.61406 12.854 1.61406 12.9741 1.6638C13.1342 1.73013 13.2614 1.85736 13.3277 2.01749C13.3775 2.13758 13.3775 2.28984 13.3775 2.59434V2.9211C13.3775 3.52886 13.3775 3.83273 13.3107 4.08205C13.1294 4.75863 12.6009 5.28709 11.9244 5.46838C11.675 5.53519 11.3712 5.53519 10.7634 5.53519M2.92114 1.61406L1.28734 1.61406C0.982834 1.61406 0.830583 1.61406 0.710485 1.6638C0.550354 1.73013 0.42313 1.85736 0.356801 2.01749C0.307055 2.13758 0.307055 2.28984 0.307055 2.59434L0.307055 2.9211C0.307055 3.52886 0.307055 3.83273 0.37386 4.08205C0.555147 4.75863 1.08361 5.28709 1.76019 5.46838C2.00951 5.53519 2.31338 5.53519 2.92114 5.53519M3.86512 13.3774L9.81942 13.3774C9.97984 13.3774 10.1099 13.2474 10.1099 13.087C10.1099 11.8037 9.06955 10.7634 7.78624 10.7634H5.89829C4.61499 10.7634 3.57466 11.8037 3.57466 13.087C3.57466 13.2474 3.7047 13.3774 3.86512 13.3774Z'
      stroke='#FF5555'
      strokeWidth={1.30704}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Trophy1Icon);
export { Memo as Trophy1Icon };