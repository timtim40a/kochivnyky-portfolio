import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";
import styles from "./App.module.css";

function App() {
    return (
        <>
            <div className={styles.bodyWrapper}>
                <div className={styles.sidebarWrapper}>
                    <Navbar />
                </div>
                <main className={styles.main}>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src="/images/placeholder.jpg"
                            alt="Placeholder"
                        />
                    </div>
                    <div className={styles.contentContainer}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                        <h2>Our Mission</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                        <h2>Our Services</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                        <h3>Performances</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                        <h3>Workshops</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                        <h2>Our Team</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                        <h2>Video materials</h2>
                        <p>
                            <iframe
                                width="640"
                                height="375"
                                src="https://www.youtube.com/embed/eViCPa8kpTw?si=NpwS773xr02sFBfJ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen={true}
                            ></iframe>
                            <iframe
                                width="640"
                                height="375"
                                src="https://www.youtube.com/embed/ONUiUO8noJE?si=1sXEmOYQ-IGwMJlA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen={true}
                            ></iframe>
                            <iframe
                                width="640"
                                height="375"
                                src="https://www.youtube.com/embed/FbpdRTpYjm4?si=FaV156eg1zojyqLo"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen={true}
                            ></iframe>
                            <iframe
                                width="315"
                                height="560"
                                src="https://www.youtube.com/embed/6nSGKyHS4Ns"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                            <iframe
                                width="315"
                                height="560"
                                src="https://www.youtube.com/embed/1eQenpx-464"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                            <iframe
                                width="315"
                                height="560"
                                src="https://www.youtube.com/embed/5yWGWvTFLxs"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                            ></iframe>
                        </p>
                        <h2>Contact Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquam iste eligendi similique architecto
                            ducimus distinctio ab magni nemo. Necessitatibus
                            neque quas labore consequuntur nemo deleniti
                            repellendus quasi alias illum tempore? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Aliquam
                            iste eligendi similique architecto ducimus
                            distinctio ab magni nemo. Necessitatibus neque quas
                            labore consequuntur nemo deleniti repellendus quasi
                            alias illum tempore? Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Molestias sunt rerum
                            illo necessitatibus, mollitia inventore nemo ullam
                            pariatur distinctio culpa, fuga veniam? Temporibus
                            assumenda mollitia voluptatem architecto ducimus,
                            dignissimos deserunt. Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
