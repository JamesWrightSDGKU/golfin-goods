import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Catalog from './pages/Catalog'
import About from './pages/About'

// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Admin from './pages/Admin'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {

    return (
    <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
                
        <Footer />
    </BrowserRouter>
    )
}

export default App
