import StreetHead from "./StreetHead.jsx";
import StreetBody from "./StreetBody.jsx";
import DistrictHead from "../District/DistrictHead";
import DistrictBody from "../District/DistrictBody";

function StreetTable() {
    return (


        <>
            <h2 className={'text-center fs-6 my-4'}>Choloki mahalasi bo`yicha mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <StreetHead/>
                <StreetBody/>
            </table>
        </>

    )
}


export default StreetTable