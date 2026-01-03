import { useState } from "react";

export default function Test(){
	const [count, setCount] = useState(0)
	const [isVisible, setIsVisible] = useState(true)


	
    return (
        	<div className="w-full h-full bg-yellow-600 flex justify-center items-center">

              <h1>{isVisible}</h1>
               <button onClick={ 
				() =>{
					 setIsVisible(!isVisible)
					}
				} className="w-[50px] h-[50px] bg-red-600 text-white">{isVisible?"X":"O"}</button>

		{isVisible && <div className="w-[400px] h-[400px] bg-white flex justify-center items-center flex-col">
			<h1 className="text-[55px]">{count}</h1>
			<div className="w-full h-[50px] flex justify-around items-center"> {/*we can also use gap-5*/}
				<button onClick={
					() => {
						setCount(count - 1)}
						} className="w-[100px] h-[45px] bg-red-600 text-white">decrement</button>
				<button onClick={
					() => {
						setCount(count + 1)}
						} className="w-[100px] h-[45px] bg-green-600 text-white">increment</button>
			</div>
		</div>}
			
		</div>
    )
}