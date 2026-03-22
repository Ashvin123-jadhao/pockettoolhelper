export const metadata = {
    title: "Privacy Policy - PocketToolHelper",
    description:
        "Learn how PocketToolHelper handles your data. All tools run client-side and no data is stored or shared.",
};

export default function PrivacyPage() {
    return (
        <main style={styles.page}>
            <div style={styles.container}>

                <h1 style={styles.title}>Privacy Policy</h1>

                <p style={styles.intro}>
                    Your privacy matters. All tools run locally in your browser —
                    fast, secure, and completely private.
                </p>

                <section style={styles.card}>
                    <h2 style={styles.heading}>No Data Collection</h2>
                    <p style={styles.text}>
                        All tools run entirely in your browser. We do not collect,
                        store, or process your input data on any server.
                    </p>
                </section>

                <section style={styles.card}>
                    <h2 style={styles.heading}>No Data Sharing</h2>
                    <p style={styles.text}>
                        Since no data is collected, nothing is shared with any third parties.
                    </p>
                </section>

                <section style={styles.card}>
                    <h2 style={styles.heading}>Analytics</h2>
                    <p style={styles.text}>
                        We may use minimal analytics to understand general usage trends,
                        such as page visits. These do not track your input data.
                    </p>
                </section>

                <section style={styles.card}>
                    <h2 style={styles.heading}>Security</h2>
                    <p style={styles.text}>
                        Everything runs locally in your browser, ensuring your data
                        stays private and fully under your control.
                    </p>
                </section>

                <section style={styles.card}>
                    <h2 style={styles.heading}>Contact</h2>
                    <p style={styles.text}>
                        If you have any questions, feel free to reach out through our website.
                    </p>
                </section>

            </div>
        </main>
    );
}
const styles = {
    page: {
        padding: "30px 20px",
        display: "flex",
        justifyContent: "center",
    },

    container: {
        maxWidth: "900px",
        width: "100%",
    },

    title: {
        fontSize: "34px",
        fontWeight: 700,
        marginBottom: "10px",
        color: "#0f172a",
        letterSpacing: "0.4px",
    },

    intro: {
        fontSize: "16px",
        color: "#475569",
        marginBottom: "28px",
    },

    card: {
        background: "#e8e6e6",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "16px",

        transition: "all 0.25s ease",
    },

    heading: {
        fontSize: "18px",
        fontWeight: 600,
        color: "#0f172a",
        marginBottom: "8px",
    },

    text: {
        fontSize: "15px",
        color: "#334155",
        lineHeight: "1.6",
    },
};