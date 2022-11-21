// import { Signingin } from "./loginapicalls";
import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { signin } from "./apicalls";
import { authenticate } from "./apicalls";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    redirect:"",
    // error:""
  })
  const navigate = useNavigate()
  const { username, password,redirect } = values
  console.log(username)
  console.log(password)
  const handlechange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    console.log(values)
  }
  const OnSubmit = (event) => {
    event.preventDefault()
    signin(username, password).then(
      data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data) 
          navigate("/")
          authenticate(data)
          setValues({
            username: "",
            password: "",
            redirect:true
          })
        }
      }
    )
  }
  
  return (
    <div>
      <Menu />
      <form>
        <div className="form-group w-50 mx-auto mt-5">
          <label className="mt-1 mb-1">
            Name :
          </label><br />
          <input type="text"
            className="form-control"
            name="name"
            onChange={handlechange("username")}
            value={username}
          />
          <label className="mt-1 mb-1">
            Password :
          </label><br />
          <input type="password"
            className="form-control mb-3"
            name="password"
            onChange={handlechange("password")}
            value={password} />
          <button 
          onClick={OnSubmit}
           type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      <div className="alert alert-light w-50 mx-auto mt-3">
        <p>
          Username:
          {
            username
          }
        </p>
        <p>
          Password:
          {
            password
          }
        </p>
      </div>
    </div>
  );
}
export default Signin;
