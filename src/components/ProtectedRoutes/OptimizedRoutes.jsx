import React from "react";
import { Routes, Route } from "react-router-dom";

import Unauthorised from "../../pages/404/Unauthorised";

//Import All Components
import * as Pages from "./Pages";

const OptimizedRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />     
      <Route path="/unauthorised" element={<Unauthorised />} />
    </Routes>  
  )

}


export default OptimizedRoutes;