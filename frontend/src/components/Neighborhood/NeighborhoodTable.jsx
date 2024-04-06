import NeighborhoodHead from "./NeighborhoodHead.jsx";
import NeighborhoodBody from "./NeighborhoodBody.jsx";
import HomeHead from "../Home/HomeHead";
import HomeBody from "../Home/HomeBody";

function NeighborhoodTable() {
    return (
        <>
            <h2 className={'text-center fs-6 my-4'}>Kogon tuman bo`yicha mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <NeighborhoodHead/>
                <NeighborhoodBody/>
            </table>
        </>


    )
}


export default NeighborhoodTable