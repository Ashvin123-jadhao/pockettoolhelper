
import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({children}){
return(
<html>
<body>
<div className="layout">
<Sidebar/>
<div className="content">
<Header/>
{children}
    <Analytics />
    <SpeedInsights />
</div>
</div>
</body>
</html>
)
}
