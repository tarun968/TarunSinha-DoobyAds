import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Auth/sgnin";
import PrivateRoute2 from "./Auth/PrivateRoute2";
import App from "./App"
import Signup from "./Auth/signup";
import ImageForm from "./CRUD/addimage";
import ImageUploaded from "./CRUD/images";
import PrivateRoute from "./Auth/PrivateRoutes";

export default function Routing() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route element={<PrivateRoute />}>
                        <Route element={<Signin />} path='/Signin' />
                        {/* <Route element = {<Login/>} path='/' /> */}
                    </Route>
                    {/* <Route element={<PrivateRoute2 />}> */}
                        {/* <Route element={<Signin />} path='/Images' /> */}
                        {/* <Route element={<Signin />} path='/Add-Image' /> */}
                    {/* </Route> */}
                    {/* <Route path="/Signin" element={<Signin />}></Route> */}
                    <Route path="/Images" element={<ImageUploaded />}></Route>
                    <Route path="/Add-image" element={<ImageForm />}></Route>
                    {/* <Route path="/fruit/update/:fruitId" element={<UpdateFruits />}></Route> */}
                    <Route path="/Signup" element={<Signup />}></Route>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}