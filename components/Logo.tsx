type LogoProps = {
  className?: string;
};

export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path
        d="M18.8 8.4 L20.4 6.2 L20.8 8.8 L23.2 9.4 L20.8 10.2 L20.6 12.8 L19.1 10.9 L16.6 11.3 L18.2 9.7 Z"
        fill="currentColor"
      />
      <path
        d="M12.5 16.2 C11.3 15 9.2 14.9 7.8 16.1 C9.3 18.6 12 19.6 14.6 19.2 C13.8 17.8 13.3 17 12.5 16.2 Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
