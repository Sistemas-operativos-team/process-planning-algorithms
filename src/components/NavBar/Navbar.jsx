import styles from './styles.module.css';

function NavBar() {
    const openWhatsAppChat = () => {
        const phoneNumber = '3209756105';
        const whatsAppURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsAppURL);
    }

    return (
        <header>
            <div className={styles.color}>
                <div className={styles.allHeader}>
                    <div className={styles.left}>
                        <a href="/" className={styles.sectionLink}>FIFO</a>
                        <a href="/" className={styles.sectionLink}>SJF</a>
                    </div>
                    <div className={styles.logo}>
                        <a href="/home"><img src="/images/Logo.png" alt="" width="100" height="100" className={styles.logoImage} /></a>
                    </div>
                    <div className={styles.right}>
                        <a href="/" className={styles.sectionLink}>Round Robin</a>
                        <a href="/" className={styles.sectionLink}>INFO</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
