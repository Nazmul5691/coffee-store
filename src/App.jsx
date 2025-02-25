// import { useLoaderData } from "react-router-dom"
// import CoffeeCard from "./components/CoffeeCard";
// import { useState } from "react";

// export default function App() {

  
//   const loadedCoffees = useLoaderData();
//   const [coffees , setCoffees] = useState(loadedCoffees)

//   return (
//     <div>
//       <h1 className='text-6xl text-center text-purple-600 my-20'>Hot Hot Cold Coffee : {coffees.length}</h1>
//       <div className='grid md:grid-cols-2 gap-4  max-w-5xl mx-auto'>
//         {
//           coffees.map(coffee => <CoffeeCard
//             key={coffee._id}
//             coffee={coffee}
//             coffees={coffees}
//             setCoffees={setCoffees}
//           ></CoffeeCard>)
//         }
//       </div>
//     </div>
//   )
// }