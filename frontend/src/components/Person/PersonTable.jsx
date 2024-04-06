import PersonHead from "./PersonHead.jsx";
import PersonBody from "./PersonBody.jsx";
import RegionHead from "../Region/RegionHead";
import RegionBody from "../Region/RegionBody";

function PersonTable() {
    return (

        <>
            <h2 className={'text-center fs-6 my-4'}>39-uy fuqarolari to`grisida ma'lumot</h2>

            <table className="table table-bordered table-striped fs-6">
                <PersonHead/>
                <PersonBody/>
            </table>
        </>
    )
}


export default PersonTable