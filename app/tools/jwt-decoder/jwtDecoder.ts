export function decodeJWT(token: string) {

    const parts = token.split(".")

    if (parts.length < 2) {
        throw new Error("Invalid JWT format")
    }

    const decode = (str: string) =>
        JSON.parse(
            atob(str.replace(/-/g, "+").replace(/_/g, "/"))
        )

    const header = decode(parts[0])
    const payload = decode(parts[1])

    return { header, payload }
}

/* --------------------------
Timestamp Conversion
-------------------------- */

export function formatTimestamp(ts?: number) {

    if (!ts) return null

    const date = new Date(ts * 1000)

    return date.toUTCString()
}

/* --------------------------
Expiration Check
-------------------------- */

export function checkExpiration(exp?: number) {

    if (!exp) return null

    const now = Math.floor(Date.now() / 1000)

    return {
        expired: now > exp,
        remaining: exp - now
    }
}

/* --------------------------
Clipboard
-------------------------- */

export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
}