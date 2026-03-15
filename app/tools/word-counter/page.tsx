import WordCounterClient from "./WordCounterClient"

export const metadata = {
    title: "Word Counter - Free Online Word and Character Counter",
    description:
        "Count words, characters, sentences and paragraphs instantly using this free online word counter tool."
}

export default function Page() {
    return <WordCounterClient />
}