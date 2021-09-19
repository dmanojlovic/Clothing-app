import React from "react";
import '../global.js'

function CreateAccount() {
  function createAccount() {
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

    //check if both passwords are the same 
    if () {
        
    }
    
    let username = document.getElementById("getUsername");
    let password = document.getElementById("getPassword");

    // bring the user to the profile page
    location.replace("localhost/8000");
}
  
  return (
    <div className="create_account">
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
            <label id = "re-enter password"> Re-enter Password:
            </label>
            <input type = "text" id = "getPassword" placeholder = "Enter Password">  
            </input>
            <button type = "submit" onclick = {createAccount} id = "submit"></button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;