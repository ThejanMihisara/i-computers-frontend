import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormattedPrice from "../../utils/price-format";
import axios from "axios";


const sampleProductsList =[]

export default function AdminProductsPage(){
    const [products , setproducts] =  useState(sampleProductsList);
    useEffect(()=>{
          const token=localStorage.getItem("token")
    axios.get(import.meta.env.VITE_API_URL+"/products",{
        headers:{
            Authorization:"Bearer "+token
        }
    }).then((response)=>{
        setproducts(response.data)
    })
    },[])
 

    return(
        <div className="w-full h-full overflow-y-scroll ">
            {/* {
                products.map(
                    (item, index)=>{
                        console.log("Render Product Item")
                        return<h1 key={index}>{item.name}</h1>
                    }
                )
            } */}
 {/* 🔴 CHANGED: make this fill the page height */}
<div className="bg-primary p-4 rounded-xl h-[calc(100vh-1rem)] flex flex-col">

  {/* 🔴 CHANGED: flex-1 + min-h-0 enables proper scrolling inside */}
  <div className="flex-1 min-h-0 rounded-xl bg-white shadow-lg border border-secondary/10 ">
   
      {/* 🔴 CHANGED: w-full + table-auto (no forced min-w-max) */}
      <table className="w-full table-auto border-collapse text-sm text-secondary bg-white ">

        {/* 🔴 CHANGED: sticky header row works better on thead/tr */}
        <thead className="bg-secondary text-primary sticky top-0 z-30">
          <tr>
            {[
              "Product ID",
              "Name",
              "Price",
              "Labelled Price",
              "Category",
              "Image",
              "Visibility",
              "Brand",
              "Model",
            ].map((head) => (
              <th
                key={head}
                className="px-5 py-4 text-left font-semibold uppercase tracking-wide text-xs whitespace-nowrap"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <tr
              key={item.productId}
              className={`
                transition-colors duration-200
                ${index % 2 === 0 ? "bg-primary/40" : "bg-white"}
                hover:bg-accent/10
              `}
            >
              <td className="px-5 py-4 font-medium whitespace-nowrap">{item.productId}</td>
              <td className="px-5 py-4 font-semibold ">{item.name}</td>
              <td className="px-5 py-4 text-accent font-semibold whitespace-nowrap">{getFormattedPrice(item.price)}</td>
              <td className="px-5 py-4 line-through opacity-70 whitespace-nowrap">{getFormattedPrice(item.labelledPrice)}</td>
              <td className="px-5 py-4 whitespace-nowrap">{item.category || "Uncategorized"}</td>

              <td className="px-5 py-4">
               <img
             src={item.imageUrls?.[0]}
             alt={item.name}
             className="h-12 w-16 object-cover rounded-lg border border-secondary/20 shadow-sm"
                loading="lazy"
             />

              </td>

              <td className="px-5 py-4 whitespace-nowrap">
                <span
                  className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    ${item.isVisible ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                  `}
                >
                  {item.isVisible ? "Visible" : "Hidden"}
                </span>
              </td>

              <td className="px-5 py-4 whitespace-nowrap">{item.brand || "N/A"}</td>
              <td className="px-5 py-4 whitespace-nowrap">{item.model || "N/A"}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </div>



            <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus />
            </Link>
        </div>
    )
}