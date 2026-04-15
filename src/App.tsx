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
                        <h1>Welcome to Kochivnyky Portfolio</h1>
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
                            Our mission is to create innovative solutions that
                            empower individuals and businesses to achieve their
                            goals. We strive to deliver high-quality products
                            and services that exceed our clients' expectations.
                        </p>
                        <h2>Our Services</h2>
                        <p>
                            We offer a wide range of services, including web
                            development, mobile app development, digital
                            marketing, and graphic design. Our team of experts
                            is dedicated to providing customized solutions that
                            meet the unique needs of each client.
                        </p>
                        <h3>Performances</h3>
                        <p>
                            We have performed at various events and venues,
                            showcasing our talents and creativity. Our
                            performances are known for their energy, passion,
                            and ability to captivate audiences of all ages.
                        </p>
                        <h3>Workshops</h3>
                        <p>
                            We also offer workshops and training sessions to
                            help individuals and organizations develop their
                            skills and knowledge in various areas. Our workshops
                            are designed to be interactive, engaging, and
                            informative, providing participants with practical
                            tools and insights they can apply in their personal
                            and professional lives.
                        </p>
                        <h2>Our Team</h2>
                        <p>
                            Our team consists of highly skilled professionals
                            with years of experience in their respective fields.
                            We are committed to delivering exceptional results
                            and providing outstanding customer service.
                        </p>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or would like to learn
                            more about our services, please don't hesitate to
                            contact us. You can reach us at.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
