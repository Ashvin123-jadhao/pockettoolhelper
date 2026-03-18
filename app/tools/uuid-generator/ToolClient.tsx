 "use client"

import { useState } from "react"
import styles from "./tool.module.css"
import * as tool from "./tool"
 import {generateUUID} from "./tool";

export default function ToolClient() {

 const [input,setInput] = useState("")
 const [output,setOutput] = useState("")
 const [pattern,setPattern] = useState("")
 const [error,setError] = useState("")


 const handleGenerate = ()=>{
   setOutput(generateUUID())
 }


 return (
  <div className={styles.container}>

   <h1 className={styles.title}>UUID Generator</h1>



   <textarea
    className={styles.textarea}
    placeholder="Result"
    value={output}
    readOnly
   />

      <div className={styles["tool-buttons"]}>

          <button className={`${styles.btn} ${styles.primary}`} onClick={handleGenerate}>Generate</button>

      </div>

      {error && <p className={styles.error}>{error}</p>}

  </div>
 )
}
