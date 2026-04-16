import { useActiveHeading } from "../../_hooks/useActiveHeading";
import { useTocHeadings } from "../../_hooks/useTokHeadings";
import styles from "./TableOfContents.module.css";

function TableOfContents({ onClickFunction = () => {} }) {
    const headings = useTocHeadings();
    const activeId = useActiveHeading();

    if (headings.length === 0) {
        return null;
    }

    return (
        <>
            <div className={styles.container}>
                <li className={styles.mainList}>
                    {headings.map((heading) => (
                        <a
                            className={`${styles.heading} ${styles[`level${heading.level}`]} ${activeId === heading.id ? styles.active : ""}`}
                            key={heading.id}
                            href={`#${heading.id}`}
                            onClick={onClickFunction}
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
