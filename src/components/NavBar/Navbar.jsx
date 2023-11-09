import styles from './styles.module.css';
function NavBar() {

    return (
        <header>
            <div className={styles.color}>
                <div className={styles.allHeader}>
                    <div className={styles.left}>
                        <a href="/fifo" className={styles.sectionLink}>FIFO</a>
                        <a href="/priority" className={styles.sectionLink}>Prioridad</a>
                    </div>
                    <div className={styles.logo}>
                        <a href="/home"><img src="/images/Logo.png" alt="" width="100" height="100" className={styles.logoImage} /></a>
                    </div>
                    <div className={styles.right}>
                        <a href="/sjf" className={styles.sectionLink}>SJF</a>
                        <a href="/round-robin" className={styles.sectionLink}>Round Robin</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
