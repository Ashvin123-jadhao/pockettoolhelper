"use client"

import { useState, useRef } from "react"
import styles from "./tool.module.css"

import {
    encodeBase64,
    decodeBase64,
    pasteClipboard,
    copyText,
    downloadText
} from "./tool"

export default function ToolClient() {

    const [text, setText] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    function handleEncode() {
        setText(encodeBase64(text))
    }

    function handleDecode() {
        setText(decodeBase64(text))
    }

    function clearText() {
        setText("")
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Base64 Encoder / Decoder
            </h1>

            <textarea
                ref={textareaRef}
                className={styles.textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text or Base64 string..."
            />

            <div className={styles.buttons}>

                <button className={styles.button} onClick={handleEncode}>
                    Encode
                </button>

                <button className={styles.button} onClick={handleDecode}>
                    Decode
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

            {/* ✅ SEO BLOCK PRESERVED */}
            <section className={styles.seo}>

                <h2>Base64 Encoder and Decoder Online</h2>

                <p>
                    This tool allows you to encode text into Base64 format or decode
                    Base64 strings back to readable text. It is commonly used in APIs,
                    data transfer, and encoding binary data.
                </p>

                <h2>Why Use Base64?</h2>

                <ul>
                    <li>Safely transmit binary data over text-based protocols</li>
                    <li>Encode data for APIs and web services</li>
                    <li>Work with authentication tokens</li>
                    <li>Handle file or image encoding</li>
                </ul>

            </section>

        </div>
    )
}