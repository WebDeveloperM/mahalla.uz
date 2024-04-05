import DistrictHead from "./DistrictHead.jsx";
import DistrictBody from "./DistrictBody.jsx";

function DistrictTable() {
    return (
        <table className="table table-bordered table-striped fs-6">
            <DistrictHead/>
            <DistrictBody/>
        </table>
    )
}


export default DistrictTable