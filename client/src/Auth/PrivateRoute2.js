import React from "react";
import { isAuthenticated } from "./apicalls";
import { useNavigate, Outlet ,Navigate} from "react-router-dom";

const PrivateRoute2 = () => {
    let users = isAuthenticated();
    return (
        users ?  <Navigate to ='/Images'/> : <Outlet/> 
    )
}

export default PrivateRoute2