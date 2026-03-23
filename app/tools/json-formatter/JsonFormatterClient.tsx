"use client"

import { useState, useRef } from "react"
import styles from "./json-formatter.module.css"

import {
    formatJSON,
    minifyJSON,
    validateJSON,
    sortJSONKeys,
    cleanJSON,
    jsonToCSV,
    jsonToYAML,
    pasteClipboard,
    copyText,
    downloadText
} from "./tool"

export default function JsonFormatterClient() {

    const [text, setText] = useState("")
    const [error, setError] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    function handleAction(fn: (t: string) => string | { error?: string }) {
        try {
            const result = fn(text)

            if (typeof result === "string") {
                setText(result)
                setError("")
            } else if (result?.error) {
                setError(result.error)
            }
        } catch {
            setError("Invalid JSON")
        }
    }

    function handleValidate() {
        const res = validateJSON(text)
        if (res) {
            setError("Valid JSON ✅")
        } else {
            setError("Invalid JSON ❌")
        }
    }

    function clearText() {
        setText("")
        setError("")
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                JSON Formatter
            </h1>

            <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your JSON here..."
            />

            <div className={styles.buttons}>

                <button className={styles.button} onClick={() => handleAction(formatJSON)}>
                    Format
                </button>

                <button className={styles.button} onClick={() => handleAction(minifyJSON)}>
                    Minify
                </button>

                <button className={styles.button} onClick={handleValidate}>
                    Validate
                </button>

                <button className={styles.button} onClick={() => handleAction(sortJSONKeys)}>
                    Sort Keys
                </button>

                <button className={styles.button} onClick={() => handleAction(cleanJSON)}>
                    Clean JSON
                </button>

                <button className={styles.button} onClick={() => handleAction(jsonToCSV)}>
                    JSON → CSV
                </button>

                <button className={styles.button} onClick={() => handleAction(jsonToYAML)}>
                    JSON → YAML
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
                    onClick={clearText}
                >
                    Clear
                </button>

            </div>

            {error && (
                <div
                    className={
                        error.includes("Valid")
                            ? styles.success
                            : styles.error
                    }
                >
                    {error}
                </div>
            )}

            {/* ✅ SEO BLOCK PRESERVED */}
            <section className={styles.seo}>

                <h2>Online JSON Formatter</h2>

                <p>
                    This tool helps you format, validate, clean, and convert JSON data instantly.
                    It supports multiple transformations including CSV and YAML conversion.
                </p>

                <h2>Why Use This Tool?</h2>

                <ul>
                    <li>Beautify and minify JSON</li>
                    <li>Validate JSON structure</li>
                    <li>Sort and clean data</li>
                    <li>Convert JSON to CSV or YAML</li>
                </ul>

            </section>

        </div>
    )
}