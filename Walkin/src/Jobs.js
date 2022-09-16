import React from "react";
import Expandless from './Images/expand_less_black_24dp.svg'
import Expandmore from './Images/expandmore.png'

export default function Jobs (props) {
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
        <div className="jobdet">
            <div className="processdet">
                    <p className="jobprocess">Instructional Designer</p>
                    {!isShown1 && 
                    <img src={Expandless} className='expand' onClick={toggleShown1}/>
                    }
                    {isShown1 && 
                    <img src={Expandmore} className='expand' onClick={toggleShown1}/>
                    }
            </div>
                    {isShown1 &&

                        <div className="jobdesc">
                            
                            <div>
                            <p className="package">Gross Compensation Package :</p>
                            <div className="ansdescbord">Rs 5,00,000</div>
                            </div>
                            
                            <div>
                                <p className="restof">Role Description:</p>
                                <div className="ansdesc">
                                <p>-Generate highly interactive and innovative istructional strategies for e-learning solutions</p>
                                <p>-Develop course structure and learning specifications addressing the requirements ofthe target audience</p>
                                <p>-Construct appropriate testing strategies to ensure learners' understanding and performance</p>
                                <p>-Address usability issues</p>
                                <p>-Keep abreast of new trends in e-learning</p>
                                <p>-Ensure that the instructinal strategies are as per global standards</p>
                                <p>-Prepare instructional strategies are as per global standards</p>
                                <p>-Check for quality assurance</p>
                                
                                </div>
                                
                            </div>
                            <div>
                                <p className="restof">Requirements:</p>
                                <div className="ansdescborder">
                                <p>-Experience in creating instructional plans and course maps.</p>
                                <p>-Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction</p>
                                <p>-Awareness of different instructional design models and familiarity with instructional and learning theories</p>
                                <p>-Awareness of latest trends in e-learning and instructional design</p>
                                <p>-Strong client consulting/interfacing skills.</p>
                                <p>-Ability to guide clients to focus on specifics objectives and teaching points</p>
                                <p>-Strong meeting facilitation, presentation and interpersonal skills</p>
                                <p>-A thorough understanding of the web as an instructional medium</p>
                                <p>-Post graduate degree in Education, Instructional Design, Mass Communication or Journalism</p>
                                </div>
                            </div>
                        
                        </div>
                        
                    }
            </div>         
            <div className="jobdet">   
                <div className="processdet">
                        <p className="jobprocess">Software Engineering</p>
                        {!isShown2 && 
                        <img src={Expandless} className='expand' onClick={toggleShown2}/>
                        }
                        {isShown2 && 
                        <img src={Expandmore} className='expand' onClick={toggleShown2}/>
                        }
                </div>
            </div> 

            <div className="jobdet">   
                <div className="processdet">
                        <p className="jobprocess">Software Engineering</p>
                        {!isShown3 && 
                        <img src={Expandless} className='expand' onClick={toggleShown3}/>
                        }
                        {isShown3 && 
                        <img src={Expandmore} className='expand' onClick={toggleShown3}/>
                        }
                </div>
            </div>     
           
        </div> 
    )
}