import CaseConverterClient from "./CaseConverterClient"

export const metadata = {
    title: "Case Converter - Convert Text Case Online",
    description:
        "Convert text to uppercase, lowercase, title case, sentence case or toggle case instantly using this free online tool."
}

export default function Page() {
    return <CaseConverterClient />
}