import React,{useState} from 'react'
import {NavLink,useHistory} from 'react-router-dom'
import signuppic from './images/signup.jpg'

const Signup = () => {
    const history = useHistory();
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    let name,value
   const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
         setUser({...user,[name]:value})
    }
    const PostData = async (e) =>{
        e.preventDefault();
        const { name,email,phone,work,password,cpassword} = user;
       const res =  await fetch('/register',{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },body:JSON.stringify({name,email,phone,work,password,cpassword})
       })
       const data = await res.json();
       if(data.status === 422 || !data){
           window.alert("Registration Failed");
           console.log("Registration Failed");
       }else{
        window.alert("Registration Successfull");
        console.log("Registration Successfull"); 
        history.push("/Login")
       }
    }
    
    return (
        <div>
            <section className='signup '>
                <div className="container_1"> 
                <div className="signup_content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form" method="POST">
                           
                            <div className="form-group">
                                <label htmlFor="name"><i class="zmdi zmdi-account materials-icons-name"></i></label>
                                <input type="text" name="name" id="name" autocomplete='off' 
                                value={user.name}
                                onChange={handleInputs}
                                placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i class="zmdi zmdi-email materials-icons-name"></i></label>
                                <input type="email" name="email" id="email" autoComplete='off' 
                                value={user.email}
                                onChange={handleInputs}
                                placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"><i class="zmdi zmdi-phone-in-talk materials-icons-name"></i></label>
                                <input type="number" name="phone" id="phone" autoComplete='off' 
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder="Your Number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work"><i class="zmdi zmdi-slideshow materials-icons-name"></i></label>
                                <input type="text" name="work" id="work" autoComplete='off' 
                                value={user.work}
                                onChange={handleInputs}
                                placeholder="Your Profession" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i class="zmdi zmdi-lock materials-icons-name"></i></label>
                                <input type="password" name="password" id="password" autoComplete='off' 
                                value={user.password}
                                onChange={handleInputs}
                                placeholder="Your Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword"><i class="zmdi zmdi-lock materials-icons-name"></i></label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete='off' 
                                value={user.cpassword}
                                onChange={handleInputs}
                                placeholder="Confirm Your Password" />
                            </div>
                            <div className="form-group" form-button>
                                <input type="submit" name='signup' id='signup' className='form-submit' value='Register' onClick={PostData}/>
                            </div>
                        </form>
                        </div>
                        <div className="signup-imge">
                            <figure>
                                <img src={signuppic} alt="sign up pict" />
                            </figure>
                            <NavLink to="/Login" className='signup-image-link'>Already Register? <span>Sign in</span></NavLink>
                        </div>
                    
                </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
