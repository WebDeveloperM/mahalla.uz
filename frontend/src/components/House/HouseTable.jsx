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

    return (
        < >
            <h2 className={'text-center fs-6 my-4'}>{houses && houses[0] ? houses[0].street.name : "Ushbu"} ko'cha
                bo`yicha
                mahalla balansi.</h2>
            <table className="table table-bordered table-striped fs-6">
                <HouseHead/>
                {
                    houses ?
                        <HouseBody houses={houses}/>
                        : ""
                }

            </table>
        </>

    )
}


export default HouseTable