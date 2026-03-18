"use client"

import { useState } from "react"
import styles from "./tool.module.css"
import { testRegex } from "./tool"

export default function ToolClient() {

    const [input,setInput] = useState("")
    const [output,setOutput] = useState("")
    const [pattern,setPattern] = useState("")
    const [error,setError] = useState("")

    const handleTest = () => {
        try {

            const matches = testRegex(pattern,input)

            setOutput(JSON.stringify(matches,null,2))
            setError("")

        } catch {
            setError("Invalid regex pattern")
            setOutput("")
        }
    }

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Regex Tester</h1>

            <textarea
                className={styles.textarea}
                placeholder="Input text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />

            <input
                className={styles.textarea}
                placeholder="Regex pattern (example: \\d+)"
                value={pattern}
                onChange={(e)=>setPattern(e.target.value)}
            />

            <div className={styles["tool-buttons"]}>
                <button
                    className={`${styles.btn} ${styles.primary}`}
                    onClick={handleTest}
                >
                    Test
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