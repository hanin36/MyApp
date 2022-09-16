

import React from "react";
import { Route,Routes } from "react-router-dom";
import App from "./App";
import ViewDet from "./ViewDet";
export default function Page(){
    return(
        <Routes>
            <Route  index element={<App/>}/>
            <Route  path='/ViewDet' element={<ViewDet />}/>
        </Routes>
    )
}