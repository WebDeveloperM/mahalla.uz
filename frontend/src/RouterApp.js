import './assets/css/bootstrap.css'
import Main from "./components/Main.jsx";
import {Route, Routes} from "react-router-dom";
import DistrictTable from "./components/District/DistrictTable";
import StreetTable from "./components/Street/StreetTable";
import NeighborhoodTable from "./components/Neighborhood/NeighborhoodTable";
import RegionTable from "./components/Region/RegionTable";
import HouseTable from "./components/House/HouseTable";
import PersonTable from "./components/Person/PersonTable";
import NoPage from "./components/NoPage";
import GetPersonModalka from "./components/GetPersonModalka.jsx";

function RouterApp() {
    return (<section className={"container"}>
     <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/region" element={<RegionTable/>}/>
            <Route path="/district/:id/:region" element={<DistrictTable/>}/>
            <Route path="/neighborhood/:id/:district" element={<NeighborhoodTable/>}/>
            <Route path="/street/:id/:neighborhood" element={<StreetTable/>}/>
            <Route path="/house/:id/:street" element={<HouseTable/>}/>
            <Route path="/person/:id/:house" element={<PersonTable/>}/>
            <Route path="/getperson/:id" element={<GetPersonModalka/>}/>
            <Route path="/admin" action={""}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    </section>

    );
}

export default RouterApp;
