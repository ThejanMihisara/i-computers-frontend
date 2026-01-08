import { Link, Route, Routes } from "react-router-dom";
import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlineInventory2, MdSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import AdminProductsPage from "./admin/adminProductsPage.jsx";
import AdminAddProductPage from "./admin/adminAddProductPage.jsx";

export default function AdminPage() {
    return(
        <div className="w-full h-full border-4  flex bg-accent">
          <div className="w-[300px] h-full  flex flex-col bg-accent text-white text-xl">
           {/* <a href="/admin/">Dashboard</a><br/>
            <a href="/admin/users">Users</a><br/>
            <a href="/admin/products">Products</a><br/>
            <a href="/admin/orders">Orders</a><br/>
          </div>*/}
          {/*<div className="flex-1 w-[400px] h-full bg-yellow-400 "></div>*/}
          <h1 className="text-center text-3xl font-bold p-5 border-b-4 border-white flex">Admin Panel</h1>
          <Link className="flex w-full p-[10px] gap-2 items-center hover:bg-white hover:text-accent transition-colors duration-500"to="/admin/"><MdSpaceDashboard/>Dashboard</Link>
          <Link className="flex w-full p-[10px] gap-2 items-center hover:bg-white hover:text-accent transition-colors duration-500"to="/admin/orders"><FaRegRectangleList/>Orders</Link>
          <Link className="flex w-full p-[10px] gap-2 items-center hover:bg-white hover:text-accent transition-colors duration-500"to="/admin/users"><LuUsers/>Users</Link>
          <Link className="flex w-full p-[10px] gap-2 items-center hover:bg-white hover:text-accent transition-colors duration-500"to="/admin/products"><MdOutlineInventory2/>Products</Link>
           
          </div>
          <div className=" w-[calc(100%-300px)] h-full border-8 border-accent rounded-[20px] bg-primary p-4 ">
          <Routes>
            <Route path="/" element={<h1>dashboard</h1>} />
            <Route path="users" element={<h1>users page</h1>} />
            <Route path="products" element={<AdminProductsPage/>} />
            <Route path="orders" element={<h1>orders page</h1>} />
            <Route path="add-product" element={<AdminAddProductPage/>} />
            
          </Routes>
          </div>
        </div>
        

        
    )
}

//insted of calc(100%-300px) you can use flex-1 on the right side div
//instead of <a> tags use <Link> from react-router-dom for client side routing smooth in using <Link>