import { cn } from "@/lib/utils";

export function SunMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={cn("h-16 w-16", className)} fill="none">
      <path
        d="M60 5l5.2 17.3L78 9.8l-1.1 18.1L94 22l-7.2 16.7L105 39.5 92 52.2l17 6.2-17 6.1 13 12.8-18.2.7L94 94l-17.1-5.9L78 106.2 65.2 93.7 60 111l-5.2-17.3L42 106.2l1.1-18.1L26 94l7.2-16.7L15 76.5l13-12.8-17-6.1 17-6.2-13-12.7 18.2-.7L26 22l17.1 5.9L42 9.8l12.8 12.5L60 5z"
        fill="#F2C766"
      />
      <circle cx="60" cy="58" r="24" fill="#F5E6C8" opacity="0.96" />
      <path
        d="M31 78c12-9 23-9 34 0 9 7 17 7 25 0"
        stroke="#1E3A5F"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M34 88c10-7 20-7 30 0 10 7 20 7 30 0"
        stroke="#6BAEDB"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
