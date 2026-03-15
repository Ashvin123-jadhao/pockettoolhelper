export function toUpperCase(text: string) {
    return text.toUpperCase()
}

export function toLowerCase(text: string) {
    return text.toLowerCase()
}

export function toTitleCase(text: string) {

    return text
        .toLowerCase()
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
}

export function toSentenceCase(text: string) {

    return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, c =>
            c.toUpperCase()
        )
}

export function toggleCase(text: string) {

    return text
        .split("")
        .map(char =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("")
}

/* Clipboard */

export async function pasteClipboard(
    setText: (value: string) => void
) {

    try {

        const clipboardText =
            await navigator.clipboard.readText()

        setText(clipboardText)

    } catch {

        alert("Clipboard access denied")

    }

}

export async function copyText(text: string) {

    try {

        await navigator.clipboard.writeText(text)

    } catch {

        alert("Copy failed")

    }

}

/* Download */

export function downloadText(text: string) {

    const blob = new Blob([text], {
        type: "text/plain"
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.download = "converted-text.txt"

    link.click()

    URL.revokeObjectURL(url)

}