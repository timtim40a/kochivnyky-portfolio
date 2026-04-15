import styles from "./Footer.module.css";

function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <a
                    href="https://www.instagram.com/kochivnyky_playback/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Our Instagram
                </a>
                <p>&copy; 2023-2026 Kochivnyky. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;
