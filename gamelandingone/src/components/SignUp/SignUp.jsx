import './SignUp.css';
import icon from './../../img/icons/Mail.svg';

const SignUp=()=>{
    return(
        <div className="SignUp">
            <div className="SignUp__container">
                <div className="SignUp__text_container">
                    <img src={icon} alt="Mail Icon" className="SignUp_icon" />
                    <p className="SignUp__text">Sign Up To Shop Now</p>
                </div>
                <div className="SignUp_input_container">
                    <input type="text" placeholder='Enter your email' className="SignUp_input" />
                    <div className="SignUp_input_btn"><p>SUBSCRIBE</p></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;