"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header style={styles.header}>
            <div style={styles.container}>

                {/* Logo EXTREME LEFT */}
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

                <div style={styles.title}>
                    Pocket Tool Helper
                </div>

                {/* Nav RIGHT SIDE */}
                <nav style={styles.nav}>
                    <Link href="/" style={styles.link}>Home</Link>
                    <Link href="/tools" style={styles.link}>Tools</Link>
                    <Link href="/privacy" style={styles.link}>Privacy</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    style={styles.menuBtn}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {open && (
                <div style={styles.mobileMenu}>
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
                    <Link href="/privacy" onClick={() => setOpen(false)}>Privacy</Link>
                </div>
            )}
        </header>
    );
}

const styles = {
    header: {
        position: "fixed",
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
        justifySelf: "center",

        fontSize: "60px",
        fontWeight: 700,

        background: "rgb(232,230,230)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",

        letterSpacing: "0.6px",
    },


    // 🔥 FIXED: full-width + minimal left padding
    container: {
        width: "100%",
        height: "100%",
        padding: "0 20px",

        display: "flex",
        justifyContent: "space-between",  // 🔥 pushes nav to right
        alignItems: "center",
    },

    logoWrapper: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        gap: "10px"
    },

    logoImg: {
        height: "150px",     // 🔥 fit inside header
        width: "200px",
        marginTop: "60px"
    },
    nav: {
        display: "flex",
        gap: "24px",
        alignItems: "center",
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
};