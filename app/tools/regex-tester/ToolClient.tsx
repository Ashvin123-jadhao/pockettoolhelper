"use client"

import { useState, useRef } from "react"
import styles from "./tool.module.css"

import {
    testRegex,
    pasteClipboard,
    copyText,
    downloadText
} from "./tool"

export default function ToolClient() {

    const [pattern, setPattern] = useState("")
    const [text, setText] = useState("")
    const [result, setResult] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    function handleTest() {
        setResult(testRegex(pattern, text))
    }

    function clearAll() {
        setPattern("")
        setText("")
        setResult("")
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Regex Tester
            </h1>

            {/* Pattern Input */}
            <input
                className={styles.input}
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                placeholder="Enter regex pattern (e.g. ^[a-z]+$)"
            />

            {/* Text Area */}
            <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to test against..."
            />

            {/* Buttons */}
            <div className={styles.buttons}>

                <button className={styles.button} onClick={handleTest}>
                    Test Regex
                </button>

                <button
                    className={styles.button}
                    onClick={() => pasteClipboard(textareaRef, setText)}
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
                    onClick={clearAll}
                >
                    Clear
                </button>

            </div>

            {/* Result */}
            {result && (
                <div className={styles.result}>
                    {result}
                </div>
            )}

            {/* ✅ SEO BLOCK PRESERVED */}
            <section className={styles.seo}>

                <h2>Online Regex Tester</h2>

                <p>
                    This regex tester helps you validate and debug regular expressions.
                    Enter your pattern and test it against any text instantly.
                </p>

                <h2>Why Use a Regex Tester?</h2>

                <ul>
                    <li>Debug complex patterns quickly</li>
                    <li>Validate user input formats</li>
                    <li>Test search and replace logic</li>
                    <li>Improve development productivity</li>
                </ul>

            </section>

        </div>
    )
}