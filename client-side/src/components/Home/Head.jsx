import React from "react";
import { Link } from "react-router-dom";

const Head = ({ active = "Home" }) => {

  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="main-menu-wrap">
              <nav className="main-menu">
                <ul>
                  <li
                    className={
                      active === "Home" ? `active current-list-item` : ""
                    }
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={
                      active === "forms" ? `active current-list-item` : ""
                    }
                  >
                    <Link to="/admin/forms">Forms</Link>
                  </li>
                  <li className="active current-list-item">
                    <Link to="/admin/create">
                      <box-icon name="user" color="#ffffff"></box-icon>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
