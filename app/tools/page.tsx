export const metadata = {
    title: "All Developer Tools - PocketToolHelper",
    description:
        "Browse all free developer tools including word counter, JSON formatter, regex tester, and more.",
    alternates: {
        canonical: "https://www.pockettoolhelper.com/tools",
    },
};

const tools = [
    { name: "Word Counter", path: "/tools/word-counter" },
    { name: "Case Converter", path: "/tools/case-converter" },
    { name: "Duplicate Lines Remover", path: "/tools/duplicate-lines" },
    { name: "JSON Formatter", path: "/tools/json-formatter" },
    { name: "JWT Decoder", path: "/tools/jwt-decoder" },
    { name: "Base64 Encoder Decoder", path: "/tools/base64-encoder-decoder" },
    { name: "Regex Tester", path: "/tools/regex-tester" },
    { name: "URL Encoder Decoder", path: "/tools/url-encoder-decoder" },
    { name: "UUID Generator", path: "/tools/uuid-generator" },
];

export default function ToolsPage() {
    return (
        <main>
            <h1>All Developer Tools</h1>

            <p>
                Explore a collection of free online developer tools to boost your
                productivity. Easily format JSON, count words, test regex, and more.
            </p>

            <ul>
                {tools.map((tool) => (
                    <li key={tool.path}>
                        <a href={tool.path}>{tool.name}</a>
                    </li>
                ))}
            </ul>

            {/* SEO content (important for indexing + ranking) */}
            <section>
                <h2>Available Tools</h2>
                <p>
                    PocketToolHelper provides a growing set of utilities designed for
                    developers, students, and professionals. Each tool is fast, simple, and
                    works directly in your browser.
                </p>

                <h2>Why use PocketToolHelper?</h2>
                <ul>
                    <li>No installation required</li>
                    <li>Fast and lightweight tools</li>
                    <li>Free to use</li>
                    <li>Secure and browser-based</li>
                </ul>
            </section>
        </main>
    );
}