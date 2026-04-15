import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";
import styles from "./App.module.css";

function App() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src="/images/placeholder.jpg"
                        alt="Placeholder"
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h1>Welcome to Kochivnyky Portfolio</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam iste eligendi similique architecto ducimus
                        distinctio ab magni nemo. Necessitatibus neque quas
                        labore consequuntur nemo deleniti repellendus quasi
                        alias illum tempore? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Aliquam iste eligendi
                        similique architecto ducimus distinctio ab magni nemo.
                        Necessitatibus neque quas labore consequuntur nemo
                        deleniti repellendus quasi alias illum tempore? Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestias sunt rerum illo necessitatibus, mollitia
                        inventore nemo ullam pariatur distinctio culpa, fuga
                        veniam? Temporibus assumenda mollitia voluptatem
                        architecto ducimus, dignissimos deserunt. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        mollitia, temporibus inventore fugiat explicabo
                        consectetur repellat quam quisquam debitis fugit
                        accusamus nesciunt eaque quibusdam perferendis eveniet
                        earum ab nihil. Laboriosam. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Velit quod deleniti
                        veritatis soluta. Cumque, veritatis nesciunt expedita,
                        voluptas tempora tenetur odit possimus rerum, fuga ab
                        optio vero dicta odio pariatur. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Nesciunt dolor
                        commodi laborum porro doloremque quisquam non, eveniet
                        nemo numquam officiis, sapiente beatae veritatis
                        expedita tempore quo tenetur! Ab, eaque qui. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Aliquam
                        iste eligendi similique architecto ducimus distinctio ab
                        magni nemo. Necessitatibus neque quas labore
                        consequuntur nemo deleniti repellendus quasi alias illum
                        tempore? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aliquam iste eligendi similique
                        architecto ducimus distinctio ab magni nemo.
                        Necessitatibus neque quas labore consequuntur nemo
                        deleniti repellendus quasi alias illum tempore? Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestias sunt rerum illo necessitatibus, mollitia
                        inventore nemo ullam pariatur distinctio culpa, fuga
                        veniam? Temporibus assumenda mollitia voluptatem
                        architecto ducimus, dignissimos deserunt. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        mollitia, temporibus inventore fugiat explicabo
                        consectetur repellat quam quisquam debitis fugit
                        accusamus nesciunt eaque quibusdam perferendis eveniet
                        earum ab nihil. Laboriosam. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Velit quod deleniti
                        veritatis soluta. Cumque, veritatis nesciunt expedita,
                        voluptas tempora tenetur odit possimus rerum, fuga ab
                        optio vero dicta odio pariatur. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Nesciunt dolor
                        commodi laborum porro doloremque quisquam non, eveniet
                        nemo numquam officiis, sapiente beatae veritatis
                        expedita tempore quo tenetur! Ab, eaque qui.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
