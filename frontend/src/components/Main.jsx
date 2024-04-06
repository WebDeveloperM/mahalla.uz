import RegionTable from "./Region/RegionTable.jsx"
import DistrictTable from "./District/DistrictTable";
import StreetTable from "./Street/StreetTable";
import PersonTable from "./Person/PersonTable";
import HomeTable from "./Home/HomeTable";
import NeighborhoodTable from "./Neighborhood/NeighborhoodTable";

function Main() {
    return (
        <section className={'mx-2'}>
            <RegionTable/>
            <hr/>
            <DistrictTable/>
            <hr/>
            <NeighborhoodTable/>
            <hr/>
            <StreetTable/>
            <hr/>
            <HomeTable/>
            <hr/>
            <PersonTable/>


        </section>
    )
}


export default Main