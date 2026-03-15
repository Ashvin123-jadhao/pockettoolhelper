
export const words=t=>t.trim()?t.trim().split(/\s+/).length:0
export const chars=t=>t.length
export const lines=t=>t.split("\n").length
export const removeDuplicates=t=>[...new Set(t.split("\n"))].join("\n")
export const cleanSpaces=t=>t.replace(/\s+/g,' ')
export const reverse=t=>t.split("").reverse().join("")
export const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-')
export const readingTime=t=>Math.ceil((t.trim()?t.split(/\s+/).length:0)/200)
