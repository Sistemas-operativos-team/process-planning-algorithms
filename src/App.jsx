import styles from "./App.css?inline";
import Home from "./app/home/Home.jsx";
import Fifo from "./app/fifo/Fifo.jsx";

function App() {

  return (

      <div className={styles.allContainer}>
          {/*<Fifo/>*/}
          <Home/>
      </div>

  )
}

export default App;
