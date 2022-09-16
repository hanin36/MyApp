import React from "react"
import zeus from './Images/Zeus-LMS-logo.svg'
import profileimg from './Images/imageof.jpg'

export default function Navbar() {
    return (
        <nav>
            <img src={zeus} alt="Logo" className="zeuslg"/>
            <img src={profileimg} alt="profile" className="profilelg"/>
        </nav>
    )
}