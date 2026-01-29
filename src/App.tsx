import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import DemoPlaceholder from './components/common/DemoPlaceholder'

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<DemoPlaceholder />} />
            </Route>
        </Routes>
    )
}

export default App
