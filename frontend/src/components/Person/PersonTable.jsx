import * as React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../utils/urls";
import PersonHead from "./PersonHead";
import PersonBody from "./PersonBody";
import 'react-responsive-modal/styles.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Modalka from "../Modalka.jsx";
import AddIcon from '@mui/icons-material/Add';

function PersonTable() {

    const [persons, setPersons] = useState(null)
    const {id} = useParams()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(
        () => {
            axios.get(`${BASE_URL}person/${id}/`)
                .then(res => {
                    setPersons(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )
    let number = 'Ushbu'
    if (persons && persons[0]) {
        number = `${persons[0]['house_id']['ownership']} honadoni `

    }
    console.log(persons)
    return (

        <>
            <h2 className={'text-center fs-6 my-4'}> {persons !=null ? number : "Ushbu uy"}
                fuqarolari to'grisida ma'lumot < /h2>

            <table className="table table-bordered table-striped fs-6">
                <PersonHead/>
                {
                    persons ?
                        <PersonBody persons={persons}/>
                        :
                        ""
                }
            </table>

            <div>
                <Button
                    startIcon={<AddIcon/>}
                    onClick={handleOpen} variant="contained"
                    sx={{textTransform: 'lowercase'}}
                    size={"small"}
                >
                    Qo'shish
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Modalka persons={persons} houseId={id}/>
                </Modal>
            </div>
        </>
    )
}


export default PersonTable