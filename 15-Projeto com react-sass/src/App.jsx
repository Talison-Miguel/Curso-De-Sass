import { MainContent } from './components/MainContent'
import { Sidebar } from './components/SideBar'

import './styles/components/app.sass'

function App() {
    return (
        <div id="portfolio">
            <h1>Tálison Miguel</h1>    
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default App
