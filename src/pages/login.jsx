import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="w-full h-full bg-[url('/background.jpg')] bg-cover no-repeat flex justify-center items-center">
            <div className="w-[50%] h-full">
                <img src="/logo.png" className="w-[300px] h-[300px] object-cover"/>
                <h1 className="text-4xl font-bold mt-5 text-white">Thejan Computers</h1>
            </div>
           <div className="w-[50%] h-full flex justify-center items-center">
           
                <div className="backdrop-blur-md w-[450px] h-[600px] shadow-2xl rounded-lg flex flex-col justify-center">
                    <input type="email" placeholder="Email" className="m-5 p-3 rounded-md border border-secondary outline-none w-[90%] h-[50px]"/>
                    <input type="password" placeholder="Password" className="m-5 p-3 rounded-md border border-secondary outline-none w-[90%] h-[50px]"/>
                    <p className="w-full text-right pr-5">Forgot Password <Link to="/reset" className="text-accent"> Reset</Link></p>
                    <button className="m-5 p-3 rounded-lg bg-accent text-white font-bold w-[90%] h-[50px]">Login</button>
                     <button className="m-5 p-3 rounded-lg border border-accent text-white font-bold w-[90%] h-[50px]">Login with Google</button>
                     <p className="w-full text-right pr-5">Don't have an account? <Link to="/register" className="text-accent"> Register</Link> </p>
                      </div>
                </div>
           </div>
        
    )
}