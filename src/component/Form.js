import React from "react";
import "../css/form.css";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
function Form() {
  return (
    <div className="big-con">
      <Nav2 />
      <div className="container-3">
        <h1 id="app">Application Form</h1>
        <h3 id="application">
          Become a successful Full-Stack Developer with our ground-breaking
          programme
        </h3>
        <div className="con-2">
          <p> Username*</p>
          <input name="firstname" type="text" required />
          {/* <p>Father Name*</p>
            <input name="lastname"  type="text"/> */}

          <p>Password*</p>
          <input name="address" type="text" required />

          <p>School*</p>
          <input type="text" required />

          <p>College*</p>
          <input name="age" type="text" required />

          <p>Address*</p>
          <input name="address" type="text" required />

          {/* <p>Mobile No.*</p>
            <input name="mobile"  type="number"/> */}

          {/* <p>E-mail*</p>
            <input name="email"  type="number"/> */}

          <p>Postal Code*</p>
          <input type="number" required />

          <Link to="/">
            <input id="submit-btn" type="Submit"/>
          </Link>
          

          <Link to="/">
            <input id="reset-btn" type="reset" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
