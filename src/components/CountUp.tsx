import { useEffect, useRef, useState } from "react";

type Props = {
    from?: number;
    to: number;
    durationMs?: number;
    decimals?: number;
    className?: string;
    suffix?: string;
};

export default function CountUp({ from = 0, to, durationMs = 1200, decimals = 0, className, suffix = "" }: Props) {
    const [value, setValue] = useState(from);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        let raf = 0;
        const step = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const t = Math.min(1, elapsed / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(from + (to - from) * eased);
            if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [from, to, durationMs]);

    return <span className={className}>{value.toFixed(decimals)}{suffix}</span>;
}


