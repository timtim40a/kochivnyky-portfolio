import styles from "./AsidePhoto.module.css";

type AsidePhotoProps = {
    src: string;
    alt: string;
};

function AsidePhoto({ src, alt }: AsidePhotoProps) {
    return (
        <>
            <aside className={styles.container}>
                <img src={src} alt={alt} className={styles.photo} />
                <span className={styles.caption}>{alt}</span>
            </aside>
        </>
    );
}

export default AsidePhoto;
