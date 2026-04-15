import { useEffect, useState } from "react";

type UseActiveHeadingOptions = {
    selector?: string;
    rootMargin?: string;
    threshold?: number | number[];
};

export function useActiveHeading({
    selector = "h2[id], h3[id]",
    rootMargin = "0px 0px -60% 0px",
    threshold = [0, 0.25, 0.5, 0.75, 1],
}: UseActiveHeadingOptions = {}) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const headings = Array.from(
            document.querySelectorAll<HTMLElement>(selector)
        );

        if (!headings.length) return;

        let visibleHeadings = new Map<string, number>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = (entry.target as HTMLElement).id;
                    if (!id) return;

                    if (entry.isIntersecting) {
                        visibleHeadings.set(id, entry.intersectionRatio);
                    } else {
                        visibleHeadings.delete(id);
                    }
                });

                const visibleIds = Array.from(visibleHeadings.keys());

                if (visibleIds.length === 0) return;

                const bestId = visibleIds.sort((a, b) => {
                    const aEl = document.getElementById(a);
                    const bEl = document.getElementById(b);
                    if (!aEl || !bEl) return 0;

                    const aTop = Math.abs(aEl.getBoundingClientRect().top);
                    const bTop = Math.abs(bEl.getBoundingClientRect().top);

                    return aTop - bTop;
                })[0];

                setActiveId(bestId);
            },
            { root: null, rootMargin, threshold }
        );

        headings.forEach((heading) => observer.observe(heading));

        return () => observer.disconnect();
    }, [selector, rootMargin, threshold]);

    return activeId;
}
