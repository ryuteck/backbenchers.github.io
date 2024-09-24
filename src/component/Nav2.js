import "../css/nav2.css";
import Images from "../Images/logo.png";
import { Link } from "react-router-dom";
function Nav2() {
  return (
    <div className="side-nav">
      <div className="nav2-logo">
        <img src={Images} alt="" />
        {/* <Link to='/'><h1>B</h1></Link> */}
      </div>
      <div className="boxes">
        <div className="box-1">
          <Link to="/">
            <i class="fa-solid fa-house"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Home</h3>
          </Link>
        </div>
        <div className="box-2">
          <Link to="/">
            <i class="fa-solid fa-book"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Course</h3>
          </Link>
        </div>
        <div className="box-3">
          <Link to="/">
            {" "}
            <i class="fa-brands fa-blogger-b"></i>
          </Link>
          <Link to="/">
            <h3 id="home">Blog</h3>
          </Link>
        </div>
        <div className="box-4">
          <Link to="/About">
            <i class="fa-solid fa-info"></i>
          </Link>
          <Link to="/About">
            <h3 id="home">About</h3>
          </Link>
        </div>
        <div className="box-5">
          <Link to="/login">
            <i class="fa-solid fa-user"></i>
          </Link>
          <Link to="/login">
            <h3 id="home">Profile</h3>
          </Link>
        </div>
        <div className="last">
          <div className="box-6">
            <Link to="/">
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav2;
