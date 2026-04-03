import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Test from "./components/test";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/register";
import ForgetPassword from "./pages/forgetPassword";
import { GoogleOAuthProvider } from "@react-oauth/google";


//930386653602-vigltna675920i1hl1t6tjite70f5d8t.apps.googleusercontent.com
export default function App() {
	return (
	<GoogleOAuthProvider clientId="930386653602-vigltna675920i1hl1t6tjite70f5d8t.apps.googleusercontent.com">
			<div className="w-full h-screen bg-primary text-secondary">
				<Toaster position="top-right"/>
				<Routes>
					<Route path="/*" element={<HomePage />} />
					<Route path="/admin/*" element={<AdminPage/>}/>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/forgot-password" element={<ForgetPassword />} />
					<Route path="/test" element={<Test/>} />
				</Routes>
			</div>
		</GoogleOAuthProvider>
	);
}
