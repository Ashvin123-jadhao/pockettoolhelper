import type { Metadata } from "next"
import JwtDecoderClient from "./JwtDecoderClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/jwt-decoder"

export const metadata: Metadata = {
    title: "JWT Decoder – Free Online Tool",
    description:
        "Decode JSON Web Tokens instantly. View JWT header and payload safely in your browser.",
    alternates: { canonical: url }
}

export default function Page() {
    return (
        <>
            <StructuredData
                name="JWT Decoder"
                url={url}
                description="Decode JSON Web Tokens instantly."
            />
            <JwtDecoderClient />
        </>
    )
}