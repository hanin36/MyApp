import React from "react";
import Ticked from './Images/checkbox-checked.svg'
import Unticked from './Images/checkbox-unchecked.svg'

export default function Preference() {
    const [isShown1, setIsShown1] = React.useState(false)
    
    function toggleShown1(){
        setIsShown1(prevShown1 => !prevShown1)
    }

    const [isShown2, setIsShown2] = React.useState(false)
    
    function toggleShown2(){
        setIsShown2(prevShown2 => !prevShown2)
    }

    const [isShown3, setIsShown3] = React.useState(false)
    
    function toggleShown3(){
        setIsShown3(prevShown3 => !prevShown3)
    }

    return (
        <div>
            {isShown1 && 
            <div className="upload">
                <img src={Ticked} onClick={toggleShown1}/>
                <span className="checktitle">Instructional Designer </span>
            </div>
            }
            {!isShown1 && 
            <div className="upload">
                <img src={Unticked} onClick={toggleShown1}/>
                <span className="checktitle">Instructional Designer </span>
            </div>
            }

            {isShown2 && 
            <div className="upload">
                <img src={Ticked} onClick={toggleShown2}/>
                <span className="checktitle">Software Engineering </span>
            </div>
            }
            {!isShown2 && 
            <div className="upload">
                <img src={Unticked} onClick={toggleShown2}/>
                <span className="checktitle">Software Engineering </span>
            </div>
            }

            {isShown3 && 
            <div className="upload">
                <img src={Ticked} onClick={toggleShown3}/>
                <span className="checktitle">Software Quality Engineering </span>
            </div> 
            }
            {!isShown3 && 
            <div className="upload">
                <img src={Unticked} onClick={toggleShown3}/>
                <span className="checktitle">Software Quality Engineering </span>
            </div> 
            }    
        </div>
    )
}