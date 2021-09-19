import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <h3>Favorites
          </h3>
          <div class="col-lg-7">
            <img
              class="uniqlo_pic"
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg"
              alt=""
              href=""
            />
            <img
              class="levis_pic"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/Levis-logo-quer.svg"
              alt=""
              href=""
            />
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