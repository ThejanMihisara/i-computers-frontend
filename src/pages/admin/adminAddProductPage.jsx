import { useState } from "react";

export default function AdminAddProductPage() {

    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState("");
    const [Description, setDescription] = useState("");
    const [AltName, setAltName] = useState("");
    const [Price, setPrice] = useState("");
    const [Label, setLabel] = useState("");
    const [Category, setCategory] = useState("Others");
    const [Brand, setBrand] = useState("Standard");
    const [Model, setModel] = useState("");
    const [IsVisible, setIsVisible] = useState(true);


    return(
        <div className="w-full max-h-full flex flex-wrap items-start ">
            <div className="w-[50%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Product ID :</label>
            <input  
            value={productID}
            onChange={(e)=>setProductID(e.target.value)}
            placeholder="Ex: ID001" className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
            <div className="w-[50%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Product Name :</label>
            <input
            maxLength={5} 
            value={productName}
            onChange={(e)=>setProductName(e.target.value)}
            placeholder="Ex: Laptop" className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
             <div className="w-[100%] h-[170px] flex flex-col">
            <label className="font-bold ml-2">Description :</label>
            <textarea
            value={Description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Ex: This is a laptop" className="h-[100px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
            <div className="w-[100%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Altanative Names(comma separated) :</label>
            <input
            value={AltName}  
            onChange={(e)=>setAltName(e.target.value)}
            placeholder="Ex: Laptop, Computer" className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
             <div className="w-[50%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Price :</label>
            <input  
            value={Price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder="Ex: 1000" className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
             <div className="w-[50%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Labelled Price :</label>
            <input  
            value={Label}
            onChange={(e)=>setLabel(e.target.value)}
            placeholder="Ex: New, Sale" className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
                <div className="w-[25%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Category :</label>
            <select 
            value={Category}
            onChange={(e)=>setCategory(e.target.value)}
            className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white">
                <option value="Others">Others</option>
                <option value="Computers">Computers</option>
                <option value="Accessories">Accessories</option>
                <option value="Components">Components</option>
                <option value="Peripherals">Peripherals</option>
            </select>
            </div>
                <div className="w-[25%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Brand :</label>
            <select 
            value={Brand}
            onChange={(e)=>setBrand(e.target.value)}
            className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white">
                <option value="Standard">Standard</option>
                <option value="Dell">Dell</option>              
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                <option value="Asus">Asus</option>
                <option value="Acer">Acer</option>
                <option value="Apple">Apple</option>
                </select>
                </div>
                <div className="w-[25%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Model :</label>
            <input  
            value={Model}
            onChange={(e)=>setModel(e.target.value)}
            placeholder="Ex: Inspiron 15" className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white"/>
            </div>
                <div className="w-[25%] h-[120px] flex flex-col">
            <label className="font-bold ml-2">Is Visible :</label>
            <select 
            value={IsVisible}
            onChange={(e)=>setIsVisible(e.target.value)}
            className="h-[50px] p-2 m-2 border-4 border-accent rounded-[10px] focus:outline-white">
                <option value={true}>True</option>
                <option value={false}>False</option>
                </select>
                </div>
                <div className="w-[100%] h-[100px] flex justify-center items-center">
                    <button className="bg-accent text-white font-bold p-4 rounded-lg hover:bg-secondary transition-all duration-300">Add Product</button>
                </div>
        </div>
    )
}