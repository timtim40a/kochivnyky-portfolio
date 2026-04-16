import { useState } from "react";
import TableOfContents from "../TableOfContents/TableOfContents";
import styles from "./Navbar.module.css";

function Navbar() {
    function setClosed() {
        setOpen(false);
    }
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className={styles.topNav}>
                <img
                    src="/kochivnyky_logo_notext.png"
                    alt="Kochivnyky Logo"
                    className={styles.topLogo}
                />
                <h1 className={styles.heading}>KOCHIVNYKY</h1>
            </nav>
            <button
                className={styles.burger}
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                <span
                    className={`${styles.bar} ${open ? styles.barTop : ""}`}
                />
                <span
                    className={`${styles.bar} ${open ? styles.barMid : ""}`}
                />
                <span
                    className={`${styles.bar} ${open ? styles.barBot : ""}`}
                />
            </button>

            {open && (
                <div
                    className={styles.overlay}
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav
                className={`${styles.container} ${open ? styles.containerOpen : ""}`}
            >
                <img
                    src="/kochivnyky_logo_ENG.png"
                    alt="Kochivnyky Logo"
                    className={styles.logo}
                />
                <TableOfContents onClickFunction={setClosed} />
            </nav>
        </>
    );
}

export default Navbar;
