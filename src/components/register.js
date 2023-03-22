import "./register.css";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="register">
                <div className="register_form">
                    <div className="register_title">Register</div>
                    <div className="register_input">
                        <input type="email" placeholder="Email address *" />
                    </div>
                    <div className="register_input">
                        <input type="password" placeholder="Password *" />
                    </div>
                    <div className="register_input">
                        <input type="text" placeholder="Fullname" />
                    </div>
                    <div className="register_checkbox">
                        Gender: 
                        <input type="radio" name="gender" value = "Male" /> Male
                        <input type="radio" name="gender" value = "Female"/> Female
                    </div>
                    <div>
                        <p>If the account is exist. <a href="">Login</a></p>
                    </div>
                    <div className="Register_button">
                        <button>Register</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;