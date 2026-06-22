export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 1440 120" className="h-16 w-full" preserveAspectRatio="none">
        <path
          d="M0,64 C180,120 300,8 480,54 C660,100 780,132 960,70 C1140,8 1260,32 1440,78 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
