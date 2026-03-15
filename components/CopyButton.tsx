
"use client"
export default function CopyButton({text}){
function copy(){
navigator.clipboard.writeText(text)
alert("Copied")
}
return <button className="copy" onClick={copy}>Copy</button>
}
