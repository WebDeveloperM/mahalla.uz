import StreetHead from "./StreetHead.jsx";
import StreetBody from "./StreetBody.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../utils/urls";

function StreetTable() {
    const [streets, setStreet] = useState(null)
    const {id} = useParams()
    useEffect(
        () => {
            axios.get(`${BASE_URL}street/${id}/`)
                .then(res => {
                    setStreet(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )

    let name = "Ushbu"
    if (streets && streets[0]) {
        name = streets[0].name
    }
    return (


        <>
            <h2 className={'text-center fs-6 my-4'}>{streets ? name : ""} mahalasi bo`yicha mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <StreetHead/>
                <StreetBody streets={streets}/>
            </table>
        </>

    )
}


export default StreetTable