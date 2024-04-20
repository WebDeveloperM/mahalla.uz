import {Link, useParams} from "react-router-dom";
import Modal from "@mui/material/Modal";
import * as React from "react";
import {useEffect, useState} from "react";
import GetPersonModalka from "../GetPersonModalka";
import axios from "axios";
import BASE_URL from "../../utils/urls";

function PersonBody({persons}) {


    const id = useParams()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <>
            <tbody className={'text-center'}>
            {persons?.map((person, index) => (
                <tr key={person.id}>
                    <td>{index + 1}</td>
                    <td>
                        <Link  to={`/getperson/${person.id}`}>
                            {person.name}
                        </Link>
                    </td>
                    <td>{person['house_id']['number_of_appartment']}</td>
                    <td>17.03.25</td>
                    <td>263832312312312654</td>
                    <td>+998907142536</td>
                </tr>
            ))}
            </tbody>


        </>
    )
}


export default PersonBody