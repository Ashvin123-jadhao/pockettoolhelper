 "use client"

import { useState } from "react"
import styles from "./tool.module.css"
import * as tool from "./tool"
 import {decodeURL, encodeURL} from "./tool";

export default function ToolClient() {

 const [input,setInput] = useState("")
 const [output,setOutput] = useState("")
 const [pattern,setPattern] = useState("")
 const [error,setError] = useState("")


 const handleEncode = ()=>{ setOutput(encodeURL(input)) }
 const handleDecode = ()=>{ setOutput(decodeURL(input)) }


 return (
  <div className={styles.container}>

      <h1 className={styles.title}>URL Encoder / Decoder</h1>

      <p className={styles.subtitle}>
          Encode or decode URLs instantly for safe web usage
      </p>

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
