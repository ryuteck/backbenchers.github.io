import React from "react";
import { Link } from "react-router-dom";
import "../css/Mobilenav.css";
function Mobilenav() {
  return (
    <div>
      <div className="mobile-nav">
        <div className="mobile-box-1">
          <Link to="/">
            <i class="fa-solid fa-house"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Home</h3>
          </Link>
        </div>
        <div className="mobile-box-2">
          <Link to="/">
            <i class="fa-solid fa-book"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Course</h3>
          </Link>
        </div>
        <div className="mobile-box-3">
          <Link to="/">
            {" "}
            <i class="fa-brands fa-blogger-b"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Blog</h3>
          </Link>
        </div>
        <div className="mobile-box-4">
          <Link to="/">
            <i class="fa-solid fa-info"></i>
          </Link>
          <Link to="/">
            <h3 id="home">About</h3>
          </Link>
        </div>
        <div className="mobile-box-5">
          <Link to="/login">
            <i class="fa-solid fa-user"></i>
          </Link>
          <Link to="/login">
            <h3 id="home">Profile</h3>
          </Link>
        </div>
        {/* <div className="last">
        <div className="box-6">
<Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>


        </div>
        </div> */}
      </div>
    </div>
  );
}

export default Mobilenav;
