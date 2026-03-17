import type { Metadata } from "next"
import DuplicateLinesClient from "./DuplicateLineRemoverClient"
import StructuredData from "@/components/StructuredData"

const url = "https://pockettoolhelper.com/tools/duplicate-lines"

export const metadata: Metadata = {
    title: "Remove Duplicate Lines – Free Text Cleaner Tool",
    description:
        "Remove duplicate lines from text instantly with this free online duplicate lines remover tool.",

    alternates: {
        canonical: url,
    },

    openGraph: {
        title: "Duplicate Lines Remover Tool",
        description:
            "Free online tool to remove duplicate lines from text instantly.",
        url,
        siteName: "Pocket Tool Helper",
        type: "website",
    },

    twitter: {
        card: "summary",
        title: "Duplicate Lines Remover Tool",
        description:
            "Remove duplicate lines from text instantly using this free online tool.",
    },
}

export default function Page() {
    return (
        <>
            <StructuredData
                name="Duplicate Lines Remover"
                url={url}
                description="Free online tool to remove duplicate lines from text instantly."
            />

            <DuplicateLinesClient />
        </>
    )
}