import React from "react";
import Table from './sizetable/Basictable.js';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
             <Table />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Sizes</h1>
            <p>
              Input how clothes fit you to find the perfect size at each
              store.
            </p>
            <div>
            <label id = "wwidth"> Waist Width:  
            </label>
            <input type = "text" id = "waist" placeholder = "Enter width">  
            </input>
            </div>
            <div>
            <label id = "cwidth"> Chest Width:  
            </label>
            <input type = "text" id = "chest" placeholder = "Enter width">  
            </input>
            </div>
            <div>
            <label id = "aLength"> Arm Length:  
            </label>
            <input type = "text" id = "arm" placeholder = "Enter length">  
            </input>
            </div>
            <div>
            <label id = "lLength"> Leg Length:  
            </label>
            <input type = "text" id = "leg" placeholder = "Enter length">  
            </input>
            </div>
            <button>Submit</button> 
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default About;