import type { Metadata } from "next"
import ToolClient from "./ToolClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/uuid-generator"

export const metadata: Metadata = {
 title: "UUID Generator – Free Online Tool",
 description: "Free online uuid generator utility.",
 alternates: { canonical: url }
}

export default function Page() {
 return (
  <>
   <StructuredData
    name="UUID Generator"
    url={url}
    description="Free online uuid generator utility."
   />
   <ToolClient />
  </>
 )
}
