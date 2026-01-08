import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate =  useNavigate();


//    function Login(){
//     console.log(email);
//     console.log(password);
//     axios.post("http://Localhost:5000/users/Login",{
//         email: email,
//         password: password
//     }).then(
//         (response)=>{
//         console.log(response);
//     }).catch(
//         (error)=>{
//         console.log(error);
//     })

//    }

    async function Login(){
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL + "/users/Login", {
          email: email,
          password: password
        });
        console.log(response);
         localStorage.setItem("token", response.data.token);
        if(response.data.role === "admin"){
          // navigate to admin dashboard
            // window.location.href = "/admin/";
           
            navigate("/admin/");


            
        }else{
          // navigate to user dashboard
        }
        // alert("Login Successful");
        toast.success("Login Successful");
      } catch (error) {
        console.log(error);
        toast.error("Login Failed" );
        // alert("Login Failed");
      }
    }

    return (
        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover no-repeat flex bg-center">
            <div className="w-[50%] h-full justify-center items-center flex flex-col ml-100">
                <img src="/logo.png" className="w-[300px]"/>
                <h1 className="text-4xl font-bold mt-5 text-white">Thejan Computers</h1>
            </div>
           <div className="w-[50%] h-full flex justify-center items-center">
           
                <div className="backdrop-blur-3xl w-[450px] h-[600px] shadow-2xl rounded-lg flex flex-col justify-center mr-100">
                    <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    className="m-5 p-3 rounded-md border border-secondary outline-none w-[90%] h-[50px]"/>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    className="m-5 p-3 rounded-md border border-secondary outline-none w-[90%] h-[50px]"/>
                    <p className="w-full text-right pr-5">Forgot Password <Link to="/reset" className="text-accent"> Reset</Link></p>
                    <button onClick={Login} className="m-5 p-3 rounded-lg bg-accent text-white font-bold w-[90%] h-[50px]">Login</button>
                     <button  className="m-5 p-3 rounded-lg border border-accent text-white font-bold w-[90%] h-[50px]">Login with Google</button>
                     <p className="w-full text-right pr-5">Don't have an account? <Link to="/register" className="text-accent"> Register</Link> </p>
                      </div>
                </div>
           </div>
        
    )
}