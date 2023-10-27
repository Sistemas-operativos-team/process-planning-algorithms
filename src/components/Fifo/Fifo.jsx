import React from 'react';
import styles from './styles.module.css';
import NavBar from "../NavBar/Navbar.jsx";
import InfoAlgorithms from "../InfoAlgorithms/InfoAlgorithms.jsx";
import Footer from "../Footer/Footer.jsx";
import ComFifo from "../ComFifo/ComFifo.jsx";

const Fifo = () => {

    return (
        <div className={styles.all}>
            <NavBar/>
            <ComFifo/>
            <Footer/>
        </div>
    );
};

export default Fifo;
