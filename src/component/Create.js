import images from "../Images/ab.jpg";
import { Link } from "react-router-dom";
import "../css/create.css";
import Nav2 from "./Nav2";
import Mobilenav from "./Mobilenav";
function Create() {
  const submit = () => {
    alert("Create ho chuka hain");
  };
  return (
    <div className="big-con">
      <Nav2 />

      <div className="create-container">
        <div className="create-container0">
          <div className="create-container2">
            <div className="create-con">
              <h1 id="create">Create an Account</h1>
              <h5>Sign in to continue </h5>
            </div>
            <label for="">First Name</label>
            <br />
            <input type="text" placeholder="Enter Name" required /> <br />
            <label for="">Last Name</label>
            <br />
            <input type="text" placeholder="Last Name" required />
            <br />
            <label for="">E-Mail</label>
            <br />
            <input type="text" placeholder="E-mail" required />
            <br />
            <label for="">Password</label>
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <label for="">Confourm Password</label>
            <br />
            <input type="password" placeholder=" Confourm Password" required />
            <br />
            <form action="">
              <a href="">
                <button type="submit">Create</button>
              </a>
            </form>
            <div className="create-con1">
              <Link to="/Login">Login</Link>
            </div>
            <div className="icon">
              <Link to="/">
                <i class="fa-brands fa-google"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* <Mobilenav /> */}
      </div>
    </div>
  );
}

export default Create;
