import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormattedPrice from "../../utils/price-format";


const sampleProductsList =[
    {
        productId : "P001",
        name : "Gaming Laptop",
        description : "High performance gaming laptop with powerful graphics card.",
        altNames : ["GamerPro X", "Xtreme Gamer"],
        price : 1500,
        labelledPrice : 1200,
        category : "Electronics",
        brand : "Asus",
        model : "ROG",
        isVisible : true
    },
    {
        productId : "P002",
        name : "Wireless Headphones",
        description : "Noise-cancelling wireless headphones with long battery life.",
        altNames : ["SoundMax Pro", "AudioWave"],
        price : 200,
        labelledPrice : 150,
        category : "Accessories",
        brand : "Sony",
        model : "WH-1000XM4",
        isVisible : true
    },
    {
        productId : "P003",
        name : "Smartphone",
        description : "Latest smartphone with advanced camera features.",
        altNames : ["PhotoSnap X", "CamPro"],
        price : 800,
        labelledPrice : 700,
        category : "Electronics",
        brand : "Apple",
        model : "iPhone 13",
        isVisible : false
    },
    {
        productId : "P004",
        name : "Wireless Mouse",
        description : "Compact wireless mouse with long battery life.",
        altNames : ["MousePro X", "WirelessPro"],
        price : 100,
        labelledPrice : 80,
        category : "Accessories",
        brand : "Logitech",
        model : "MX Master 3",
        isVisible : true
    },
    {
        productId : "P005",
        name : "4K Monitor",
        description : "Ultra HD 4K monitor with vibrant colors and sharp details.",
        altNames : ["VisualPro X", "UltraView"],
        price : 600,
        labelledPrice : 500,
        category : "Electronics",
        brand : "Dell",
        model : "UltraSharp U2721DE",
        isVisible : true
    },
    {
        productId : "P006",
        name : "Mechanical Keyboard",
        description : "Durable mechanical keyboard with customizable RGB lighting.",
        altNames : ["KeyPro X", "MechMaster"],
        price : 150,
        labelledPrice : 120,
        category : "Accessories",
        brand : "Corsair",
        model : "K95 RGB Platinum",
        isVisible : false
    },
    {
  productId: "P007",
  name: "Wireless Gaming Mouse",
  description: "High-precision wireless mouse with adjustable DPI and ergonomic design.",
  altNames: ["SpeedMouse Pro", "ShadowGrip"],
  price: 90,
  labelledPrice: 120,
  category: "Accessories",
  brand: "Logitech",
  model: "G Pro X Superlight",
  isVisible: true
},
{
  productId: "P008",
  name: "Noise Cancelling Headphones",
  description: "Over-ear headphones with active noise cancellation and long battery life.",
  altNames: ["SilenceMax", "QuietWave"],
  price: 280,
  labelledPrice: 320,
  category: "Electronics",
  brand: "Sony",
  model: "WH-1000XM5",
  isVisible: true
},
{
  productId: "P009",
  name: "4K UHD Monitor",
  description: "Ultra-high-definition monitor with vibrant colors and slim bezels.",
  altNames: ["VisionPlus 4K", "UltraView"],
  price: 450,
  labelledPrice: 520,
  category: "Electronics",
  brand: "Dell",
  model: "UltraSharp U2723QE",
  isVisible: true
},
{
  productId: "P010",
  name: "Portable SSD",
  description: "High-speed portable SSD with USB-C support and durable casing.",
  altNames: ["FastDrive", "SpeedVault"],
  price: 180,
  labelledPrice: 220,
  category: "Accessories",
  brand: "Samsung",
  model: "T7 Shield",
  isVisible: false
},
{
  productId: "P011",
  name: "Smartwatch",
  description: "Advanced smartwatch with health tracking and AMOLED display.",
  altNames: ["FitTime Pro", "HealthWatch"],
  price: 320,
  labelledPrice: 360,
  category: "Electronics",
  brand: "Apple",
  model: "Watch Series 9",
  isVisible: true
}

]

export default function AdminProductsPage(){
    const [products , setproducts] =  useState(sampleProductsList);
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
                  src={item.images}
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