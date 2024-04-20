import RegionHead from "./RegionHead.jsx";
import RegionBody from "./RegionBody.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import BASE_URL from "../../utils/urls";

function RegionTable() {

    const [regions, setRegions] = useState(null)

    useEffect(
        () => {
            axios.get(`${BASE_URL}region/`)
                .then(res => {
                    setRegions(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )

    return (
        <>
            <h2 className={'text-center fs-6 my-4'}>Respublika bo`yicha mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <RegionHead/>
                {regions ?
                    <RegionBody regions={regions}/>
                    : ""
                }
            </table>
        </>
    )
}


export default RegionTable