import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><a href="https://github.com/mryzleitsev/ryzleitsev_cms">ryzleitsev_cms</a></div>
            <div className={styles.text}>Course project</div>
        </div>
    );
};

export default Footer;