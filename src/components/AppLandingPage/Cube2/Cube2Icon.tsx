import { memo, SVGProps } from 'react';

const Cube2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 0.5V10M9 10L17.5 5.27771M9 10L0.5 5.27771M9 10V19.5M17.5 14.7222L9.77703 10.4317C9.49343 10.2741 9.35162 10.1953 9.20145 10.1645C9.06854 10.1371 8.93146 10.1371 8.79855 10.1645C8.64838 10.1953 8.50658 10.2741 8.22297 10.4317L0.5 14.7222M18 14.0586V5.94145C18 5.5988 18 5.42748 17.9495 5.27468C17.9049 5.13951 17.8318 5.01542 17.7354 4.91073C17.6263 4.7924 17.4766 4.7092 17.177 4.54279L9.77703 0.431683C9.49343 0.274125 9.35162 0.195346 9.20145 0.164461C9.06854 0.137125 8.93146 0.137125 8.79855 0.164461C8.64838 0.195346 8.50658 0.274125 8.22297 0.431683L0.822971 4.5428C0.523447 4.7092 0.373685 4.7924 0.264633 4.91074C0.168158 5.01543 0.0951473 5.13951 0.0504848 5.27468C0 5.42748 0 5.5988 0 5.94145V14.0586C0 14.4012 0 14.5725 0.0504848 14.7253C0.0951473 14.8605 0.168158 14.9846 0.264633 15.0893C0.373685 15.2076 0.523448 15.2908 0.822972 15.4572L8.22297 19.5683C8.50658 19.7259 8.64838 19.8047 8.79855 19.8355C8.93146 19.8629 9.06854 19.8629 9.20145 19.8355C9.35162 19.8047 9.49343 19.7259 9.77703 19.5683L17.177 15.4572C17.4766 15.2908 17.6263 15.2076 17.7354 15.0893C17.8318 14.9846 17.9049 14.8605 17.9495 14.7253C18 14.5725 18 14.4012 18 14.0586Z'
      stroke='#FF5555'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Cube2Icon);
export { Memo as Cube2Icon };
