"use client"

import { useState } from "react"
import styles from "./tool.module.css"
import * as tool from "./tool"
import { decodeURL, encodeURL } from "./tool"

export default function ToolClient() {

    const [input,setInput] = useState("")
    const [output,setOutput] = useState("")
    const [pattern,setPattern] = useState("")
    const [error,setError] = useState("")

    const handleEncode = ()=>{ setOutput(encodeURL(input)) }
    const handleDecode = ()=>{ setOutput(decodeURL(input)) }
    const clearText = ()=>{ setInput(""); setOutput("") }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>URL Encoder / Decoder</h1>

            <textarea
                className={styles.textarea}
                placeholder="Input"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
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
                    onClick={clearText}>
                    Clear
                </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <textarea
                className={styles.textarea}
                placeholder="Result"
                value={output}
                readOnly
            />

        </div>
    )
}