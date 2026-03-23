"use client"

import { useState, useRef } from "react"
import styles from "./duplicate-line-remover.module.css"

import {
    removeDuplicates,
    pasteClipboard,
    copyText,
    downloadText
} from "./tool"

export default function DuplicateLineRemoverClient() {

    const [text, setText] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    function handleRemoveDuplicates() {
        setText(removeDuplicates(text))
    }

    function clearText() {
        setText("")
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Duplicate Line Remover
            </h1>

            <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here..."
            />

            <div className={styles.buttons}>

                <button
                    className={styles.button}
                    onClick={handleRemoveDuplicates}
                >
                    Remove Duplicates
                </button>

                <button
                    className={styles.button}
                    onClick={() => pasteClipboard(setText)}
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
                    onClick={() => downloadText(text)}
                >
                    Download
                </button>

                <button
                    className={styles.button}
                    onClick={clearText}
                >
                    Clear
                </button>

            </div>

            {/* ✅ SEO BLOCK PRESERVED */}
            <section className={styles.seo}>

                <h2>Remove Duplicate Lines Online</h2>

                <p>
                    This tool helps you quickly remove duplicate lines from your text.
                    It is useful for cleaning up lists, logs, datasets, and copied content.
                </p>

                <h2>Why Use This Tool?</h2>

                <ul>
                    <li>Clean repeated data instantly</li>
                    <li>Improve readability of text</li>
                    <li>Prepare data for processing</li>
                    <li>Save time on manual editing</li>
                </ul>

            </section>

        </div>
    )
}