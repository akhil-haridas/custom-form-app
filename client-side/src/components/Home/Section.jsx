import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="hero-area hero-bg">
      <div className="container">
        <div className="row pr-10">
          <div className="col-lg-9 offset-lg-2 text-center">
            <div className="hero-text">
              <div className="hero-text-tablecell sm:pl-8">
                <p className="subtitle">Dignizant Technologies LLP</p>
                <h1>Custom Form App</h1>
                <div className="hero-btns pr-8">
                  <Link to="/admin/forms" className="boxed-btn">
                    List of forms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
