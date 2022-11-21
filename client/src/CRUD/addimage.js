import React from "react";
import Menu from "../Menu/Menu";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../Auth/apicalls";
import { AddTheImage } from "./imgapicalls";
import { Navigate } from "react-router-dom";
export default function ImageForm() {
    const { user, Token } = isAuthenticated()
    // console.log(user)
    // console.log(isAuthenticated())
    const [ImageValues, SetImageValues] = useState({
        imageName: "",
        ImageProduct: "",
        priceImage: "",
        NewProduct:"",
        loading: false,
        error: false,
        formData: "",
        DateofAdd: new Date()
    })

    const { imageName, loading,
        error, ImageProduct,NewProduct, priceImage, formData } = ImageValues

    const preload = () => {
        SetImageValues({ ...ImageValues, formData: new FormData() })
    }
    useEffect(() => {
        preload();
    }, []);

    const AddImage = event => {
        event.preventDefault();
        SetImageValues({ ...ImageValues, error: "", loading: true })
        AddTheImage(Token, user._id, formData).then(data => {
            console.log("data", data)
            if (data.error) {
                SetImageValues({ ...ImageValues, error: false });
            } else {
                SetImageValues({
                    ...ImageValues,
                    NameofProduct: "",
                    ImageProduct: "",
                    NewProduct:data.message,
                    error: true,
                    loading: false,
                });
                <Navigate to = "/Images"/>
            }
        });
    }
    console.log(" ", error)
    const handleChange = name => event => {
        const value = name === "ImageProduct" ? event.target.files[0] : event.target.value
        console.log(name, value)
        formData.set(name, value);
        SetImageValues({ ...ImageValues, [name]: value });
    }

    const SuccessMessage = () => {
        return (
            <div className="alert alert-success mt-3"
            style={{display:NewProduct ? "":"none"}}
            >
                <h4>{NewProduct} </h4>
            </div>

        )
    }

    

    return (
        <>
            <Menu />
            <div className="col-md-12">
                <div className="h-100 w-75 mx-auto bg-white">
                    <form className="p-5 mx-auto">

                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>PhotoGraph of the Product</label>
                            <input type="file"
                                accept="image"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("ImageProduct")}
                                name="ImageProduct"
                            />
                        </div>


                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Image Name</label>
                        <input
                            type='text'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                            onChange={handleChange("imageName")}
                            value={imageName}
                            required
                        />
                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Image Price</label>
                        <input
                            type='number'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                            onChange={handleChange("priceImage")}
                            value={priceImage}
                            min='0'
                        />


                        {/* {successSignup} */}
                        {/* {errorSignup(error)} */}
                        <button
                            onClick={AddImage}
                            type="submit"
                            className="w-100 btn-primary mt-3"
                            style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Add Product</button>
                    </form>
                    {SuccessMessage()}
                </div>
            </div>
        </>
    )
}