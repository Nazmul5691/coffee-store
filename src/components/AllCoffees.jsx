

import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function AllCoffees() {
    const [coffees, setCoffees] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        fetch('https://coffee-store-server-blush-alpha.vercel.app/coffee')
            .then(response => response.json())
            .then(data => setCoffees(data))
            .catch(error => console.error("Error fetching coffees:", error));
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4">
                <p className="text-center">--- Sip & Savor ---</p>
                <h1 className='font-rancho text-6xl text-center text-purple-600 '>
                    Our Popular Products
                </h1>
                <div className="flex items-center justify-center">
                    <Link to="/addCoffee">
                        <button className="flex items-center justify-center gap-2 text-xl rounded-[4px] font-rancho bg-[#e3b577] px-3 py-2">
                            Add Coffee <span><GiCoffeeCup /></span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                {
                    coffees.map(coffee => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    ))
                }
            </div>
        </div>
    );
}
