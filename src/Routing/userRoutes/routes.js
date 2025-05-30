import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/HomePage';
import About from '../Pages/AboutPage';
import Contact from '../Pages/ContactUs';

function RoutingInReact() {
    return (
        <>
            <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/contact'><button>ContactUs</button></Link>
        </>
    )
}

function Routing() {
    return (
        <>
            <BrowserRouter>
                <RoutingInReact />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;