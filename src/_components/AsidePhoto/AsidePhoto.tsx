import styles from "./AsidePhoto.module.css";

type AsidePhotoProps = {
    src: string;
    alt: string;
    align?: "left" | "right";
};

function AsidePhoto({ src, alt, align = "left" }: AsidePhotoProps) {
    return (
        <>
            <aside className={`${styles.container} ${align === "right" ? styles.containerRight : ""}`}>
                <img src={src} alt={alt} className={styles.photo} />
                <span className={styles.caption}>{alt}</span>
            </aside>
        </>
    );
}

export default AsidePhoto;
