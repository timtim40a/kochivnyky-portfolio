import ContactCard from "../ContactCard/ContactCard";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.generalInfo}>
                    <a
                        href="https://www.instagram.com/kochivnyky_playback/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Our Instagram
                    </a>
                    <p>
                        &copy; 2023-2026 Kochivnyky.
                        <br /> All rights reserved.
                    </p>
                </div>
                <div className={styles.contactContainer}>
                    <span className={styles.contactTitle}>Contact us!</span>
                    <ContactCard
                        imageSrc="/images/alona.png"
                        name="Alona Altunina"
                        link=""
                    />
                    <ContactCard
                        imageSrc="/images/dasha.png"
                        name="Daria Platonova"
                        link=""
                    />
                    <ContactCard
                        imageSrc="/images/deniza.png"
                        name="Deniza Glezina"
                        link="https://docs.google.com/document/d/18I7Ms2CCjQj8jGTFm3EXYJbLotERP0jsI4UhAk6HCsM/edit?usp=drivesdk"
                    />
                    <ContactCard
                        imageSrc="/images/lena_komp.png"
                        name="Olena Kompletova"
                        link=""
                    />
                    <ContactCard
                        imageSrc="/images/lena_polovn.png"
                        name="Olena Mordyk"
                        link=""
                    />
                    <ContactCard
                        imageSrc="/images/tim.png"
                        name="Tymur Soroka"
                        link="https://www.timtimsays.art/"
                    />
                    <ContactCard
                        imageSrc="/images/vika.png"
                        name="Victoria Nazarenko"
                        link=""
                    />
                    <ContactCard
                        imageSrc="/images/vlad.png"
                        name="Vlad Zernov"
                        link=""
                    />
                    <ContactCard
                        imageSrc="/images/zlata.png"
                        name="Zlata Karyzska"
                        link=""
                    />
                </div>
            </footer>
        </>
    );
}

export default Footer;
