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
                        <h2>About Us</h2>
                        <p>
                            We are “Kochivnyky” Playback Theatre, founded in
                            2022 by Ukrainians living abroad due to the war. We
                            are based in different cities and countries, but
                            periodically gather in one place to perform Playback
                            Theatre. We perform for people with similar
                            experiences - primarily Ukrainian war migrants -
                            helping them reflect on their experiences,
                            narrativize their losses, challenges and strengths,
                            and be together as a community.
                        </p>
                        <hr />
                        <p>
                            The Playback Theatre method is based on audience
                            members sharing their personal life stories, which
                            actors, accompanied by a musician, immediately bring
                            to life on stage without prior rehearsal. Our
                            performances create a temporary space of “home,” a
                            space of shared stories, where one can be oneself,
                            be vulnerable, and where every story can be truly
                            heard.
                        </p>
                        <hr />
                        <p>
                            Every performance for us is exploration of a
                            specific topic - like “space as a container of
                            experience”, “memory”, “transition”, “uncertainty”,
                            “encounter”, “life cycles”, “connection”,
                            “intimacy”, “isolation” etc. We exist scattered
                            across different countries, and each time we gather
                            is a renewal and a reunion — a performance as a
                            celebration that emerges from our encounter with one
                            another, with our current realities, and with the
                            lived reality of our audience.
                        </p>
                        <hr />
                        <p>
                            In our practice, we actively experiment with various
                            media, particularly multimedia and visual art,
                            combining them into interdisciplinary forms. We are
                            interested not only in exploring specific themes and
                            subjects, but also in the process of creation
                            itself—how narratives emerge and unfold in real time
                            without a predefined theme but with a defined
                            structure.
                        </p>
                        <hr />
                        <p>
                            Since 2022, we have performed in 5 cities, created
                            more than 20 performances, and collaborated with a
                            number of cultural institutions and initiatives such
                            as{" "}
                            <a
                                href="https://www.facebook.com/profile.php?id=61566068937815"
                                target="_blank"
                            >
                                Haus der Mehrsprachigkeit project,
                            </a>
                            <a
                                href="https://www.instagram.com/ukrainischer_verein_in_nieders/"
                                target="_blank"
                            >
                                Ukrainischer Verein in Nieders
                            </a>
                            ,
                            <a href="https://www.380art.com/" target="_blank">
                                +380ART
                            </a>
                            ,
                            <a
                                href="https://www.instagram.com/wasmitherz/"
                                target="_blank"
                            >
                                Wasmitherz
                            </a>
                            ,
                            <a
                                href="https://www.instagram.com/svoii_ua?g=5"
                                target="_blank"
                            >
                                SVOIIUA
                            </a>
                            ,
                            <a
                                href="https://kochamdebniki.pl/?lang=pl"
                                target="_blank"
                            >
                                Kocham Debniki
                            </a>
                            ,
                            <a
                                href="https://www.artcamp-tangente.com/"
                                target="_blank"
                            >
                                Kunstcamp Vasenthien
                            </a>
                        </p>
                        <h2>Our Mission</h2>
                        <p>Here will be our mission</p>
                        <h2>Our Services</h2>
                        <h3>Performances</h3>
                        <div>
                            <p>
                                <b>29.05.2022</b> — Playback Theatre Performance
                                (Hanover) - the first gathering of our team,
                                which consisted of actors from different
                                Ukrainian theatres. Held at the opening ceremony
                                of a playback studio for adults as a part of the{" "}
                                <a
                                    href="https://www.facebook.com/profile.php?id=61566068937815"
                                    target="_blank"
                                >
                                    Haus der Mehrsprachigkeit project
                                </a>
                                . Hanover, Germany
                            </p>
                            <p>
                                <b>10.07.2022</b> — Playback Theatre Performance
                                (Munich) at a{" "}
                                <a
                                    href="https://www.380art.com/"
                                    target="_blank"
                                >
                                    +380ART
                                </a>{" "}
                                event - a charity festival of Ukrainian culture
                                and exhibition of Ukrainian art. Munich, Germany
                            </p>
                            <p>
                                <b>06.08 - 11.08.2022</b> —{" "}
                                <a
                                    href="https://www.instagram.com/p/Cgbf9LbNkwo/"
                                    target="_blank"
                                >
                                    Red Thread Festival
                                </a>
                                . Organized by the Hanover Playback Theatre
                                team. With the help of{" "}
                                <a
                                    href="https://www.instagram.com/wasmitherz/"
                                    target="_blank"
                                >
                                    Wasmitherz
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.facebook.com/profile.php?id=61566068937815"
                                    target="_blank"
                                >
                                    Haus der Mehrsprachigkeit
                                </a>
                                , there were two performances, five workshops, a
                                city tour, and a dance-walking performance.
                                Hanover, Germany
                            </p>
                            <p>
                                <b>23.08.2022</b> — The closing Playback Theatre
                                performance of the Haus der Mehrsprachigkeit
                                project. Hanover, Germany
                            </p>
                            <p>
                                <b>09.09 - 11.09.2022</b> —{" "}
                                <a
                                    href="https://www.instagram.com/p/CiDReZlNND6/"
                                    target="_blank"
                                >
                                    Playback Theatre Festival
                                </a>
                                . Performed by the Leipzig playback team. Two
                                performances, five workshops, and a musical jam
                                took place on{" "}
                                <a href="https://mdbk.de/en/" target="_blank">
                                    MDBK
                                </a>{" "}
                                and{" "}
                                <a href="https://gfzk.de/en/" target="_blank">
                                    Gfzk
                                </a>{" "}
                                platforms. Leipzig, Germany
                            </p>
                            <p>
                                <b>11.12.2022</b> —{" "}
                                <a
                                    href="https://www.instagram.com/kochivnyky_playback/p/Cl8bbnct5G4/"
                                    target="_blank"
                                >
                                    Playback performance
                                </a>{" "}
                                dedicated to Wasmitherz’s anniversary. Hanover,
                                Germany
                            </p>
                            <p>
                                <b>11.03.2023</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/svoii_ua/p/Cpa1J7-M1WJ/"
                                    target="_blank"
                                >
                                    Beyond the Horizon
                                </a>
                                ” («За обрієм»); stories on hope and uncertainty
                                of immigrants. Hanover, Germany
                            </p>
                            <p>
                                <b>07.05.2023</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/Ck_EpQ5NSse/"
                                    target="_blank"
                                >
                                    Customs and rights to every city
                                </a>
                                ” («Кожному місту звичай і права»). Hanover,
                                Germany
                            </p>
                            <p>
                                <b>07.05.2023</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/CrnOm1wNm9y/"
                                    target="_blank"
                                >
                                    There Is Contact!
                                </a>
                                ” («Є контакт!»); exploring connection and
                                isolation. Hanover, Germany
                            </p>
                            <p>
                                <b>24.06.2023</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/Ctj03yAtnVy/"
                                    target="_blank"
                                >
                                    Checkpoint
                                </a>
                                ” («Точка збереження»); reflecting on pause and
                                uncertainty. Hanover, Germany
                            </p>
                            <p>
                                <b>02.07.2023</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/Ct_s92iNrUM/"
                                    target="_blank"
                                >
                                    By the Way
                                </a>
                                ”; exploring journeys and transformation.
                                Leipzig, Germany
                            </p>
                            <p>
                                <b>05.08.2023</b> — Performative research “
                                <a
                                    href="https://www.instagram.com/p/CvgyIvgNgKz/"
                                    target="_blank"
                                >
                                    The Suitcase
                                </a>
                                ” within “Sirnyky”; exploring memory and
                                migration,{" "}
                                <a
                                    href="https://www.artcamp-tangente.com/"
                                    target="_blank"
                                >
                                    Kunstcamp Vasenthien
                                </a>
                                , Germany
                            </p>
                            <p>
                                <b>25.08.2023</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/CwN3U1TNVMm/"
                                    target="_blank"
                                >
                                    Harvest
                                </a>
                                ” («Врожай»); reflection on transformation.
                                Hanover, Germany
                            </p>
                            <p>
                                <b>04.02.2024</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/C2pf46KNGxF/"
                                    target="_blank"
                                >
                                    Crossroads
                                </a>
                                ” («Перехрестя»); moments of choice and
                                transition. Kraków, Poland
                            </p>
                            <p>
                                <b>12.05.2024</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/C6QyT6WNcj8/"
                                    target="_blank"
                                >
                                    Big Water
                                </a>
                                ” («Велика вода»); working with loss and
                                instability. Kraków, Poland
                            </p>
                            <p>
                                <b>30.06.2024</b> — Online playback performance
                                “
                                <a
                                    href="https://www.instagram.com/p/C8v3Yd8tKLB/"
                                    target="_blank"
                                >
                                    Places
                                </a>
                                ” («Місця») as part of “Kharkiv Sea” festival.
                                Online (Zoom)
                            </p>
                            <p>
                                <b>09.01.2025</b> —{" "}
                                <a
                                    href="https://www.instagram.com/p/DES3Jdxtepe/"
                                    target="_blank"
                                >
                                    Multidisciplinary project “…”
                                </a>
                                ; combining performance and{" "}
                                <a
                                    href="https://timtim40a.github.io/kochivnyky/"
                                    target="_blank"
                                >
                                    multimedia
                                </a>
                                . Kraków, Poland
                            </p>
                            <p>
                                <b>10.09.2025</b> — Playback performance “
                                <a
                                    href="https://www.instagram.com/p/DOGyvwxjC6D/"
                                    target="_blank"
                                >
                                    Rooms
                                </a>
                                ” («Кімнати»); exploring space and shared
                                presence. Kraków, Poland
                            </p>
                        </div>
                        <h3>Workshops</h3>
                        <p>Here will be some workshops</p>
                        <h2>Our Team</h2>
                        <div>
                            <p>
                                <b>Vlad Zernov</b> — playback-actor, musician,
                                researcher and trainer from Kharkiv. Co-founder
                                of “The Ukrainian Playback Theatre in Kraków”.
                                Certified playback practitioner who has
                                performed in around 80 performances. Author of
                                the first Ukrainian online knowledge base on
                                playback theatre; conducted workshops for
                                Ukrainian communities in Poland (funded by
                                British Council) and certification courses.
                                Works with youth studios and performative
                                laboratories, researching playback as a tool for
                                preserving cultural identity. Co-author of the
                                documentary play “Perkeltas gyvenimas” /
                                Displaced Life (OKT, Vilnius).
                            </p>
                            <p>
                                <b>Deniza Glezina</b> — director, educator, and
                                cultural manager from Kharkiv. Member of
                                playback theatre “Kochivnyky”, working as a
                                trainer, musician and conductor. Co-founder of
                                the “Kharkiv Sea” festival and organizer of
                                local international playback events and
                                residencies. Holds an MA in Theater Studies,
                                certified playback trainer with experience in
                                teaching and facilitating workshops, including
                                ones within Theatre of the Oppressed frameworks
                                and certification programs in Kraków.
                            </p>
                            <p>
                                <b>Alona Altunina</b> — playback actress,
                                performer and musician from Kharkiv. Holds a BA
                                in Acting Art of Puppet Theatre (Kharkiv I.P.
                                Kotlyarevsky National University of Arts).
                                Member of “More Nocturne” and “Kochivnyky”
                                playback theatres, and “KOLO” coverband
                                (Brighton, UK). Has extensive stage experience
                                since childhood. Volunteers since 2016. Performs
                                in Ukraine, Germany, Poland, UK.
                            </p>
                            <p>
                                <b>Olena Kompletova</b> — cultural worker,
                                translator. Based in Hannover, Germany,
                                originally from Vinnytsia, Ukraine. Holds a BA
                                in Germanic Languages and Literatures (Vasyl
                                Stus Donetsk National University). Currently,
                                she is involved in organization and
                                participation in cultural projects in Germany
                                and Ukraine, including exhibitions and public
                                programs. Olena's main work is at Garage Nord in
                                Hannover; she is also part of the activist
                                collective "osereddia.” Her experience and
                                interests include translation, editing,
                                performative arts, applied arts, and cultural
                                project coordination. In “Kochivnyky”, she is
                                responsible for translation, editing, and
                                organizational processes.
                            </p>
                            <p>
                                <b>Tymur Soroka</b> — playback actor, musician,
                                visual artist, and programmer from Kharkiv.
                                Member of “More Nocturne” and “Kochivnyky”
                                playback theatres, performing as an actor,
                                musician, and conductor. Has experience in
                                international performances and workshop
                                organisation. Tymur holds a BSc in Computer
                                Science and Artificial Intelligence (University
                                of Sussex). Combines various art practices with
                                digital environments, is actively involved in
                                volunteering and music. Portfolio: via the link
                                here.
                            </p>
                            <p>
                                <b>Olena Mordyk</b> — playback actor, performer,
                                and interdisciplinary artist from Kharkiv.
                                Member of “Kochivnyky”, “Nema”, and “More
                                Nocturne”. Has experience in international
                                performances and residency programs in Germany,
                                Poland, and Ukraine. Curator and organizer of
                                cultural projects, including the role of
                                co-organizer at the “Kharkiv Sea” festival and
                                initiator of interdisciplinary artistic events
                                and exhibitions. Works at the intersection of
                                performance, documentary theatre, and visual
                                art, actively engaged in educational and social
                                initiatives, including work with teenagers,
                                internally displaced persons, and LGBTQ+
                                communities. As an artist, organizes various art
                                projects, collaborates with publishers and
                                participates in exhibition projects.
                            </p>
                            <p>
                                <b>Daria Platonova</b> — playback actor,
                                conductor, and visual artist from Kharkiv.
                                Member of theatres “Dorohy”, “Kochivnyky”, and
                                “Nema”, performing as an actor and conductor.
                                Holds a background in fine arts (Kharkiv Art
                                College, painting) and has experience teaching
                                art disciplines and organizing creative
                                activities for children in Germany. Participated
                                in international playback festivals and
                                performances in Germany and Ukraine.
                            </p>
                            <p>
                                <b>Zlata Karyzska</b> — playback actor,
                                illustrator and visual artist from Kharkiv.
                                Currently a member of “Kochivnyky” and “the
                                Ukrainian Playback Theatre in Kraków”, former
                                member of theatres “Nema” and “More Nocturne”.
                                Has experience in teaching art practices and
                                theatrical workshops. As an artist has
                                participated in a number of residencies and
                                exhibitions, and collaborates with Ukrainian
                                media projects.
                            </p>
                            <p>
                                <b>Viktoria Nazarenko</b> — playback actor and
                                stage designer from Kharkiv. Graduate of the
                                Visual Arts College in Kharkiv. Participated as
                                an actress in “Dorohy”, “Kochivnyky” and “Nema”
                                playback theatres. Participated in international
                                playback festivals and performances in Germany
                                and Ukraine. Currently works as a stage lighting
                                designer.
                            </p>
                        </div>
                        <h2>Video materials</h2>
                        <div className={styles.videoContainer}>
                            <iframe
                                width="740"
                                height="375"
                                src="https://www.youtube.com/embed/eViCPa8kpTw?si=NpwS773xr02sFBfJ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen={true}
                                className={styles.horizontalVideo}
                            ></iframe>
                            <iframe
                                width="740"
                                height="375"
                                src="https://www.youtube.com/embed/ONUiUO8noJE?si=1sXEmOYQ-IGwMJlA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen={true}
                                className={styles.horizontalVideo}
                            ></iframe>
                            <iframe
                                width="740"
                                height="375"
                                src="https://www.youtube.com/embed/FbpdRTpYjm4?si=FaV156eg1zojyqLo"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen={true}
                                className={styles.horizontalVideo}
                            ></iframe>
                            <iframe
                                width="228"
                                height="405"
                                src="https://www.youtube.com/embed/6nSGKyHS4Ns"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                                className={styles.verticalVideo}
                            ></iframe>
                            <iframe
                                width="228"
                                height="405"
                                src="https://www.youtube.com/embed/1eQenpx-464"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                                className={styles.verticalVideo}
                            ></iframe>
                            <iframe
                                width="228"
                                height="405"
                                src="https://www.youtube.com/embed/5yWGWvTFLxs"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                                className={styles.verticalVideo}
                            ></iframe>
                        </div>
                        <h2>Contact Us</h2>
                        <p>
                            <a
                                href="https://www.instagram.com/kochivnyky_playback/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Our Instagram
                            </a>
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
