import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const BagCheckedIcon = React.forwardRef<SVGSVGElement, IconProps>(function BagCheckedIcon(
  { size = 24, ...props },
  ref
) {
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 9.25V8.5c0-2.485 1.94-4.5 4.333-4.5 2.394 0 4.334 2.015 4.334 4.5v.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.75 9.25h12.5l-1.083 10.25a1.5 1.5 0 0 1-1.49 1.333H8.323a1.5 1.5 0 0 1-1.49-1.333L5.75 9.25Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.1 14.2 1.55 1.55 3.95-3.95"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(function ChevronLeftIcon(
  { size = 18, ...props },
  ref
) {
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path d="m11 4.5-4.5 4.5 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(function ChevronRightIcon(
  { size = 18, ...props },
  ref
) {
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path d="m7 4.5 4.5 4.5L7 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(function ChevronDownIcon(
  { size = 15, ...props },
  ref
) {
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true" {...props}>
      <path d="m3.5 5.75 4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(function ChevronUpIcon(
  { size = 15, ...props },
  ref
) {
  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true" {...props}>
      <path d="m3.5 9.25 4-4 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});
