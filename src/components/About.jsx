import React from "react";
import Table from './sizetable'
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
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default About;