import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import login from '../../assets/b-class.jpg'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {
    
    const[disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    useEffect(()=>{
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            Swal.fire({
                title: 'Login successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, {replace: true});
        })
    }

    const handleValidation = (e) =>{
        const user_captcha_value = e.target.value;
        
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
   
        else {
            setDisabled(true)
        }
    }

    
    return (
        <>
            <Helmet>
                <title>Online Wave | Login</title>
            </Helmet>
        <div className="hero min-h-screen py-20">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center w-[30%] lg:text-left">
                    <img className='w-full' src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm ">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input border-teal-500 border-2" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input border-teal-500 border-2" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidation} type="text"  name="captcha" placeholder="Captcha" className="input border-teal-500 border-2" required />
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="bg-teal-500 rounded-lg p-3 text-white" type="submit" value="Login" />
                        </div>
                        
                    </form>
                    <SocialLogin></SocialLogin>
                    <p>Don not have an account? <Link to="/signup" className='text-teal-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;