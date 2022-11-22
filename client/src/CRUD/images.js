import React from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllImagesofUser } from "./imgapicalls";
import { isAuthenticated } from "../Auth/apicalls";
import { getSpecifiedImage, getSpecifiedImagePrice } from "./imgapicalls";
import ImageHelper from "./imagehelper";
const ImageUploaded = () => {
    const [Images, SetImages] = useState([])
    const [selected, setselected] = useState("")
    const handleSelected = (event) => {
        setselected(event.target.value)
    }
    const { user, Token } = isAuthenticated()
    const preload = () => {
        getAllImagesofUser(Token, user._id).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                SetImages(data.message)
            }
        })
    }
    // console.log(Images)
    useEffect(() => {
        preload()
    }, [])

    const specificImagesbyName = (name) => (event) => {
        getSpecifiedImage(Token, user._id, event.target.value).then(
            data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log(data[0])
                    // console.log(message)
                    if (data.length === 1) {
                        console.log(data)
                        console.log(typeof (data))
                        SetImages(data)
                        return
                    }
                    console.log(typeof (data))
                    SetImages(data.message)
                }
            }
        );
    }

    const specificImagesbyPrice = (name) => (event) => {
        getSpecifiedImagePrice(Token, user._id, event.target.value).then(
            data => {
                console.log("", data)
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log(data[0])
                    if (data.length === 1) {
                        console.log(data)
                        console.log(typeof (data))
                        SetImages(data)
                        return
                    }
                    console.log(typeof (data))
                    SetImages(data.message)
                }
            }
        );
    }

    return (
        <>
            <Menu />
            <div className="container-fluid">
                <form className="p-5 mx-auto">
                    <select onChange={handleSelected}>
                        <p>Search by</p>
                        <option value="Name">Name</option>
                        <option value="Price">Price</option>
                    </select>
                    {selected === 'Name' &&
                        <div className="mb-1">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Name of Photo</label>
                            <input type="text"
                                // accept="image"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={specificImagesbyName("ImageProduct")}
                            // name="ImageProduct"
                            />
                        </div>
                    }
                    {selected === 'Price' &&
                    <div className="mb-1">
                        <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Price of Photo</label>
                        <input type="text"
                            // accept="image"
                            className="form-control"
                            id="formGroupExampleInput6"
                            onChange={specificImagesbyPrice("ImageProduct")}
                        // name="ImageProduct"
                        />
                    </div>
                    }
                    
                </form>

                <table className="mt-1 table border border-3 border-dark mx-auto">
                    <tr>
                        <th>Image Price</th>
                        <th>Image Name</th>
                        <th>Image</th>
                    </tr>
                    {Images.map((details, index) => {
                        const base64String = btoa(
                            String.fromCharCode(...new Uint8Array(details.data.data))
                        )
                        return (
                            <tr>
                                <td className="border border-2 border-dark">{details.priceImage}
                                </td>
                                <td className="border border-2 border-dark">{details.imageName}
                                </td>
                                <td className="border border-2 border-dark" >
                                    <img src={`data:image/jpeg;base64,${base64String}`} />

                                    {/* <ImageHelper user={{ userid: user._id, id: details._id }} /> */}
                                    {/* <img src=/>                                    /                       */}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        </>
    )
}


export default ImageUploaded