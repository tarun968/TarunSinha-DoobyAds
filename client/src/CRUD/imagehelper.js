import React from "react";
import { isAuthenticated } from "../Auth/apicalls";
import { getOneImage } from "./imgapicalls";

export default function ImageHelper({user}) {
    // console.log(userid)
    console.log(user)
    // const {Token} = isAuthenticated();
    // const NameImage  = getOneImage(Token,user.userid,user.ImageId)
    // console.log(user.ImageId)
    return  (
        <img src={`Image/${user.userid}/photo/${user.id}/`} 
        style = {{height:'100 px'}}
        />
    )
}