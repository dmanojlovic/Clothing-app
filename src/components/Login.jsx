import React from "react";
import '../global.js'

var userpw = [{"cx": "poodoo"}]

function Login() {
  function login() {
    //check if both boxes are filled 
    if (document.getElementById("getUsername") == "") {
        //show error message and end function
        return;
    }
    //check if password box is filled 
    if (document.getElementById("getPassword") == "") {
        //show error message and end function
        return;
    }
    
    let username = document.getElementById("getUsername");
    let password = document.getElementById("getPassword");

    // check if username and password are in the database
    // check if they belong to the same user
    if (userpw.get(username) != password) {
        document.getElementById("wrong_u/p").innerHTML = "Wrong username or password. Please try again.";
        return;
    }

    // bring the user to the profile page

}
  
  return (
    <div className="login">
      <div class="container">
        <div class="rectangle">
            <label id = "wrong_u/p"></label>
            <label id = "username"> Username:
            </label>
            <input type = "submit" id = "getUsername" placeholder = "Enter Username">  
            </input>
            <label id = "password"> Password:
            </label>
            <input type = "submit" id = "getPassword" placeholder = "Enter Password">  
            </input>
            <button type = "submit" onclick = {login}></button>
        </div>
      </div>
    </div>
  );
}

export default Login;