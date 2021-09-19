import React from "react";

function Social() {
  return (
    <div className="social">
      <div class="container">
        <div class="row align-items-center my-50">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              
              alt=""
            />
          </div>
          <div class="col-lg-60">
            <h1 class="font-weight-light">Friends</h1>
            <p>
              Check out what your friends are buying and wearing. Get
              your friends and family clothing that you know will fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";
// import "../App.css";

// class AddTask extends React.Component {
//   render() {
//     return (
//       <div className="add-task">
//         <input
//           name="task-input"
//           type="text"
//           id="task"
//           className="text-input"
//           placeholder="Enter your next task..."
//           autoComplete="off"
//         />
//         <button onClick={this.props.handleAddButton} className="add-button">
//           Add task
//         </button>
//       </div>
//     );
//   }
// }

// export default AddTask;
export default Social;