import React from "react";

function Company() {
  return (
    <div className="company">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Us</h1>
            <p>
            A couple of people who only had experience in Java and Python, decided to use React :)
              This is what can be done in 24 hours with barely any previous experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;