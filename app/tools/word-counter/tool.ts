export interface WordStats {
    words: number
    characters: number
    charactersNoSpaces: number
    sentences: number
    paragraphs: number
    readingTime: number
}

export function calculateStats(text: string): WordStats {

    const words =
        text.trim().length === 0
            ? 0
            : text.trim().split(/\s+/).length

    const characters = text.length

    const charactersNoSpaces =
        text.replace(/\s/g, "").length

    const sentences =
        text.split(/[.!?]+/)
            .filter(s => s.trim().length > 0).length

    const paragraphs =
        text.split(/\n+/)
            .filter(p => p.trim().length > 0).length

    const readingTime =
        Math.ceil(words / 200)

    return {
        words,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTime
    }

}

export async function pasteFromClipboardAtCursor(
    textarea: HTMLTextAreaElement,
    setText: (value: string) => void
) {

    try {

        const clipboardText =
            await navigator.clipboard.readText()

        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const currentText = textarea.value

        const newText =
            currentText.substring(0, start) +
            clipboardText +
            currentText.substring(end)

        setText(newText)

        const cursorPosition =
            start + clipboardText.length

        setTimeout(() => {
            textarea.selectionStart = cursorPosition
            textarea.selectionEnd = cursorPosition
            textarea.focus()
        }, 0)

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

export function downloadText(text: string) {

    const blob = new Blob([text], {
        type: "text/plain"
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.download = "text.txt"

    link.click()

    URL.revokeObjectURL(url)

}