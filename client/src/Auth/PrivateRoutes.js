import React from "react";
import { isAuthenticated } from "./apicalls";
import { useNavigate, Outlet ,Navigate} from "react-router-dom";

const PrivateRoute = () => {
    let users = isAuthenticated();
    return (
        users ? <Navigate to ='/'/> :<Outlet />
    )
}

export default PrivateRoute