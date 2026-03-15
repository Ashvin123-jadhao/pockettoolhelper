"use client"

import { useState } from "react"
import styles from "./case-converter.module.css"

import {
    toUpperCase,
    toLowerCase,
    toTitleCase,
    toSentenceCase,
    toggleCase,
    pasteClipboard,
    copyText,
    downloadText
} from "./tool"

export default function CaseConverterClient() {

    const [text, setText] = useState("")

    return (

        <div className={styles.container}>

            <h1 className={styles.title}>
                Case Converter
            </h1>

            <textarea
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here..."
            />

            <div className={styles.buttons}>

                <button
                    className={styles.button}
                    onClick={() => pasteClipboard(setText)}
                >
                    Paste
                </button>

                <button
                    className={styles.button}
                    onClick={() => setText(toUpperCase(text))}
                >
                    UPPERCASE
                </button>

                <button
                    className={styles.button}
                    onClick={() => setText(toLowerCase(text))}
                >
                    lowercase
                </button>

                <button
                    className={styles.button}
                    onClick={() => setText(toTitleCase(text))}
                >
                    Title Case
                </button>

                <button
                    className={styles.button}
                    onClick={() => setText(toSentenceCase(text))}
                >
                    Sentence case
                </button>

                <button
                    className={styles.button}
                    onClick={() => setText(toggleCase(text))}
                >
                    Toggle Case
                </button>

                <button
                    className={styles.button}
                    onClick={() => copyText(text)}
                >
                    Copy
                </button>

                <button
                    className={styles.button}
                    onClick={() => downloadText(text)}
                >
                    Download
                </button>

            </div>

            <section className={styles.seo}>

                <h2>Online Case Converter</h2>

                <p>
                    This free case converter tool allows you to quickly change the
                    capitalization of your text. Convert text to uppercase,
                    lowercase, title case or sentence case instantly.
                </p>

                <h2>Why Use a Case Converter?</h2>

                <ul>
                    <li>Fix text capitalization quickly</li>
                    <li>Format article titles</li>
                    <li>Prepare content for publishing</li>
                    <li>Standardize text formatting</li>
                </ul>

            </section>

        </div>

    )

}