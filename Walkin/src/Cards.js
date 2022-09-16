import React from "react"
import Locate from "../src/Images/location_on_black_24dp.svg"
import { useNavigate } from "react-router-dom"

export default function Cards(props) {
    
    const navigate = useNavigate();
    return (
        <div className="card">
            <p className="titles">{props.title}</p>
            <div className="borderline">
                <p className="restof">Date and Time:</p>
                <div className="loc">
                <div className="ans">{props.datefrom} to {props.dateto}
                <span className="spaning">|</span>
                <span><div className="locations"><img src={Locate} alt="Local" className="locateimg" />{props.location}</div></span>
                </div>
                </div>
            </div>    
            <p className="restof">Job Roles:</p>
            {props.jobs}
            <div className="detailsbtn">
                <p className="details" onClick={()=>{navigate('/ViewDet')}}>VIEW MORE DETAILS</p>
            </div>
        </div>
    )
}
