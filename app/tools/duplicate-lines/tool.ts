export function removeDuplicates(text:string){

    const lines = text.split("\n")

    const unique = Array.from(new Set(lines))

    return unique.join("\n")

}

export function trimLines(text:string){

    return text
        .split("\n")
        .map(line => line.trim())
        .join("\n")

}

export function sortLines(text:string){

    return text
        .split("\n")
        .sort()
        .join("\n")

}

/* Clipboard */

export async function pasteClipboard(
    setText:(value:string)=>void
){

    try{

        const clipboard =
            await navigator.clipboard.readText()

        setText(clipboard)

    }catch{

        alert("Clipboard access denied")

    }

}

export async function copyText(text:string){

    try{

        await navigator.clipboard.writeText(text)

    }catch{

        alert("Copy failed")

    }

}

/* Download */

export function downloadText(text:string){

    const blob = new Blob([text],{
        type:"text/plain"
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.download = "cleaned-lines.txt"

    link.click()

    URL.revokeObjectURL(url)

}