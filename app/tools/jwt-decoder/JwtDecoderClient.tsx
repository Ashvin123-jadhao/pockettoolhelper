"use client"

import { useState } from "react"
import styles from "./jwtDecoder.module.css"

import {
    decodeJWT,
    formatTimestamp,
    checkExpiration,
    copyToClipboard
} from "./jwtDecoder"

export default function JwtDecoderClient() {

    const [token,setToken] = useState("")
    const [header,setHeader] = useState("")
    const [payload,setPayload] = useState("")
    const [status,setStatus] = useState("")
    const [error,setError] = useState("")

    const handleDecode = () => {

        try{

            const result = decodeJWT(token)

            const payloadData = result.payload

            /* timestamp conversion */

            if(payloadData.iat){
                payloadData.iat_readable = formatTimestamp(payloadData.iat)
            }

            if(payloadData.exp){
                payloadData.exp_readable = formatTimestamp(payloadData.exp)
            }

            if(payloadData.nbf){
                payloadData.nbf_readable = formatTimestamp(payloadData.nbf)
            }

            /* expiration check */

            if(payloadData.exp){

                const expStatus = checkExpiration(payloadData.exp)

                if(expStatus?.expired){
                    setStatus("❌ Token Expired")
                }else{
                    setStatus("✅ Token Valid")
                }
            }

            setHeader(JSON.stringify(result.header,null,2))
            setPayload(JSON.stringify(payloadData,null,2))

            setError("")

        }catch{

            setError("Invalid JWT token")
            setHeader("")
            setPayload("")
            setStatus("")

        }

    }

    const clearAll = () => {

        setToken("")
        setHeader("")
        setPayload("")
        setStatus("")
        setError("")
    }

    return(

        <div className={styles.container}>

            <h1 className={styles.title}>JWT Decoder</h1>

            {/* INPUT */}

            <textarea
                className={styles.textarea}
                placeholder="Paste your JWT token here..."
                value={token}
                onChange={(e)=>setToken(e.target.value)}
            />

            {/* BUTTONS */}

            <div className={styles["tool-buttons"]}>

                <button
                    className={`${styles.btn} ${styles.primary}`}
                    onClick={handleDecode}
                >
                    Decode
                </button>

                <button
                    className={`${styles.btn} ${styles.secondary}`}
                    onClick={clearAll}
                >
                    Clear
                </button>

            </div>

            {/* STATUS */}

            {status && (
                <p style={{marginTop:"12px",fontWeight:"600"}}>
                    {status}
                </p>
            )}

            {error && (
                <p className={styles.error}>{error}</p>
            )}

            {/* HEADER */}

            {header && (

                <>
                    <h2 className={styles.title}>Header</h2>

                    <textarea
                        className={styles.textarea}
                        readOnly
                        value={header}
                    />

                    <div className={styles["tool-buttons"]}>
                        <button
                            className={`${styles.btn} ${styles.outline}`}
                            onClick={()=>copyToClipboard(header)}
                        >
                            Copy Header
                        </button>
                    </div>

                </>
            )}

            {/* PAYLOAD */}

            {payload && (

                <>
                    <h2 className={styles.title}>Payload</h2>

                    <textarea
                        className={styles.textarea}
                        readOnly
                        value={payload}
                    />

                    <div className={styles["tool-buttons"]}>
                        <button
                            className={`${styles.btn} ${styles.outline}`}
                            onClick={()=>copyToClipboard(payload)}
                        >
                            Copy Payload
                        </button>
                    </div>

                </>
            )}

        </div>

    )
}