
"use client"
export default function TextInput({value,setValue}:{value:string,setValue:any}){
return(
<textarea
value={value}
onChange={(e)=>setValue(e.target.value)}
placeholder="Paste your text here..."
className="textarea"
/>
)
}
