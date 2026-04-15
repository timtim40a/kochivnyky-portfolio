import styles from "./ContactCard.module.css";

type ContactCardProps = {
    imageSrc: string;
    name: string;
    link: string;
};

function ContactCard({ imageSrc, name, link }: ContactCardProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.container}>
            <img className={styles.avatar} src={imageSrc} />
            <span className={styles.name}>{name}</span>
        </a>
    );
}

export default ContactCard;
