import DistrictHead from "./DistrictHead.jsx";
import DistrictBody from "./DistrictBody.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function DistrictTable() {
    const [districts, setDistricts] = useState([])

    useEffect(
        () => {
            axios.get('http://127.0.0.1:8000/api/v1/district/')
                .then(res => {
                    setDistricts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )

    return (
        <>
            <h2 className={'text-center fs-6 my-4'}>Buxoro viloyati bo`yicha mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <DistrictHead/>
                <DistrictBody districts={districts}/>
            </table>
        </>


    )
}


export default DistrictTable