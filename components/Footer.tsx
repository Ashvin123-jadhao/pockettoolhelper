import Link from "next/link";

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.grid}>

                {/* LEFT */}
                <div style={styles.left}>
                    <strong>PocketToolHelper</strong>
                    <div style={styles.tagline}>
                        Free developer tools. Fast & private.
                    </div>
                </div>

                {/* CENTER */}
                <div style={styles.center}>
                    🔒 Runs locally in your browser • © {new Date().getFullYear()}
                </div>

                {/* RIGHT */}
                <div style={styles.right}>
                    <Link href="/tools" style={styles.navLink}>Tools</Link>
                    <Link href="/privacy" style={styles.navLink}>Privacy</Link>
                </div>

            </div>
        </footer>
    );
}
const styles = {
    footer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,

        height: "5vh",
        maxHeight: "90px",

        backgroundColor: "#020617",
        color: "#0f172a",

        borderTop: "1px solid #e2e8f0",
        zIndex: 1000,

        padding: "0 20px",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",  // 🔥 left | center | right
        alignItems: "center",
        height: "100%",
    },

    left: {
        justifySelf: "start",
        fontSize: "13px",
    },

    center: {
        justifySelf: "center",
        fontSize: "12px",
        color: "#a4a7a8",
    },

    right: {
        justifySelf: "end",
        display: "flex",
        gap: "20px",           // 🔥 slightly more spacing
        alignItems: "center",

        fontSize: "15px",      // 🔥 increased from 13px
        fontWeight: 500,
    },

    navLink: {
        color: "#ffffff",      // 🔥 darker, more readable
        textDecoration: "none",
        transition: "all 0.2s ease",
    },

    tagline: {
        fontSize: "12px",
        color: "#b1b1b1",
    },
};