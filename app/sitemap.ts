import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://pockettoolhelper.com";

    const toolPages = [
        "word-counter",
        "case-converter",
        "duplicate-lines"
    ];

    const tools = toolPages.map((tool) => ({
        url: `${baseUrl}/tools/${tool}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...tools,
    ];
}