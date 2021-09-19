import React from "react";
import '../global.js'

var userpw = [{"cx": "poodoo"}];

function Login() {
  const login = () => {
    //check if both boxes are filled 
    if (document.getElementById("getUsername") == "") {
        //show error message and end function
        document.getElementById("wrong_u/p").innerHTML = "Fill in your password.";
        return;
    }
    //check if password box is filled 
    if (document.getElementById("getPassword") == "") {
      document.getElementById("wrong_u/p").innerHTML = "Fill in your password.";
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
    document.getElementById("wrong_u/p").innerHTML = "yay it worked";
}
  
  return (
    <div className="login">
      <div class="container">
        <div class="rectangle">
            <label id = "wrong_u/p"></label>
            <label id = "username"> Username:
            </label>
            <input type = "text" id = "getUsername" placeholder = "Enter Username">  
            </input>
            <label id = "password"> Password:
            </label>
            <input type = "text" id = "getPassword" placeholder = "Enter Password">  
            </input>
            <button type = "submit" onclick = {login}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;