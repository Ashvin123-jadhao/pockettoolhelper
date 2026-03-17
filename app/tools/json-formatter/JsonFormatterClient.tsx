"use client"

import { useState } from "react"
import styles from "./json-formatter.module.css"

import {
    formatJSON,
    minifyJSON,
    validateJSON,
    sortJSONKeys,
    removeEmptyValues,
    jsonToCSV,
    searchJSON,
    jsonToYAML
} from "./tool"

export default function JsonFormatterClient() {

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [error, setError] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const safeRun = (fn: Function) => {
        try {
            const result = fn()
            setOutput(result)
            setError("")
        } catch (e:any) {
            setError(e.message || "Invalid JSON")
            setOutput("")
        }
    }

    const handleSearch = () => {
        try {
            const results = searchJSON(input, searchTerm)
            setOutput(results.join("\n"))
            setError("")
        } catch {
            setError("Invalid JSON")
        }
    }

    const handleCopy = async () => {
        if (!output) return
        await navigator.clipboard.writeText(output)
    }

    const handleDownload = () => {
        const blob = new Blob([output], { type: "text/plain" })
        const url = URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = "result.txt"
        a.click()

        URL.revokeObjectURL(url)
    }

    const clearAll = () => {
        setInput("")
        setOutput("")
        setError("")
        setSearchTerm("")
    }

    return (
        <div className={styles.container}>

            <h1>JSON Formatter</h1>

            <textarea
                className={styles.textarea}
                placeholder="Paste JSON here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={10}
            />

            <div className={styles.buttonGroup}>

                <button onClick={() => safeRun(() => formatJSON(input))}>Format</button>

                <button onClick={() => safeRun(() => minifyJSON(input))}>Minify</button>

                <button onClick={() => safeRun(() =>
                    validateJSON(input) ? "✅ Valid JSON" : "❌ Invalid JSON"
                )}>Validate</button>

                <button onClick={() => safeRun(() => sortJSONKeys(input))}>Sort Keys</button>

                <button onClick={() => safeRun(() => removeEmptyValues(input))}>Clean JSON</button>

                <button onClick={() => safeRun(() => jsonToCSV(input))}>JSON → CSV</button>

                <button onClick={() => safeRun(() => jsonToYAML(input))}>
                    JSON → YAML
                </button>

            </div>



            <div className={styles.buttonGroup}>

                <button onClick={handleCopy}>Copy</button>

                <button onClick={handleDownload}>Download</button>

                <button onClick={clearAll}>Clear</button>

            </div>

            <div className={styles.searchBar}>

                <input
                    placeholder="Search value in JSON..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button onClick={handleSearch}>Search</button>

            </div>

            {error && <div className={styles.error}>{error}</div>}

            <textarea
                className={styles.textarea}
                value={output}
                readOnly
                rows={10}
                placeholder="Output will appear here..."
            />

        </div>
    )
}