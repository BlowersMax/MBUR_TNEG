import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/onboarding' element={<Onboarding/>}/>
            </Routes>
        </div>
    );
}

export default App;
