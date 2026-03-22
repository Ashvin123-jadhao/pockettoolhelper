import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html>
        <body>
        <div className="page">

            <Header />

            <div className="main">
                <Sidebar />

                <div className="content">
                    {children}
                </div>
            </div>


            <Analytics />
            <SpeedInsights />

        </div>
        </body>
        </html>
    );
}

export const metadata = {
    icons: {
        icon: "/favicon.ico",
    },
};