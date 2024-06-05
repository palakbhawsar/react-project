import { memo, SVGProps } from 'react';

const Star5Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 0L8.6985 5.20599C8.44454 6.22185 8.31756 6.72978 8.05308 7.14309C7.81915 7.50868 7.50868 7.81915 7.14309 8.05308C6.72978 8.31756 6.22185 8.44454 5.20599 8.6985L0 10L5.20599 11.3015C6.22185 11.5555 6.72978 11.6824 7.14309 11.9469C7.50868 12.1808 7.81915 12.4913 8.05309 12.8569C8.31756 13.2702 8.44454 13.7782 8.6985 14.794L10 20L11.3015 14.794C11.5555 13.7782 11.6824 13.2702 11.9469 12.8569C12.1808 12.4913 12.4913 12.1808 12.8569 11.9469C13.2702 11.6824 13.7782 11.5555 14.794 11.3015L20 10L14.794 8.6985C13.7782 8.44454 13.2702 8.31756 12.8569 8.05308C12.4913 7.81915 12.1808 7.50868 11.9469 7.14309C11.6824 6.72978 11.5555 6.22185 11.3015 5.20599L10 0Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Star5Icon2);
export { Memo as Star5Icon2 };
