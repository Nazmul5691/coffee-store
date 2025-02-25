
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { useLoaderData } from "react-router-dom";

export default function CoffeeSection() {

  
//   const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

    
    

  return (
    <div>
      <h1 className='text-6xl text-center text-purple-600 my-20'>Hot Hot Cold Coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4  max-w-5xl mx-auto'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}