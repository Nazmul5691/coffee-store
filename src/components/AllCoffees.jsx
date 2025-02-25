

import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

export default function AllCoffees() {
    const [coffees, setCoffees] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(response => response.json())
            .then(data => setCoffees(data))
            .catch(error => console.error("Error fetching coffees:", error));
    }, []);

    return (
        <div>
            <h1 className='text-6xl text-center text-purple-600 my-20'>
                Hot Hot Cold Coffee : {coffees.length}
            </h1>
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
