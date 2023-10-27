import React from 'react';
import styles from './styles.module.css';
import NavBar from "../../components/NavBar/Navbar.jsx";
import InfoAlgorithms from "../../components/InfoAlgorithms/InfoAlgorithms.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ComFifo from "../../components/ComFifo/ComFifo.jsx";

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
