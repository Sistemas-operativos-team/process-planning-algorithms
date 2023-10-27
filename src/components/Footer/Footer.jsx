import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
    const whatsappLink = "https://wa.me/+573209756105?text=Hola, me gustaría saber más sobre los algoritmos de planificación de procesos.";

    return (
        <footer>
            <div className={styles.allFooter}>
                <div className={styles.footerContainer}>
                    <div>Ingeniería de sistemas y Computación UPTC</div>
                    <div>Sistemas Operativos 2023</div>
                    <div>Desarrollado por:</div>
                    <div>César Augusto Moreno Cano</div>
                    <div>David Santiago Cubillos Méndez</div>
                    <div>Nicolás Santiago Gil Torres</div>
                </div>
                <div className={styles.socialContainer}>
                    <div className={styles.Img}>
                        <a target={"_blank"} href="https://github.com/Sistemas-operativos-team/process-planning-algorithms"><img className={styles.imageElement} src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" alt="Github" width="10" height="10" /></a>
                        <a target={"_blank"} href={whatsappLink}><img className={styles.imageElement}  src="https://www.freepngimg.com/thumb/whatsapp/77170-logo-whatsapp-download-hq-png-thumb.png" alt="WhatsApp" width="10" height="10" /></a>
                        <a target={"_blank"} href={"https://www.instagram.com/cesarrr__mc/"}><img className={styles.imageElement}  src="https://th.bing.com/th/id/R.7b418b95265465c6304ed0404386e011?rik=T201BtL1wsLrtg&riu=http%3a%2f%2feternal-emotion.com%2fwp-content%2fuploads%2f2018%2f05%2finstagram-icon-grey.png&ehk=4FGt5qmr1dz7yLY3ro2TbzvdvcnhMDZhQ5G8lyP3dkI%3d&risl=&pid=ImgRaw&r=0" alt="Instagram" width="10" height="10"/></a>
                    </div>
                </div>

            </div>
            <div className={styles.copyrightContainer}>
                <span className={styles.copyright}>Copyright 2023, Algoritmos de planificación de procesos. OperativeSystemsDev</span>
            </div>
        </footer>
    );
};

export default Footer;