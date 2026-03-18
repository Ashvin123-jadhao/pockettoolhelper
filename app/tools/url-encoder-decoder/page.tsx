import type { Metadata } from "next"
import ToolClient from "./ToolClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/url-encoder-decoder"

export const metadata: Metadata = {
 title: "URL Encoder / Decoder – Free Online Tool",
 description: "Free online url encoder / decoder utility.",
 alternates: { canonical: url }
}

export default function Page() {
 return (
  <>
   <StructuredData
    name="URL Encoder / Decoder"
    url={url}
    description="Free online url encoder / decoder utility."
   />
   <ToolClient />
  </>
 )
}
