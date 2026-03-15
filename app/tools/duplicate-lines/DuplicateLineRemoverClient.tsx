"use client"

import { useState } from "react"
import styles from "./duplicate-line-remover.module.css"

import {
    removeDuplicates,
    trimLines,
    sortLines,
    pasteClipboard,
    copyText,
    downloadText
} from "./tool"

export default function DuplicateLineRemoverClient(){

    const [text,setText] = useState("")

    return(

        <div className={styles.container}>

            <h1 className={styles.title}>
                Duplicate Line Remover
            </h1>

            <textarea
                className={styles.textarea}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Paste text with duplicate lines..."
            />

            <div className={styles.buttons}>

                <button
                    className={styles.button}
                    onClick={()=>pasteClipboard(setText)}
                >
                    Paste
                </button>

                <button
                    className={styles.button}
                    onClick={()=>setText(removeDuplicates(text))}
                >
                    Remove Duplicates
                </button>

                <button
                    className={styles.button}
                    onClick={()=>setText(trimLines(text))}
                >
                    Trim Lines
                </button>

                <button
                    className={styles.button}
                    onClick={()=>setText(sortLines(text))}
                >
                    Sort Lines
                </button>

                <button
                    className={styles.button}
                    onClick={()=>copyText(text)}
                >
                    Copy
                </button>

                <button
                    className={styles.button}
                    onClick={()=>downloadText(text)}
                >
                    Download
                </button>

            </div>

            <section className={styles.seo}>

                <h2>Remove Duplicate Lines Online</h2>

                <p>
                    This tool helps you quickly remove duplicate lines from
                    text data. It is commonly used by developers, data
                    analysts, and writers to clean lists and logs.
                </p>

                <h2>Use Cases</h2>

                <ul>

                    <li>Cleaning log files</li>

                    <li>Removing duplicate keywords</li>

                    <li>Processing CSV data</li>

                    <li>Preparing unique lists</li>

                </ul>

            </section>

        </div>

    )

}