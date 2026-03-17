import type { Metadata } from "next"
import CaseConverterClient from "./CaseConverterClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/case-converter"

export const metadata: Metadata = {
    title: "Case Converter – Uppercase, Lowercase & Text Case Tool",
    description:
        "Convert text to uppercase, lowercase, title case or sentence case instantly using this free case converter tool.",

    alternates: {
        canonical: url,
    },

    openGraph: {
        title: "Case Converter Tool",
        description:
            "Free online tool to convert text to uppercase, lowercase, title case and sentence case instantly.",
        url,
        siteName: "Pocket Tool Helper",
        type: "website",
    },

    twitter: {
        card: "summary",
        title: "Case Converter Tool",
        description:
            "Convert text to uppercase, lowercase, title case and sentence case instantly.",
    },
}

export default function Page() {
    return (
        <>
            <StructuredData
                name="Case Converter"
                url={url}
                description="Free online case converter tool to convert text to uppercase, lowercase, title case and sentence case."
            />

            <CaseConverterClient />
        </>
    )
}