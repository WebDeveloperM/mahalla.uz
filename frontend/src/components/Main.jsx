import RegionTable from "./Region/RegionTable.jsx"
import DistrictTable from "./District/DistrictTable";
import StreetTable from "./Street/StreetTable";
import PersonTable from "./Person/PersonTable";
import HomeTable from "./Home/HomeTable";
import NeighborhoodTable from "./Neighborhood/NeighborhoodTable";
import Navbar from "./Navbar";

function Main() {
    return (<>
            <section className={'mx-2'}>
                <RegionTable/>
            </section>
        </>
    )
}


export default Main