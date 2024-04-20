import DistrictHead from "./DistrictHead.jsx";
import DistrictBody from "./DistrictBody.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import BASE_URL from '../../utils/urls'

function DistrictTable() {
    const [districts, setDistricts] = useState(null)
    const {id} = useParams()
    useEffect(
        () => {
            axios.get(`${BASE_URL}district/${id}/`)
                .then(res => {
                    setDistricts(res.data)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )
    let name = "Ushbu"
    if (districts &&  districts[0]) {
            name = districts[0].name
    }

    return (
        <section>
            <h2 className={'text-center fs-6 my-4'}>{districts != null ? name : ""} viloyati
                bo`yicha
                mahalla
                balansi.</h2>


            <table className="table table-bordered table-striped fs-6">
                <DistrictHead/>
                {districts ?
                    <DistrictBody districts={districts}/>
                    : ""
                }

            </table>
        </section>


    )
}


export default DistrictTable