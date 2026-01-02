import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return(
        <div className="w-full h-full border-4 border-blue-600 flex">
          <div className="w-[300px] h-full bg-red-900 flex flex-col">
           {/* <a href="/admin/">Dashboard</a><br/>
            <a href="/admin/users">Users</a><br/>
            <a href="/admin/products">Products</a><br/>
            <a href="/admin/orders">Orders</a><br/>
          </div>*/}
          {/*<div className="flex-1 w-[400px] h-full bg-yellow-400 "></div>*/}
          <Link to="/admin/">Dashboard</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/products">Products</Link>
            <Link to="/admin/orders">Orders</Link>
          </div>
          <div className=" w-[calc(100%-300px)] h-full bg-yellow-400 ">
          <Routes>
            <Route path="/" element={<h1>dashboard</h1>} />
            <Route path="users" element={<h1>users page</h1>} />
            <Route path="products" element={<h1>products page</h1>} />
            <Route path="orders" element={<h1>orders page</h1>} />
          </Routes>
          </div>
        </div>
        
    )
}

//insted of calc(100%-300px) you can use flex-1 on the right side div
//instead of <a> tags use <Link> from react-router-dom for client side routing smooth in using <Link>