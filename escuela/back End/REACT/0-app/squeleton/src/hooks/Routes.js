import React  from "react";
import Foods from './Foods'

import NavBar from "../middleware/NavBar";
import { Route } from "react-router-dom";
import NotFound from './404'




const Routes=()=>{


    return (
    <div>
        <NavBar />
        <Foods/>
        
   
   </div>)
        
     
      
}

export  default Routes