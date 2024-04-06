import HomeHead from "./HomeHead.jsx";
import HomeBody from "./HomeBody.jsx";
import PersonHead from "../Person/PersonHead";
import PersonBody from "../Person/PersonBody";

function HomeTable() {
    return (

        <>
            <h2 className={'text-center fs-6 my-4'}>Namuna ko`chasi honadonlari bo`yicha mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <HomeHead/>
                <HomeBody/>
            </table>
        </>

    )
}


export default HomeTable