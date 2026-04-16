import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = "", label, duration = 2000 }: Props) {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gold-gradient font-serif">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-cream/70 font-sans">{label}</p>
    </div>
  );
}
