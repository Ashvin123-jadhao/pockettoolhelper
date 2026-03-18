"use client"

import { useState } from "react"
import styles from "./Sidebar.module.css"

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

export default function Sidebar(){

    const [search,setSearch]=useState("")

    const filterTool=(name:string)=>{
        return name.toLowerCase().includes(search.toLowerCase())
    }

    return(

        <div className={styles.sidebar}>

            <div className={styles.logo}>PocketTools</div>

            <input
                className={styles.search}
                placeholder="Search tools..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />

            {Object.entries(categories).map(([category,tools])=>(
                <div key={category}>

                    <div className={styles.category}>{category}</div>

                    {tools
                        .filter(tool=>filterTool(tool.name))
                        .map(tool=>(
                            <a key={tool.url} href={tool.url} className={styles.link}>
                                {tool.name}
                            </a>
                        ))}

                </div>
            ))}

        </div>

    )
}