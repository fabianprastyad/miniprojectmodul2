import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useContext, useState } from "react"
import axios from "axios"
import { useFormik, validateYupSchema } from "formik";
import * as yup from "yup";

import NavLogincomp from "../../components/componentNavLogin/componentNavLogin";
import NavLogoutcomp from "../../components/componentNavLogout/ComponentNavLogout";
import { AuthContext } from "../../AuthContext";


export default function Login () {
   const [success, setSuccess] = useState(false)
   const navigate = useNavigate()
   const {login} = useContext(AuthContext)
   

    const handleSubmit = async (values) => {
        await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login",values)
        .then(response => {
            localStorage.setItem("token", response.data.token);

            setSuccess(true)
            login()
            navigate("/")
        })
        .catch(err => console.log(err))
        console.log("asd")

        
    }
    
    const formik =useFormik ({
        initialValues: {
            email:"",
            password:"",
        },
        onSubmit: handleSubmit,
        validationSchema: yup.object().shape({
        // password: yup.string()
        // .min(6, "Password must be at least 6 characters")
        // .matches(
        //     /^(?=.*[A-Z]) (?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,"password belum sempurna"
        // ).required()
        })
    });

    const handleForm = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value) 
    }

    return (
        
        <div className="login">
          {success   ? <NavLogincomp /> :<> 
          
          
           <span className="logintitle">Login</span>
          <form onSubmit={formik.handleSubmit} className="loginform">

           <label>Email</label>
           <input type="email"name="email" value={formik.values.email} onChange={formik.handleChange} className="logininput" placeholder="Enter Your Email..."  />

           <label>Password</label>
           <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="logininput"  placeholder="Enter Your Password..."  />
           
           <button className="loginbutton" type="submit">Login</button>
          </form>
           <button type="submit" className="loginregisterbutton">
               <Link className="link" to="/register">Register</Link>
           </button>
          
          </>
          } 
          </div>
            
       
       )
    }

