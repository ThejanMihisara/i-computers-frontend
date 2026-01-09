import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


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
    }
]

export default function AdminProductsPage(){
    const [products , setproducts] =  useState(sampleProductsList);
    return(
        <div className="w-full h-full overflow-y-scroll ">
            {
                products.map(
                    (item, index)=>{
                        console.log("Render Product Item")
                        return<h1 key={index}>{item.name}</h1>
                    }
                )
            }
            <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16">
                <FaPlus />
            </Link>
        </div>
    )
}