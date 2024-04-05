import RegionHead from "./RegionHead.jsx";
import RegionBody from "./RegionBody.jsx";

function RegionTable() {
    return (
        <table className="table table-bordered table-striped fs-6">
            <RegionHead/>

            <RegionBody/>
        </table>
    )
}


export default RegionTable