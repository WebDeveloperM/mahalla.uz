import RegionHead from "./RegionHead.jsx";
import RegionBody from "./RegionBody.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function RegionTable() {

    const [regions, setRegions] = useState([])

    useEffect(
        () => {
            axios.get('http://127.0.0.1:8000/api/v1/region/')
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

                <RegionBody regions ={regions}/>
            </table>
        </>
    )
}


export default RegionTable