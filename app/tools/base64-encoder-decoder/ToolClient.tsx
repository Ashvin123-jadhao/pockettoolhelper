 "use client"

import { useState } from "react"
import styles from "./tool.module.css"
import * as tool from "./tool"
 import {decode, encode} from "./tool";

export default function ToolClient() {

 const [input,setInput] = useState("")
 const [output,setOutput] = useState("")
 const [pattern,setPattern] = useState("")
 const [error,setError] = useState("")


 const handleEncode = ()=>{
   try{ setOutput(encode(input)); setError("") }
   catch{ setError("Encoding failed") }
 }

 const handleDecode = ()=>{
   try{ setOutput(decode(input)); setError("") }
   catch{ setError("Invalid Base64") }
 }


 return (
  <div className={styles.container}>

   <h1 className={styles.title}>Base64 Encoder / Decoder</h1>

   <textarea
    className={styles.textarea}
    placeholder="Input"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
   />

   

   <div className={styles["tool-buttons"]}>
    <button className={`${styles.btn} ${styles.primary}`} onClick={handleEncode}>Encode</button>
    <button className={`${styles.btn} ${styles.secondary}`} onClick={handleDecode}>Decode</button>
    
    
    
   </div>

   {error && <p className={styles.error}>{error}</p>}

   <textarea
    className={styles.textarea}
    placeholder="Result"
    value={output}
    readOnly
   />

  </div>
 )
}
