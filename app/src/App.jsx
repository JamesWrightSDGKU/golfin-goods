import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import ThankYou from "./pages/ThankYou";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalProvider from "./state/GlobalProvider";

function App() {

    return (
        <GlobalProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/thankyou" element={<ThankYou />} />
                </Routes>
                        
                <Footer />
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App;