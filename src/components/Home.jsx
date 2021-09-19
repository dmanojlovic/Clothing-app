import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class = "h3-header" id = "fav">
          <h3><strong><u>Favorites</u></strong>
          </h3>
          </div>
           <div class="row align-items-center my-5">
          <div class="company">
            <a href = "./Uniqlo"><img
              class = "company_pictures"
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg"
              alt=""
            /></a>
            <label>Uniqlo
              </label>
          </div>
          <div class = "company">
            <img
              class = "company_pictures"
              id="levis_pic"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/Levis-logo-quer.svg"
              alt=""
            >
            </img>
            <label>Levi's
              </label>
          </div>
          <div class ="h3-header" id = "nearby" >
          <h3><strong><u>Nearby Stores</u></strong>
          </h3>
          </div>
          <div class = "company">
              <img 
              class = "company_pictures" 
              src = "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" 
              alt="">

              </img>
              <label>H and M
              </label>
          </div>
          <div class = "company">
              <img 
              class = "company_pictures" 
              src = "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" 
              alt="">
              </img>
              <label>Adidas
              </label>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              A profile page for all of your clothing sizes at different
              brands, with many more on the way! Built using React and Visual Studio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;