import React from "react"
import Locate from "../src/Images/location_on_black_24dp.svg"
import Expandless from './Images/expand_less_black_24dp.svg'
import Expandmore from './Images/expandmore.png'
import Upload from './Images/Upload_black_24dp.svg'
import Preference from "./Preference"
import Time from "./Time"
import Jobs from "./Jobs"
import './Details.css'

export default function Details(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }


    return (
        <div>
            <div className="carddet">
                <div className="cardcont">
                    <div className="apply">
                        <p className="dettitles">{props.title}</p>
                        <p className="applybtn">Apply</p>
                    </div>
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
                </div>
                <div className="processdet">
                    <p className="process">Pre-requisites and Application Process</p>
                    {!isShown && 
                    <img src={Expandless} className='expand' onClick={toggleShown}/>
                    }
                    {isShown && 
                    <img src={Expandmore} className='expand' onClick={toggleShown}/>
                    }
                </div>
                    {isShown && 
                    <div className="jobdesc">
                            
                        <div>
                        <p className="package">General Instructions :</p>
                        <div className="ansdescbord">
                        <p>-We have a two-year indemnity for permanent candidate. We will provide training to the selected candidates.</p>
                        <p>-Candidates who have appeared fro any test held by Zeus Learning in the past 12 months will not be allowed to appear fro this recruitment test.</p>
                        </div>
                        </div>
                        
                        <div>
                            <p className="restof">Instructions for the Exam :</p>
                            <div className="ansdesc">
                            <p>-Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera.</p>
                            <p>By taking this test, you are permitting the examination system to capture your video for invigilation purposes.</p>
                            <p>-Candidates would not be able to appear for the exam if the web camera attached to their system is not functional.</p>
                            <p>The web camera of your system must be enabled and must remaain swtiched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void.</p>
                            <p>-Candidate's audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam.</p>
                            <p>-Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam.</p>
                            <p>-Candidate cannot use an iOS system/device for this exam.</p>
                            
                            </div>
                            
                        </div>

                        <div>
                        <p className="restof">Minimum System Requirements :</p>
                        <div className="ansdescbord">
                        <p>-Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).</p>
                        <p>-The latest version of Google Chrome Browser only. </p>
                        <p>-Please note that internet speed should be minimum 1 Mbps.</p>
                        <p>-Do not use a MacBook or iPad for the proctored exam.</p>
                        </div>
                        </div>

                        <div>
                            <p className="restof">Requirements:</p>
                            <div className="ansdescborder">
                            <p>-Every round is an elimination round. Candidates need to clear all rounds to get selected.</p>
                            <br/>
                            <p>Round 1: 4th August,2018</p>
                            <p>Aptitude Test: 25 Questions</p>
                            <br/>
                            <p>Round 2 (Interview): 4th August, 2018 </p>
                            </div>
                        </div>
                        
                        

                    </div>
                    }
            </div>

        
            <div className="card">
                <p className="dettitles">Time slot & Preferences</p>
                <div>
                    <p className="restof">Select a Time Slot :</p>
                    <p className="ansdescbord"><Time /></p>
                </div>
                <div>
                    <p className="restof">Select Your Preference :</p>
                    <p className="ansdescbord"><Preference /></p>
                </div>
                <div className="upload">
                    <img src={Upload} /><span className="jobtitle">UPLOAD UPDATED RESUME </span>
                </div>
            </div>


            <Jobs />
                
            



        </div>
    )
}