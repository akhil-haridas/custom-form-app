import React from "react";

const Breadcrumb = ({ current }) => {
  return (
    <div className="breadcrumb-section breadcrumb-bg sm:mt-[-150px] sm:h-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="breadcrumb-text">
              <p>Custom Form App</p>
              <h1>{current}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
