export default function StructuredData({
                                           name,
                                           url,
                                           description,
                                       }: {
    name: string
    url: string
    description: string
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name,
        url,
        description,
        applicationCategory: "UtilityApplication",
        operatingSystem: "Any",
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}