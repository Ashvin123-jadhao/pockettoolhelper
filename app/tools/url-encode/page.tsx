
"use client"
import {useState} from "react"
import CopyButton from "../../../components/CopyButton"

export default function Page(){
const [text,setText]=useState("")
return(
<div>
<h1>Url Encode</h1>
<textarea value={text} onChange={e=>setText(e.target.value)}/>
<CopyButton text={text}/>
</div>
)
}
