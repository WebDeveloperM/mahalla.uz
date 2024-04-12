import * as React from "react";
import {useEffect, useState} from "react";
import avatar from '../assets/images/avatar.png'
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";
import BASE_URL from "../utils/urls";
import {useNavigate} from "react-router-dom";
import {InputMask} from 'primereact/inputmask';


function Modalka({persons, houseId}) {
    const [pasport, setPasport] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [residentialStatus, setResidentialStatus] = useState("")
    const [fullname, setFullname] = useState("")
    const [jshshir, setJshshir] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [numberHouse, setNumberHouse] = useState("")
    const [cadastrNumeber, setCadastrNumeber] = useState("")
    const [statusOfRegister, setStatusOfRegister] = useState("")
    const [appartmentType, setAppartmentType] = useState("")
    const [timeRegister, setTimeRegister] = useState("")
    const [addressOfPasport, setAddressOfPasport] = useState("")
    const [file, setFile] = useState();

    const navigate = useNavigate();


    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #999',
        boxShadow: 24,
        p: 4,
    };

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: "#444"
    }));

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = window.confirm("Barcha ma'lumotlarni tasdiqlaysizmi?")
        if (file == null) {
            alert("Rasm tanlash majburiy!!!")
            return
        }
        if (result) {
            const userData = {
                house_id: houseId,
                name: fullname,
                residential_status: residentialStatus,
                passport_number: pasport,
                date_of_birth: dateOfBirth,
                jshshir: jshshir,
                phone_number: phone,
                appartment_type: appartmentType,
                cadastr_number: cadastrNumeber,
                status_of_registration: statusOfRegister,
                time_registered: timeRegister,
                address_of_passport: addressOfPasport,
                image: file,


            };

            axios.post(`${BASE_URL}add-person/`, userData)
                .then((response) => {
                    alert("Ma'lumotlaringiz qabul qilindi")
                    navigate('/')
                }).catch((error) => {
                    console.log(error)
                    if (error.response.data.error !== null) {

                        alert(error.response.data.error)
                    } else {
                        alert("Xatolik bor !!!")
                    }

                }
            )
            ;

        }
    }

    useEffect(() => {

    }, [])

    let number = 0
    if (persons && persons[0]) {
        number = persons[0]['house_id']['number_of_appartment']
        console.log(number)
    }
    console.log(persons, "=======================================")
    return (
        <form onSubmit={handleSubmit} className={"container card mt-3 py-3"}>
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
                                <select required className="form-select  form-select-sm w-50"
                                        onChange={e => {
                                            console.log()
                                            setResidentialStatus(e.target.value)
                                        }}
                                >
                                    <option>Tanlang</option>
                                    <option value="shaxsiy">shaxsiy</option>
                                    <option value="ijara">ijara</option>
                                </select>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Pasport raqami:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <InputMask className="form-control form-control-sm w-75 text-center"
                                           onChange={(e) => (
                                               setPasport(e.target.value)
                                           )}
                                           mask={'a*9999999'}
                                           placeholder="AB1234567"/>

                            </div>
                            <div className="col-2">Tug'ilgan sanasi:</div>
                            <div className="col d-flex justify-content-end">
                                <input required value={dateOfBirth}
                                       onChange={(e) => setDateOfBirth(e.target.value)}
                                       type="date"
                                       className="form-control form-control-sm w-75"/>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-4">
                                <p>F.I.O:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <input required onChange={(e) => setFullname(e.target.value)} type="text"
                                       className="form-control form-control-sm w-100"/>
                            </div>

                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>JSHSHIR:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <InputMask className="form-control form-control-sm w-75 text-center"
                                           onChange={(e) => (
                                               setJshshir(e.target.value)
                                           )}
                                           mask={'99 999 999 999 999'}
                                />

                            </div>
                            <div className="col-2">Telefon raqami:</div>
                            <div className="col d-flex justify-content-end">
                                <InputMask className="form-control form-control-sm w-75 text-center"
                                           onChange={(e) => (
                                               setPhone(e.target.value)
                                           )}
                                           mask={'+(999) 99 999 99 99'}
                                />

                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Ko'cha:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <input defaultValue={persons != null ? persons[0]['house_id'].street.name : ""} required type="text" onChange={e => setStreet(e.target.value)}
                                       className="form-control form-control-sm w-75"
                                       />
                            </div>
                            <div className="col-2">Xonadon:</div>
                            <div className="col d-flex justify-content-end">
                                <input required type="text" onChange={e => setNumberHouse(e.target.value)}
                                       className="form-control form-control-sm w-75"
                                       defaultValue={persons != null ? number : null}/>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Kadast raqami:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <InputMask required className="form-control form-control-sm w-75 text-center"
                                           onChange={e => setCadastrNumeber(e.target.value)}
                                           mask={'99:99:99:99:99:9999'}
                                />


                            </div>
                            <div className="col-2">Ro`yhatga olinganlik holati:</div>
                            <div className="col d-flex justify-content-end">
                                <select className="form-select  form-select-sm w-75"
                                        onChange={e => setStatusOfRegister(e.target.value)}
                                >
                                    <option>Tanlang</option>
                                    <option value="doimiy">doimiy</option>
                                    <option value="vaqtincha">vaqtincha</option>
                                </select>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-2">
                                <p>Xonadon turi:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">

                                <select className="form-select  form-select-sm w-75" onChange={e => {
                                    setAppartmentType(e.target.value)
                                    console.log(e.target.value, "9999999999999999999999")
                                }}
                                >
                                    <option>Tanlang</option>
                                    <option value={"Hovli"}>Hovli</option>
                                    <option value={"Ko'p qavatli uy"}>Ko'p qavatli uy</option>
                                </select>
                            </div>
                            <div className="col-2">Xatlov o'tkazilgan sana:</div>
                            <div className="col d-flex justify-content-end">
                                <input required onChange={e => setTimeRegister(e.target.value)} type="date"
                                       className="form-control form-control-sm w-75"/>
                            </div>
                        </div>
                        <div className="row px-3 mb-3 ">
                            <div className="col-4">
                                <p>Pasport bo'yicha manzilingiz:</p>
                            </div>
                            <div className="col text-center d-flex justify-content-end">
                                <input required onChange={e => setAddressOfPasport(e.target.value)} type="text"
                                       className="form-control form-control-sm w-100"/>
                            </div>

                        </div>

                        <button type="submit" className="btn btn-primary mb-3 btn-sm" style={{width: "100px"}}>
                            <SaveIcon fontSize="small" style={{marginRight: "5px"}}/>
                            Saqlash
                        </button>

                    </div>
                </div>
                <div className="col-2">
                    <div className="card bg-light px-3 py-3" style={{width: "100%"}}>

                        {file ?
                            <img src={file} width={'100%'}/> :
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
                            <VisuallyHiddenInput type="file" onChange={handleChange}/>
                        </Button>


                    </div>
                </div>
            </div>

        </form>
    )
}


export default Modalka