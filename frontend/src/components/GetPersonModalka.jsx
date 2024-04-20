import * as React from "react";
import {useEffect, useState} from "react";
import avatar from '../assets/images/avatar.png'
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
import BASE_URL from "../utils/urls";
import {useParams} from "react-router-dom";
import {InputMask} from 'primereact/inputmask';

function Modalka() {
    const [person, setPerson] = useState(null)
    const {id} = useParams()

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });


    useEffect(
        () => {
            axios.get(`${BASE_URL}getperson/${id}/`)
                .then(res => {
                    setPerson(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, []
    )
    console.log()
    return (
        <form className={"container card mt-3 py-3"}>
            <div className="row px-2">
                <div className="col-10">
                    <div className="card bg-light px-3" style={{width: "100%"}}>
                        <div className="row px-3 mb-3 mt-4">
                            <div className="col-3">
                                <p>Mulk turi:</p>
                            </div>
                            <div className="col text-center">
                                <p>
                                    Jismoniy shaxs
                                </p>
                            </div>
                            <div className="col-3">Mulkiy mansubligi:</div>
                            <div className="col d-flex justify-content-end">
                                {person ?
                                    <select required className="form-select  form-select-sm w-50"

                                    >
                                        <option value={person['gender']}>{person[0]['gender']}</option>

                                    </select> : <select required className="form-select  form-select-sm w-50"

                                    >
                                        <option>Tanlang</option>

                                        <option value="shaxsiy">shaxsiy</option>
                                        <option value="ijara">ijara</option>
                                    </select>}

                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Pasport raqami:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <InputMask className="form-control form-control-sm w-75 text-center"

                                           mask={'a*9999999'}
                                           value={person ? person[0]['passport_number'] : ""}
                                           placeholder="AB1234567"
                                />

                            </div>
                            <div className="col-2">Tug'ilgan sanasi:</div>
                            <div className="col d-flex justify-content-end">
                                <input required
                                       type="date"
                                       value={person ? person[0]['date_of_birth'] : ""}
                                       className="form-control form-control-sm w-75"/>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-4">
                                <p>F.I.O:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <input required type="text"
                                       value={person ? person[0]['name'] : ""}
                                       className="form-control form-control-sm w-100"/>
                            </div>

                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>JSHSHIR:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <InputMask className="form-control form-control-sm w-75 text-center"

                                           value={person ? person[0]['jshshir'] : ""}
                                           mask={'99 999 999 999 999'}
                                />

                            </div>
                            <div className="col-2">Telefon raqami:</div>
                            <div className="col d-flex justify-content-end">
                                <InputMask className="form-control form-control-sm w-75 text-center"
                                           value={person ? person[0]['phone_number'] : ""}
                                           mask={'+(999) 99 999 99 99'}
                                />

                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Ko'cha:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <input
                                    value={person ? person[0]['house_id'].street.name : ""}
                                    required type="text" className="form-control form-control-sm w-75"
                                />
                            </div>
                            <div className="col-2">Xonadon:</div>
                            <div className="col d-flex justify-content-end">
                                <input required type="text"
                                       className="form-control form-control-sm w-75"
                                       value={person ? person[0]['house_id']['number_of_appartment'] : ""}/>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Kadast raqami:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <InputMask required className="form-control h-50 form-control-sm w-75 text-center"
                                           mask={'99:99:99:99:99:9999'}
                                           value={person ? person[0]["cadastr_number"] : ""}
                                />


                            </div>
                            <div className="col-2">Ro'yhatga olinganlik holati:</div>
                            <div className="col d-flex justify-content-end">
                                {person ? <select className="form-select h-50  form-select-sm w-75"

                                    >
                                        <option
                                            value={person['status_of_registration']}>{person[0]['status_of_registration']}</option>
                                    </select>
                                    :
                                    <select className="form-select  form-select-sm w-75"

                                    >

                                        <option value="vaqtincha">vaqtincha</option>
                                    </select>
                                }
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Xonadon turi:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">

                                {person ? <select className="form-select h-50  form-select-sm w-75"
                                    >
                                        <option
                                            value={person['appartment_type']}>{person[0]['appartment_type']}</option>

                                    </select> :
                                    <select className="form-select  form-select-sm w-75"
                                    >
                                        <option>Tanlang</option>
                                        <option value={"Hovli"}>Hovli</option>
                                        <option value={"Ko'p qavatli uy"}>Ko'p qavatli uy</option>
                                    </select>}
                            </div>
                            <div className="col-2">Xatlov o'tkazilgan sana:</div>
                            <div className="col d-flex justify-content-end">
                                <input required  className="form-control form-control-sm w-75 h-50"
                                       value={person ? person[0]['time_registered'] : ""}/>

                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Pasport bo'yicha manzilingiz:</p>
                            </div>
                            <div className="col-5 text-center d-flex justify-content-end">
                                <input required  type="text"
                                       className="form-control form-control-sm w-100 h-50"
                                       value={person ? person[0]['address_of_passport'] : ""}/>

                            </div>
                            <div className="col-2">

                                <p>Jinsi:</p>
                            </div>
                            <div className="col-3 text-center d-flex justify-content-end">
                                {person ? <select className="form-select h-50 form-select-sm w-75"
                                >

                                    <option
                                        value={person['gender']}>{person[0]['gender']}</option>

                                </select> : <select className="form-select h-50 form-select-sm w-75"
                                >
                                    <option>Tanlang</option>
                                    <option value={"Erkak"}>Erkak</option>
                                    <option value={"Ayol"}>Ayol</option>
                                </select>}
                            </div>

                        </div>


                    </div>
                </div>
                <div className="col-2">
                    <div className="card bg-light px-3 py-3" style={{width: "100%"}}>

                        {person ?
                            <img src={`https://mahalla-back-1.onrender.com${person[0]['image']}`} width={'100%'}
                                 aria-disabled/>
                            :
                            <img src={avatar} alt="" width={'100%'}/>
                        }
                    </div>
                    <div className="card mt-2">
                        <Button
                            size="small"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon/>}
                            sx={{textTransform: 'lowercase'}}
                        >
                            Upload image
                            <VisuallyHiddenInput disabled type="file"/>
                        </Button>


                    </div>
                </div>
            </div>

        </form>
    )
}


export default Modalka