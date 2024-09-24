import Backbencher from "./component/Backbencher";
import Create from "./component/Create";
import Login from "./component/Login";
import Nav2 from "./component/Nav2";
import Footer from "./component/Footer";
import User from "./component/User";
import Form from "./component/Form";
import About from "./component/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Backbencher />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav2" element={<Nav2 />} />
          <Route path="/user" element={<User />} />
          <Route path="/form" element={<Form />} />
          <Route path="/About" element={<About />} />
          {/* <Route path='/Mobile-nav' element={<Mobilenav/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
