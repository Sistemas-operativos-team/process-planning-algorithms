import React from 'react';
import styles from './styles.module.css';
import NavBar from "../NavBar/Navbar.jsx";
import InfoAlgorithms from "../InfoAlgorithms/InfoAlgorithms.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {

    return (
        <div className={styles.all}>
            <div className={styles.firstPart}>
                <NavBar/>
                <div className={styles.picture}></div>
                <InfoAlgorithms/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
