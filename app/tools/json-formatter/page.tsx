import type { Metadata } from "next"
import JsonFormatterClient from "./JsonFormatterClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/json-formatter"

export const metadata: Metadata = {
    title: "JSON Formatter – Free Online Tool",
    description:
        "Format, beautify, validate, sort , JSON to YAML, JSON to CSV, convert and clean JSON instantly with this free online JSON formatter.",
    alternates: {
        canonical: url
    },
    openGraph: {
        title: "JSON Formatter",
        description:
            "Beautify, validate, sort, convert and minify JSON instantly.",
        url,
        siteName: "Pocket Tool Helper",
        type: "website"
    },
    twitter: {
        card: "summary",
        title: "JSON Formatter",
        description:
            "Free JSON formatter to beautify, validate and clean JSON."
    }
}

export default function Page() {
    return (
        <>
            <StructuredData
                name="JSON Formatter"
                url={url}
                description="Free JSON formatter to beautify, validate, sort and clean JSON."
            />
            <JsonFormatterClient />
        </>
    )
}