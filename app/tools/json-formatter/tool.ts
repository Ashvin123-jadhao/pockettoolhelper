import YAML from "yaml"

export function jsonToYAML(input: string): string {
    const parsed = JSON.parse(input)
    return YAML.stringify(parsed)
}

export function formatJSON(input: string): string {
    const parsed = JSON.parse(input)
    return JSON.stringify(parsed, null, 2)
}

export function minifyJSON(input: string): string {
    const parsed = JSON.parse(input)
    return JSON.stringify(parsed)
}
export async function pasteClipboard(
    textareaRef: React.RefObject<HTMLTextAreaElement>,
    setText: (text: string) => void
) {
    const clipboardText = await navigator.clipboard.readText()
    setText(clipboardText)
    textareaRef.current?.focus()
}

export function copyText(text: string) {
    navigator.clipboard.writeText(text)
}

export function downloadText(text: string) {
    const blob = new Blob([text], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "output.json"
    a.click()

    URL.revokeObjectURL(url)
}

export function cleanJSON(text: string) {
    try {
        const parsed = JSON.parse(text)

        // Remove null / undefined values recursively
        function clean(obj: any): any {
            if (Array.isArray(obj)) {
                return obj.map(clean)
            }

            if (obj && typeof obj === "object") {
                const newObj: any = {}
                for (const key in obj) {
                    if (obj[key] !== null && obj[key] !== undefined) {
                        newObj[key] = clean(obj[key])
                    }
                }
                return newObj
            }

            return obj
        }

        return JSON.stringify(clean(parsed), null, 2)
    } catch {
        return text // do not break existing behavior
    }
}

export function validateJSON(input: string): boolean {
    try {
        JSON.parse(input)
        return true
    } catch {
        return false
    }
}

export function sortJSONKeys(input: string): string {
    const obj = JSON.parse(input)

    const sortObject = (data: any): any => {
        if (Array.isArray(data)) return data.map(sortObject)

        if (typeof data === "object" && data !== null) {
            return Object.keys(data)
                .sort()
                .reduce((result: any, key) => {
                    result[key] = sortObject(data[key])
                    return result
                }, {})
        }

        return data
    }

    return JSON.stringify(sortObject(obj), null, 2)
}

export function removeEmptyValues(input: string): string {
    const obj = JSON.parse(input)

    const clean = (data: any): any => {
        if (Array.isArray(data)) {
            return data.map(clean).filter(v => v != null)
        }

        if (typeof data === "object" && data !== null) {
            const result: any = {}

            Object.entries(data).forEach(([key, value]) => {
                const cleaned = clean(value)

                if (
                    cleaned !== null &&
                    cleaned !== "" &&
                    !(Array.isArray(cleaned) && cleaned.length === 0) &&
                    !(typeof cleaned === "object" && Object.keys(cleaned).length === 0)
                ) {
                    result[key] = cleaned
                }
            })

            return result
        }

        return data
    }

    return JSON.stringify(clean(obj), null, 2)
}

export function jsonToCSV(input: string): string {
    const data = JSON.parse(input)

    if (!Array.isArray(data)) {
        throw new Error("JSON must be an array of objects")
    }

    const headers = Object.keys(data[0])

    const csvRows = [
        headers.join(","),
        ...data.map((row: any) =>
            headers.map(field => JSON.stringify(row[field] ?? "")).join(",")
        )
    ]

    return csvRows.join("\n")
}

export function searchJSON(input: string, keyword: string): string[] {
    const obj = JSON.parse(input)
    const results: string[] = []

    const search = (data: any, path = "") => {
        if (typeof data === "object" && data !== null) {
            Object.entries(data).forEach(([key, value]) => {
                const newPath = path ? `${path}.${key}` : key

                if (String(value).toLowerCase().includes(keyword.toLowerCase())) {
                    results.push(`${newPath}: ${value}`)
                }

                search(value, newPath)
            })
        }
    }

    search(obj)

    return results
}