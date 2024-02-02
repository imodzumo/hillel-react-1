import './App.module.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import {lazy, Suspense} from "react";


const HomeLazy = lazy(()=> import("./pages/Home"))
const ContactsLazy = lazy(()=> import("./pages/Contacts"))
const AboutLazy = lazy(()=> import("./pages/About"))


const App = () => {



    return (
        <div>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/contacts" >Contacts</NavLink>
            </nav>

            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<HomeLazy/>} />
                    <Route path="/about" element={<AboutLazy/>} />
                    <Route path="/contacts" element={<ContactsLazy/>} />
                </Routes>
            </Suspense>
        </div>
    );
}
export default App;
