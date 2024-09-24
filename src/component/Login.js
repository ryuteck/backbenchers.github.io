import images from"../Images/ab.jpg"
import {Link} from 'react-router-dom'
import '../css/login.css'
import Nav2 from './Nav2'
function Login(){
    const submit = () => {
        alert('Login ho chuka hain')
    }
        return (
            <div className="big-con">            
            <Nav2/>
            <div className="login-container">
               
            <div className="login-container0">
            
            <div className="login-container2">
                <div className="login-con"><h1>Login</h1>
                    <h5>Sign in to continue </h5></div>
                    <label for="">Name</label><br/>
                    <input type="text" placeholder="Enter Name" required/> <br/>
                    <label for="">Password</label><br/>
                    <input type="password" placeholder="Password" required/> <br/>
                    <form action="">
                    <a href=""><button type="submit"> Log in</button></a>
                </form>
                    <div className="login-con1"><Link to='/'>Forgotten Password ? </Link><br/> </div>
                    <div className="create-box"><Link to='/create'>Ragister Now</Link></div>
                    
                           
                            <div className="icon"><Link to='/'><i class="fa-brands fa-google"></i></Link></div>
            </div>
        </div>
    </div>
    </div>

    )

    }

    export default Login;


