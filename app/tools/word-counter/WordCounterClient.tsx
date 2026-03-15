"use client"

import { useState, useRef } from "react"
import styles from "./word-counter.module.css"

import {
    calculateStats,
    pasteFromClipboardAtCursor,
    copyText,
    downloadText
} from "./tool"

export default function WordCounterClient() {

    const [text, setText] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const stats = calculateStats(text)

    function clearText() {
        setText("")
    }

    return (

        <div className={styles.container}>

            <h1 className={styles.title}>
                Word Counter
            </h1>

            <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
            />

            <div className={styles.buttons}>

                <button
                    className={styles.button}
                    onClick={() => {
                        if (textareaRef.current) {
                            pasteFromClipboardAtCursor(
                                textareaRef.current,
                                setText
                            )
                        }
                    }}
                >
                    Paste
                </button>

                <button
                    className={styles.button}
                    onClick={() => copyText(text)}
                >
                    Copy
                </button>

                <button
                    className={styles.button}
                    onClick={clearText}
                >
                    Clear
                </button>

                <button
                    className={styles.button}
                    onClick={() => downloadText(text)}
                >
                    Download
                </button>

            </div>

            <div className={styles.stats}>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>Words</div>
                    <div className={styles.cardValue}>{stats.words}</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>Characters</div>
                    <div className={styles.cardValue}>{stats.characters}</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>
                        Characters (no spaces)
                    </div>
                    <div className={styles.cardValue}>
                        {stats.charactersNoSpaces}
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>Sentences</div>
                    <div className={styles.cardValue}>{stats.sentences}</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>Paragraphs</div>
                    <div className={styles.cardValue}>{stats.paragraphs}</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardTitle}>
                        Reading Time
                    </div>
                    <div className={styles.cardValue}>
                        {stats.readingTime} min
                    </div>
                </div>

            </div>

            <section className={styles.seo}>

                <h2>Free Online Word Counter</h2>

                <p>
                    This word counter helps you instantly count
                    words, characters, sentences and paragraphs
                    in your text while typing.
                </p>

                <h2>Why Use a Word Counter?</h2>

                <ul>
                    <li>Check essay word limits</li>
                    <li>Track article length</li>
                    <li>Measure readability</li>
                    <li>Improve writing productivity</li>
                </ul>

            </section>

        </div>

    )

}