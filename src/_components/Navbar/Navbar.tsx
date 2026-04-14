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
                <div className={styles.contents}>
                    <div className={styles.chapter}>Chapter 1</div>
                    <div className={styles.chapter}>Chapter 2</div>
                    <div className={styles.chapter}>Chapter 3</div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
