import HouseHead from "./HouseHead.jsx";
import HouseBody from "./HouseBody.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../utils/urls";

function HouseTable() {

    const [houses, setHouses] = useState(null)
    const {id} = useParams()
    useEffect(
        () => {
            axios.get(`${BASE_URL}house/${id}/`)
                .then(res => {
                    setHouses(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )
    let number = 0
    if (houses !=null && houses[0]['house_id'] ) {
        number = houses[0]['house_id']['number_of_appartment']
        console.log(number)
    }

    return (
        < >
            <h2 className={'text-center fs-6 my-4'}>{houses == null ? number : ""} ko'chasi bo`yicha
                mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <HouseHead/>
                <HouseBody houses={houses}/>
            </table>
        </>

    )
}


export default HouseTable