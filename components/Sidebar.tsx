"use client"

import { useState } from "react"
import styles from "./Sidebar.module.css"
import Link from "next/link"

const categories = {
    "Text Tools":[
        {name:"Word Counter",url:"/tools/word-counter"},
        {name:"Case Converter",url:"/tools/case-converter"},
        {name:"Duplicate Lines",url:"/tools/duplicate-lines"}
    ],

    "Developer Tools":[
        {name:"JWT Decoder",url:"/tools/jwt-decoder"},
        {name:"Base64 Encoder Decoder",url:"/tools/base64-encoder-decoder"},
        {name:"Regex Tester",url:"/tools/regex-tester"},
        {name:"JSON Formatter",url:"/tools/json-formatter"}
    ],

    "Utility Tools":[
        {name:"URL Encoder Decoder",url:"/tools/url-encoder-decoder"},
        {name:"UUID Generator",url:"/tools/uuid-generator"}
    ]
}

export default function Sidebar({ open, setOpen }: {
    open: boolean
    setOpen: (v: boolean) => void
}){

    const [search,setSearch]=useState("")

    const filterTool=(name:string)=>{
        return name.toLowerCase().includes(search.toLowerCase())
    }

    return(
        <>
            {/* Overlay (mobile only) */}
            {open && <div className={styles.overlay} onClick={()=>setOpen(false)} />}

            <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>

                {/* Search */}
                <input
                    type="text"
                    className={styles.search}
                    placeholder="Search tools..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

                {/* Categories */}
                {Object.entries(categories).map(([category,tools])=>(
                    <div key={category}>

                        <div className={styles.category}>{category}</div>

                        {tools
                            .filter(tool=>filterTool(tool.name))
                            .map(tool=>(
                                <Link
                                    key={tool.url}
                                    href={tool.url}
                                    className={styles.link}
                                    onClick={()=>setOpen(false)} // close on click
                                >
                                    {tool.name}
                                </Link>
                            ))}

                    </div>
                ))}

            </div>
        </>
    )
}