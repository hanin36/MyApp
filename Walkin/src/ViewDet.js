import React from 'react';
import Navbar from './Navbar'
import Details from './Details'
import InD from "../src/Images/InstructionalDesigner.svg"
import SE from "../src/Images/SoftwareEngineer.svg"
import SQE from "../src/Images/SoftwareQualityEngineer.svg"


export default function ViewDet() {
    return (
        <div>
            <Navbar />
            <Details 
                    title="Walk in for Multiple Job Roles"
                    datefrom="03-JUL-2021"
                    dateto="04-JUL-2021"
                    location="Mumbai"
                    jobs={
                        <div className="jobrole">
                        <img src={InD} className="jobicon"/>
                        <span className="jobtitle">Instructional Designer</span>
                        <span className="rightspan"> | </span>
                        <img src={SE} className="jobicon"/>
                        <span className="jobtitle">Software Engineering</span>
                        <span className="rightspan"> | </span>
                        <img src={SQE} className="jobicon"/>
                        <span className="jobtitle">Software Quality Engineering</span>
                        </div>
                    }
            />
        </div>
    )
}
