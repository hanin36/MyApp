import React from "react";
import Off from './Images/radio-button-off.svg'
import On from './Images/radio-button-on.svg'

export default function Time() {
    const [isShown1, setIsShown1] = React.useState(false)
    
    function toggleShown1(){
        setIsShown1(prevShown1 => !prevShown1)
    }

    const [isShown2, setIsShown2] = React.useState(false)
    
    function toggleShown2(){
        setIsShown2(prevShown2 => !prevShown2)
    }

    // function toggle1() {
    //     if ( isShown1 === isShown2)
    //     {
    //         toggleShown2();
    //     }
    // }

    // function toggle2() {
    //     if ( isShown2 === isShown1)
    //     {
    //         toggleShown1();
    //     }
    // }

    return (
        <div>
            {!isShown1 &&
            <div className="upload">
                <img src={Off} onClick={toggleShown1}/>
                <span className="checktitle">9:00 AM to 11:00 AM </span>
            </div>
            }
            {isShown1 && 
            <div className="upload">
                <img src={On} onClick={toggleShown1}/>
                <span className="checktitle">9:00 AM to 11:00 AM </span>
            </div>
            }

            {!isShown2 && 
            <div className="upload">
                <img src={Off} onClick={toggleShown2}/>
                <span className="checktitle">1:00 PM to 3:00 PM  </span>
            </div>
            }
            {isShown2 && 
            <div className="upload">
                <img src={On} onClick={toggleShown2}/>
                <span className="checktitle">1:00 PM to 3:00 PM</span>
            </div>
            }
        </div>
    )
}