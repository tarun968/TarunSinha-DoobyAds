import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Auth/sgnin";
import App from "./App"
// import Fruits from "./Fruits";
import Signup from "./Auth/signup";
import ImageForm from "./CRUD/addimage";
import ImageUploaded from "./CRUD/images";
// import UpdateFruits from "./Updatefruits";
// import Addfruit from "./Addfruit";

export default function Routing() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/Signin" element={<Signin />}></Route>
                    <Route path="/Images" element={<ImageUploaded />}></Route>
                    <Route path="/Add-image" element={<ImageForm />}></Route> 
                    {/* <Route path="/fruit/update/:fruitId" element={<UpdateFruits />}></Route> */}
                    <Route path="/Signup" element={<Signup />}></Route> 
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}