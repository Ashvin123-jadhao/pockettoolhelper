import LayoutClient from "@/components/LayoutClient"
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <LayoutClient>
            {children}
        </LayoutClient>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    )
}