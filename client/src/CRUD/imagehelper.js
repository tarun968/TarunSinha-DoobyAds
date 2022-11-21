import React from "react";
import { isAuthenticated } from "../Auth/apicalls";
import { getOneImage } from "./imgapicalls";

export default function ImageHelper({user}) {
    // console.log(userid)
    console.log(user)
        return  (
        <img src={`http://localhost:4000/Image/${user.userid}/photo/${user.id}/`} 
        style = {{height:'100 px'}}
        />
    )
}