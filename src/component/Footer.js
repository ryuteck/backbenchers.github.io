import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import Images from "../Images/logo.png";
function Footer() {
  return (
    <div>
      <div className="chotafooter">
        <p>Get connected with us on social network:</p>
      </div>

      {/* <!-- footer start here --> */}

      <footer>
        <div className="footer-box">
          <div className="footer-ul-box-1">
            <div className="footer-logo">
              <img src={Images} alt="" />
              <h4 id="contact">Contact Us</h4>
              <Link to="/">
                <p>@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="footer-ul-box-2">
            <h3>COMPANY</h3>
            <ul>
              <Link to="/">
                <li>Careers</li>
              </Link>
              <Link to="/">
                <li>About Us</li>
              </Link>
              <Link to="/">
                <li>Form partners</li>
              </Link>
              <Link to="/">
                <li>Terms</li>
              </Link>
              <Link to="/">
                <li>Privacy Policy</li>
              </Link>
              <Link to="/">
                <li>Contact Us</li>
              </Link>
              <Link to="/">
                <li>Unsubscribe</li>
              </Link>
            </ul>
          </div>
          <div className="footer-ul-box-3">
            <h3>PARTNER SITES</h3>
            <ul>
              <Link to="/">
                <li>Sitemap</li>
              </Link>
              <Link to="/">
                <li>About Us</li>
              </Link>
              <Link to="/">
                <li>Form partners</li>
              </Link>
              <Link to="/">
                <li>For Partner</li>
              </Link>
              <Link to="/">
                <li>Terms</li>
              </Link>
              <Link to="/">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
          {/* <div className="footer-ul-box-4">
    <h3>EXPLORE</h3>
            <ul>
                 
            <Link to='/'><li>Careers</li></Link>
            <Link to='/'><li>About Us</li></Link>
            <Link to='/'><li>Form partners</li></Link>
            <Link to='/'><li>Terms</li></Link>
            <Link to='/'><li>Privacy Policy</li></Link>
            <Link to='/'><li>Contact Us</li></Link>
            <Link to='/'><li>Unsubscribe</li></Link>
            </ul>
    </div> */}
          {/* <div className="footer-ul-box-5">
    <h3>FOLLOW</h3>
            <ul>
                 
            <Link to='/'><li>Facebook</li></Link>
            <Link to='/'><li>Instagram</li></Link>
            <Link to='/'><li>Twitter</li></Link>
            <Link to='/'><li>Linkedin</li></Link>
            <Link to='/'><li>Pinterest</li></Link>
            <Link to='/'><li>Youtube</li></Link>
            </ul>
    </div> */}
        </div>
        <div className="contact">
          <form>
            <div className="form-box">
              <div className="name-box">
                <label for="name">Name</label>
                <br />
                <input type="name" id="name" name="name" placeholder="Name" />
                <br />
              </div>
              <div className="number-box">
                <label for="lname">Mobile No.</label>
                <br />
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Number"
                />
                <br />
                <br />
              </div>
            </div>

            <div className="email-box">
              <label for="email">Email</label>
              <br />
              <input type="email" id="email" name="email" placeholder="Email" />
              <br />
            </div>
            <div className="option-box">
              <label for="coruse">Course</label>
              <br />
              <select>
                <option value="">Full Stack Developer</option>
                <option value="">Full Stack Developer</option>
                <option value="">Full Stack Developer</option>
              </select>
            </div>
            <div className="message-box">
              <Link to="/">
                <input type="Message" value="Send Message" />
              </Link>
            </div>
          </form>
        </div>
      </footer>
      {/* <!-- footer end here --> */}
    </div>
  );
}

export default Footer;
