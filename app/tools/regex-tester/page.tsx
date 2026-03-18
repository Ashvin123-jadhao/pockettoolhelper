import type { Metadata } from "next"
import ToolClient from "./ToolClient"
import StructuredData from "@/components/StructuredData"

const url = "https://www.pockettoolhelper.com/tools/regex-tester"

export const metadata: Metadata = {
 title: "Regex Tester – Free Online Tool",
 description: "Free online regex tester utility.",
 alternates: { canonical: url }
}

export default function Page() {
 return (
  <>
   <StructuredData
    name="Regex Tester"
    url={url}
    description="Free online regex tester utility."
   />
   <ToolClient />
  </>
 )
}
