"use client"

import {useEffect, useState} from "react"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

export default function LayoutClient({
                                         children,
                                     }: {
    children: React.ReactNode
}) {

    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreen = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)

            // 🔥 set default behavior
            setOpen(!mobile)
        }

        checkScreen()
        window.addEventListener("resize", checkScreen)

        return () => window.removeEventListener("resize", checkScreen)
    }, [])

    return (
        <>
            <Header open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />

            <main style={{
                marginTop: "110px", // desktop spacing
                padding: "20px",
                marginLeft: (!isMobile && open) ? "260px" : "0px",
                transition: "margin-left 0.3s ease"
            }}>
                {children}
            </main>
        </>
    )
}