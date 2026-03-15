
"use client"
import {useState} from "react"
import CopyButton from "../../../components/CopyButton"

export default function Page(){
const [text,setText]=useState("")
return(
<div>
<h1>Random String</h1>
<textarea value={text} onChange={e=>setText(e.target.value)}/>
<CopyButton text={text}/>
</div>
)
}
