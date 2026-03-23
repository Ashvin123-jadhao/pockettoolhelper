export function testRegex(pattern: string, text: string) {
 try {
  const regex = new RegExp(pattern, "g")
  const matches = text.match(regex)

  if (!matches) return "No matches found"

  return `Matches (${matches.length}):\n${matches.join("\n")}`
 } catch (err) {
  return "Invalid regex pattern"
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
 a.download = "regex-result.txt"
 a.click()

 URL.revokeObjectURL(url)
}