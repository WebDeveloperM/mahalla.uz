import NeighborhoodHead from "./NeighborhoodHead.jsx";
import NeighborhoodBody from "./NeighborhoodBody.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BASE_URL from "../../utils/urls";
import axios from "axios";

function NeighborhoodTable() {

    const [neighborhoods, setNeighborhood] = useState(null)
    const {id, district} = useParams()
    useEffect(
        () => {
            axios.get(`${BASE_URL}neighborhood/${id}/`)
                .then(res => {
                    setNeighborhood(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )

    return (
        <>
            <h2 className={'text-center fs-6 my-4'}>{district} tuman
                bo`yicha
                mahalla balansi.</h2>

            <table className="table table-bordered table-striped fs-6">
                <NeighborhoodHead/>
                {
                    neighborhoods ?
                        <NeighborhoodBody neighborhoods={neighborhoods}/>
                        :
                        ""
                }
            </table>

        </>


    )
}


export default NeighborhoodTable