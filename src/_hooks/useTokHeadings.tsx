import { useEffect, useState } from "react";

type TocItem = {
    id: string;
    title: string;
    level: number;
};

export function useTocHeadings(selector = "h2, h3") {
    const [headings, setHeadings] = useState<TocItem[]>([]);

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLHeadingElement>(selector)
        );

        const items = elements.map((el) => {
            if (!el.id) {
                el.id = el.textContent?.trim().toLowerCase().replace(/\s+/g, "-") || "";
            }
            return {
                id: el.id,
                title: el.textContent?.trim() || "",
                level: Number(el.tagName.replace("H", "")),
            };
        });

        setHeadings(items);
    }, [selector]);

    return headings;
}
