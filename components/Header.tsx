"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header({
                                   open,
                                   setOpen
                               }: {
    open: boolean
    setOpen: (v: boolean) => void
}) {


    return (
        <header style={styles.header}>
            <div style={styles.container}>

                <div style={styles.leftSection}>

                    <button
                        onClick={() => setOpen(prev => !prev)}
                        style={styles.menuButton}
                    >
                        ☰
                    </button>

                    <Link href="/" style={styles.logoWrapper}>
                        <div>
                            <Image
                                src="/newLogo.png"
                                alt="Pocket Tool Helper"
                                width={80}
                                height={80}
                                style={styles.logoImg}
                                priority
                            />
                        </div>
                    </Link>

                </div>

                <div style={styles.title}>
                    Pocket Tool Helper
                </div>

                {/* Nav RIGHT SIDE */}
                <nav style={styles.nav}>
                    <Link href="/" style={styles.link}>Home</Link>
                    <Link href="/tools" style={styles.link}>Tools</Link>
                    <Link href="/privacy" style={styles.link}>Privacy</Link>
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,

        height: "110px",  // clean professional height

        background: "rgb(30,45,87)",
        boxShadow: "0 6px 20px -6px rgba(0,0,0,0.15)",


        zIndex: 10,

        display: "flex",
        alignItems: "center",
    },

    title: {
        fontSize: "clamp(14px, 4vw, 20px)", // ✅ responsive
        fontWeight: 600,

        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        alignItems :"center",

        maxWidth: "100%",
        flex: 1,              // ✅ take available space
        minWidth: 0,          // 🔥 REQUIRED for ellipsis in flex
        color: "#ffffff"
    },


    // 🔥 FIXED: full-width + minimal left padding
    container: {
        width: "100%",
        height: "100%",
        padding: "0 20px",

        display: "flex",
        gap: "12px",  // 🔥 pushes nav to right
        alignItems: "center",
    },

    logoWrapper: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        gap: "10px"
    },

    logoImg: {
        height: "120px",
        width: "auto",
        objectFit: "contain",
        marginTop: "30px"
    },
    nav: {
        display: "flex",
        gap: "24px",
        alignItems: "center",
        marginLeft: "auto"
    },

    link: {
        textDecoration: "none",
        color: "#cbd5f5",
        fontWeight: 500,
    },

    menuBtn: {
        display: "none",
        fontSize: "22px",
        background: "none",
        border: "none",
        color: "#e2e8f0",
        cursor: "pointer",
    },

    mobileMenu: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "12px",
        padding: "10px 20px",
        backgroundColor: "#020617",
        borderTop: "1px solid #1e293b",
    }
    ,
    leftSection: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        minWidth: 0, // 🔥 important for flex shrink
    },

    menuButton: {
        fontSize: "22px",
        background: "none",
        border: "none",
        color: "#e2e8f0",
        cursor: "pointer",
        padding: "6px 10px",
        borderRadius: "6px",
        transition: "all 0.2s ease",
    },

};