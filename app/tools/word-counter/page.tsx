import type { Metadata } from "next"
import WordCounterClient from "./WordCounterClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/word-counter"

export const metadata: Metadata = {
    title: "Word Counter – Free Online Word & Character Counter",
    description:
        "Free online word counter to count words, characters, sentences and paragraphs instantly.",

    alternates: {
        canonical: url,
    },

    openGraph: {
        title: "Word Counter Tool",
        description:
            "Count words, characters, sentences and paragraphs instantly using this free online word counter.",
        url,
        siteName: "Pocket Tool Helper",
        type: "website",
    },

    twitter: {
        card: "summary",
        title: "Word Counter Tool",
        description:
            "Free online word counter tool to instantly count words and characters.",
    },
}

export default function Page() {
    return (
        <>
            <StructuredData
                name="Word Counter"
                url={url}
                description="Free online word counter tool to count words, characters, sentences and paragraphs."
            />

            <WordCounterClient />
        </>
    )
}