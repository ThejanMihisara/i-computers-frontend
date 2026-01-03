export default function test(){
    return (
        	<div className="w-[600px] h-[600px] border-4 relative">
			<div className="w-[500px] h-[500px] bg-amber-200 flex flex-col items-center justify-center relative">
				<div className="w-[75px] h-[75px] bg-blue-600 m-[20px] p-[20px]">Box1
				</div>
				<div className="w-[75px] h-[75px] bg-red-600 mt-[20px] mb-[20px] pr-[20px]">Box2
				</div>
				<div className="w-[75px] h-[75px] bg-green-600 absolute top-[10px] right-[10px] z-[1] ml-[20px] pl-[20px]">Box 3
				</div>
				<div className="w-[75px] h-[75px] bg-purple-600 fixed top-[10px] right-[1150px] z-[2]">
				</div>
				<div className="w-[75px] h-[75px] bg-black">
				</div>
				<div className="w-[75px] h-[75px] bg-[#00FFFF]">
				</div>

			</div>
			
		</div>
    )
}