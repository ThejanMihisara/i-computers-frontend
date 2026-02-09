import { useParams } from "react-router-dom";

export default function Overview() {
    const params=useParams();
    

    //fetch product details using params.productId and display them here
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Welcome to iComputers</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
                Your one-stop shop for the latest and greatest in computer technology. Explore our wide range of products, from powerful gaming rigs to sleek ultrabooks, all designed to meet your computing needs. Whether you're a gamer, a professional, or just looking for a reliable computer, we've got you covered. Browse our collection and find the perfect device for you!
            </p>
        </div>
    );
}