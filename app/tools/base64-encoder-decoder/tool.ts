/* Encode UTF-8 string to Base64 */

export function encode(text: string) {
 const bytes = new TextEncoder().encode(text)
 let binary = ""

 bytes.forEach(b => {
  binary += String.fromCharCode(b)
 })

 return btoa(binary)
}

/* Decode Base64 to UTF-8 string */

export function decode(base64: string) {

 try {

  const binary = atob(base64)

  const bytes = new Uint8Array(
      [...binary].map(c => c.charCodeAt(0))
  )

  return new TextDecoder().decode(bytes)

 } catch {
  throw new Error("Invalid Base64 string")
 }
}