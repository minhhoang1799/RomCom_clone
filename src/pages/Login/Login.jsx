import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import USERDATA from "../../api/user.json";
Login.propTypes = {
 
};

function Login(props) {
 let history = useHistory();
 
 const handleSubmit = (e) => {
  e.preventDefault()
   localStorage.setItem("userData", JSON.stringify(USERDATA));
   history.push("/");
 }
 return (
  <form onSubmit={(e) => handleSubmit(e)} >
   <label>
    <span>UserID:</span>
    <input type="text" name="name" />
   </label>
   <label>
    <span>Password:</span>
    <input type="password" name="password" />
   </label>
    <input type="submit" value="Đăng nhập" />
  </form>
 );
}

export default Login;