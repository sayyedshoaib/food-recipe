
import React, { useState, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import signuppic from './images/signup.jpg'



const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = res.json();
        if (data.status === 400 || !data) {
            console.log(state)
            window.alert("Invalid Credentials");
        } else {
            dispatch({ type: 'USER', payload: true })
            window.alert("Signin Successfull");
            history.push("/")
        }
    }
    return (
        <section className='signin'>
            <div className="signin_page">
                <div className="signin-imge">
                    <figure>
                        <img src={signuppic} alt="sign in pic" />
                    </figure>
                    <NavLink to="/Signup" className='signin-image-link'>New here? <span>Create an Account</span></NavLink>
                </div>
                <div className="signin-content">
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method='POST' className="register-form" id="register-form">

                            <div className="form-group">
                                <label htmlFor="email"><i class="zmdi zmdi-email materials-icons-name"></i></label>
                                <input type="email" name="email" id="email" autoComplete='off'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="password"><i class="zmdi zmdi-lock materials-icons-name"></i></label>
                                <input type="password" name="password" id="password" autoComplete='off'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password" />
                            </div>

                            <div className="form-group" form-button>
                                <input type="submit" name='signin' id='signin' className='form-submit'
                                    onClick={loginUser} value='Sign in' />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>

    )
}

export default Login;
