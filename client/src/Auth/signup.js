import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import { signout,signin,signup } from "./apicalls";
function Signup() {
    const [values, setValues] = useState({
        name: "",
        password: "",
        email: "",
        error:"",
    })
    const { name, password, email, error } = values
    const handlechange = (name) => (event) => {
    setValues({ ...values,[name]: event.target.value })
    // setValues({values,[name]: event.target.value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        signup(email,name,password).then(
            data => {
                if(data.error){
                    console.log(data.error)
                    setValues({
                        name: "",
                        password: "",
                        email: "",
                        error:false,         
                    })
                }
                else{
                    setValues({
                        name: "",
                        password: "",
                        email: "",
                        error:true,         
                    })
                }
            }
        )
    }
    const SignUpFailure = () => {
        if(error === false) {
            return (
                <div>
                    <h4 className="text-success"> Check The credential once again 
                    </h4>
                </div>
            )
        }
    }
    const SignUpSuccess = () => {
        if(error === true) {
            return (
                <div>
                    <h4 className="text-success"> Successfully Registered 
                    <Link className="nav-link" to="/Signin">
                        Signin
                    </Link>
                    </h4>
                </div>
            )
        }
    }
    return (
        <div>
            <Menu />
            {
                SignUpSuccess()
            }
            {
                SignUpFailure()
            }
            <form>
                <div className="form-group w-50 mx-auto mt-5">
                    <label>
                        Name :
                    </label>
                    <input type="text"
                        name="name"
                        className="form-control"
                        onChange={handlechange("name")}
                        value={name}
                    />
                    <label>
                        Password :
                    </label>
                    <input type="password"
                        name="password"
                        className="form-control"
                        onChange={handlechange("password")}
                        value={password}
                    />
                    <label>
                        Email :
                    </label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        onChange={handlechange("email")}
                        value={email}
                    />
                    <button 
                    onClick={onSubmit} 
                    type="submit" className="mt-3 btn btn-primary">Submit</button>
                    <div className="alert alert-light w-50 mt-3">
                        <p>
                            Name:
                            {
                                name
                            }
                        </p>
                        <p>
                            Password:
                            {
                                password
                            }
                        </p>
                        <p>
                            Email:
                            {
                                email
                            }
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Signup;