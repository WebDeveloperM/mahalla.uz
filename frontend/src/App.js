import './assets/css/bootstrap.css'
import Main from "./components/Main.jsx";
import {Route, Routes} from "react-router-dom";
import DistrictTable from "./components/District/DistrictTable";
import Navbar from "./components/Navbar";
import StreetTable from "./components/Street/StreetTable";
import NeighborhoodTable from "./components/Neighborhood/NeighborhoodTable";
import RouterApp from "./RouterApp";


function App() {
    return (
        <>
            <Navbar/>
            <RouterApp/>
        </>


    );
}

export default App;
