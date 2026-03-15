
import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function RootLayout({children}){
return(
<html>
<body>
<div className="layout">
<Sidebar/>
<div className="content">
<Header/>
{children}
</div>
</div>
</body>
</html>
)
}
