import React from "react";
import '../global.js'

var userpw = [{"cx": "poodoo"}];

function Login() {
  const login = () => {
    //check if username box are filled 
    if (document.getElementById("getUsername") == "") {
        //show error message and end function
        document.getElementById("wrong_uspw").innerHTML = "Fill in your password.";
        return;
    }
    //check if password box is filled 
    if (document.getElementById("getPassword") == "") {
      document.getElementById("wrong_uspw").innerHTML = "Fill in your password.";
        return;
    }
    
    let username = document.getElementById("getUsername");
    let password = document.getElementById("getPassword");

    // check if username and password are in the database
    // check if they belong to the same user
    
    if (username != "cx" || password != "poodoo") {
    //if (userpw.get(username) != password) {
        document.getElementById("wrong_uwpq").innerHTML = "Wrong username or password. Please try again.";
        return;
    }

    // bring the user to the profile page
    document.getElementById("wrong_uspw").innerHTML = "yay it worked";
}
  
  return (
    <div className="login">
      <div class="container">
        <div class="rectangle">
          <form onsubmit = {login}>
            <label id = "wrong_uspw"></label>
            <label id = "username"> Username:
            </label>
            <input type = "text" id = "getUsername" placeholder = "Enter Username">  
            </input>
            <label id = "password"> Password:
            </label>
            <input type = "text" id = "getPassword" placeholder = "Enter Password">  
            </input>
            <input type = "submit">Submit</input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;