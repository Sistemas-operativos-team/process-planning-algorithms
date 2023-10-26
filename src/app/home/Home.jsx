import React from 'react';
import styles from './styles.module.css';
import NavBar from "../../components/NavBar/Navbar.jsx";
import InfoAlgorithms from "../../components/InfoAlgorithms/InfoAlgorithms.jsx";
import Footer from "../../components/Footer/Footer.jsx";

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
