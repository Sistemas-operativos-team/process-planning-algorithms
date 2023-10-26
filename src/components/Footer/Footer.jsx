import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.allFooter}>
                <div className={styles.footerContainer}>
                    <p>Proyecto desarollado para la materia de Sistemas operativos</p>
                    <center><p>Año 2023</p></center>
                </div>
                <div className={styles.socialContainer}>
                    <p>César Moreno</p>
                </div>

            </div>
            <div className={styles.copyrightContainer}>
                <span className={styles.copyright}>Copyright 2023, Algoritmos de planificación de procesos. OperativeSystemsDev</span>
            </div>
        </footer>
    );
};

export default Footer;