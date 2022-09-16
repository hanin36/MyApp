import React from "react"
import Cards from "./Cards"
import InD from "../src/Images/InstructionalDesigner.svg"
import SE from "../src/Images/SoftwareEngineer.svg"
import SQE from "../src/Images/SoftwareQualityEngineer.svg"

export default function Main() {
    return (
        <div>
            <Cards 
                title="Walk in for Designer Job Role"
                datefrom="10-JUL-2021"
                dateto="11-JUL-2021"
                location="Mumbai"
                jobs={
                    <div className="jobrole">
                    <img src={InD} className="jobicon"/>
                    <span className="spaning">Instructional Designer</span>
                    </div>
                }
            />
            <Cards 
                title="Walk in for Multiple Job Roles"
                datefrom="03-JUL-2021"
                dateto="04-JUL-2021"
                location="Mumbai"
                jobs={
                    <div className="jobrole">
                    <img src={InD} className="jobicon"/>
                    <span className="spaning">Instructional Designer</span>
                    <span className="rightspan"> | </span>
                    <img src={SE} className="jobicon"/>
                    <span className="spaning">Software Engineering</span>
                    <span className="rightspan"> | </span>
                    <img src={SQE} className="jobicon"/>
                    <span className="spaning">Software Quality Engineering</span>
                    </div>
                }
            />
            <Cards 
                title="Walk in for Design and Development Job Role"
                datefrom="10-JUL-2021"
                dateto="11-JUL-2021"
                location="Mumbai"
                jobs={
                    <div className="jobrole">
                    <img src={InD} className="jobicon"/>
                    <span className="spaning">Instructional Designer</span>
                    <span className="rightspan"> | </span>
                    <img src={SE} className="jobicon"/>
                    <span className="spaning">Software Engineering</span>
                    </div>
                }
            />
        </div>
    )
}
