
"use client"
import {useState} from "react"

export default function Page(){

const [text,setText]=useState("")

return(
<div>

<h1>Sort Lines</h1>

<textarea value={text} onChange={(e)=>setText(e.target.value)} />

<div className="stats">
<div className="card">
<h3>Length</h3>
<p>{text.length}</p>
</div>
</div>

</div>
)

}
