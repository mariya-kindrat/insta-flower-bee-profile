"use client";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackButton({
  href,
  label = "Back",
  className = ""
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group ${className}`}
      aria-label={label}
    >
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="font-medium">{label}</span>
    </button>
  );
}