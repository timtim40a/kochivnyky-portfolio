import { useTocHeadings } from "../../_hooks/useTokHeadings";
import styles from "./TableOfContents.module.css";

function TableOfContents() {
    const headings = useTocHeadings();

    if (headings.length === 0) {
        return null;
    }

    return (
        <>
            <div className={styles.container}>
                <li className={styles.mainList}>
                    {headings.map((heading) => (
                        <a
                            className={styles.heading}
                            key={heading.id}
                            href={`#${heading.id}`}
                        >
                            {heading.title}
                        </a>
                    ))}
                </li>
            </div>
        </>
    );
}

export default TableOfContents;
