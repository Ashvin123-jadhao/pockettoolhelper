
export function countWords(text){
 return text.trim().split(/\s+/).filter(Boolean).length
}

export function countChars(text){
 return text.length
}

export function countSentences(text){
 return text.split(/[.!?]+/).filter(x=>x.trim()).length
}

export function removeDuplicateLines(text){
 const lines=text.split('\n')
 return [...new Set(lines)].join('\n')
}
