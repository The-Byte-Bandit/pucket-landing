import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  durationMs?: number;
  decimals?: number;
}

export default function CountUp({ to, durationMs = 1200, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + durationMs;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = easeOutQuart * to;
      
      setCount(current);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    updateCount();
  }, [isInView, to, durationMs]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}
