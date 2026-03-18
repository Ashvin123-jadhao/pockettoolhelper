import Link from "next/link"
import styles from "./home.module.css"

export default function HomePage(){

    return(

        <div className={styles.container}>

            {/* HERO */}

            <section className={styles.hero}>

                <h1>Free Online Text Tools</h1>

                <p>
                    A collection of fast and simple tools for writers,
                    developers and content creators.
                </p>

            </section>

            {/* CATEGORY SECTION */}

            <section>

                <h2>Tool Categories</h2>

                <div className={styles.categoryGrid}>

                    <div className={styles.categoryCard}>
                        <h3>Text Tools</h3>
                        <p>Tools for editing and analyzing text.</p>
                    </div>

                    <div className={styles.categoryCard}>
                        <h3>Developer Tools</h3>
                        <p>Utilities for developers.</p>
                    </div>

                    <div className={styles.categoryCard}>
                        <h3>SEO Tools</h3>
                        <p>Tools for optimizing content.</p>
                    </div>

                </div>

            </section>

            {/* POPULAR TOOLS */}

            <section>

                <h2>Popular Tools</h2>

                <div className={styles.toolsGrid}>

                    <Link href="/tools/word-counter" className={styles.toolCard}>
                        Word Counter
                    </Link>

                    <Link href="/tools/case-converter" className={styles.toolCard}>
                        Case Converter
                    </Link>

                    <Link href="/tools/jwt-decoder" className={styles.toolCard}>
                        Text Cleaner
                    </Link>

                    <Link href="/tools/duplicate-lines" className={styles.toolCard}>
                        Duplicate Line Remover
                    </Link>

                </div>

            </section>

            {/* FEATURES */}

            <section className={styles.features}>

                <h2>Why Use Our Tools?</h2>

                <ul>

                    <li>Fast and simple interface</li>

                    <li>No installation required</li>

                    <li>Free to use</li>

                    <li>Privacy friendly</li>

                </ul>

            </section>

            {/* HOW IT WORKS */}

            <section className={styles.how}>

                <h2>How It Works</h2>

                <p>

                    Choose a tool, paste your text and get instant results.
                    All tools run directly in your browser.

                </p>

            </section>

            {/* SEO */}

            <section className={styles.seo}>

                <h2>Free Online Tools</h2>

                <p>

                    Our platform provides simple and powerful tools
                    to make everyday tasks easier.

                </p>

            </section>

        </div>

    )

}