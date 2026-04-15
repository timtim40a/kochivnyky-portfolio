import TableOfContents from "../TableOfContents/TableOfContents";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <>
            <nav className={styles.container}>
                <img
                    src="/kochivnyky_logo_ENG.png"
                    alt="Kochivnyky Logo"
                    className={styles.logo}
                />
                <TableOfContents />
            </nav>
        </>
    );
}

export default Navbar;
