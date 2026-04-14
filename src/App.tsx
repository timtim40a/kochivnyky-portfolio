import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";
import styles from "./App.module.css";

function App() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Welcome to Kochivnyky Portfolio</h1>
                <p>
                    This is a placeholder for the main content of the portfolio.
                </p>
            </main>
            <Footer />
        </>
    );
}

export default App;
