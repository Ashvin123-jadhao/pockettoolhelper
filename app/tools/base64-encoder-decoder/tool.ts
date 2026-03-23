export function encodeBase64(text: string) {
 return btoa(unescape(encodeURIComponent(text)))
}

export function decodeBase64(text: string) {
 try {
  return decodeURIComponent(escape(atob(text)))
 } catch {
  return "Invalid Base64 string"
 }
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
 const blob = new Blob([text], { type: "text/plain" })
 const url = URL.createObjectURL(blob)

 const a = document.createElement("a")
 a.href = url
 a.download = "base64-output.txt"
 a.click()

 URL.revokeObjectURL(url)
}