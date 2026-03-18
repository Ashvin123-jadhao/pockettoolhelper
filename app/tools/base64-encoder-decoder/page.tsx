import type { Metadata } from "next"
import ToolClient from "./ToolClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/base64-encoder-decoder"

export const metadata: Metadata = {
 title: "Base64 Encoder / Decoder – Free Online Tool",
 description: "Free online base64 encoder / decoder utility.",
 alternates: { canonical: url }
}

export default function Page() {
 return (
  <>
   <StructuredData
    name="Base64 Encoder / Decoder"
    url={url}
    description="Free online base64 encoder / decoder utility."
   />
   <ToolClient />
  </>
 )
}
