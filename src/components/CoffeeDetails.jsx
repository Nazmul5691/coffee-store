import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CoffeeDetails() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    fetch(`https://coffee-store-server-blush-alpha.vercel.app/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!coffee) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-lg text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/svMBbmDw/17.jpg')",
      }}
    >
      <div className=" my-10 lg:my-14 bg-white p-8 rounded-lg shadow-xl py-5 w-[300px] lg:max-w-xl lg:w-full ">
        <div className="text-center mb-6">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="lg:w-48 h-24 w-24 lg:h-48 object-cover mx-auto p-3 rounded-md border-4 border-blue-200 mb-4"
          />
          <h2 className="font-rancho text-2xl lg:text-4xl font-semibold text-gray-800">{coffee.name}</h2>
        </div>

        <div className="text-lg font-rancho text-center text-gray-600 space-y-4">
          <p>
            <strong className="font-semibold text-gray-700">Supplier:</strong> {coffee.supplier}
          </p>
          <p>
            <strong className="font-semibold text-gray-700">Taste:</strong> {coffee.taste}
          </p>
          <p>
            <strong className="font-semibold text-gray-700">Price:</strong> ${coffee.price}
          </p>
          <p>
            <strong className="font-semibold text-gray-700">Category:</strong> {coffee.category}
          </p>
          <p>
            <strong className="font-semibold text-gray-700">Available Quantity:</strong> {coffee.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}





// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function CoffeeDetails() {
//   const { id } = useParams();
//   const [coffee, setCoffee] = useState(null);

//   useEffect(() => {
//     fetch(`https://coffee-store-server-blush-alpha.vercel.app/coffee/${id}`)
//       .then((res) => res.json())
//       .then((data) => setCoffee(data))
//       .catch((error) => console.log(error));
//   }, [id]);

//   if (!coffee) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <div className="text-lg text-gray-700">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#e3b577] to-[#e29938]">
//       <div className="bg-white p-8 rounded-lg shadow-xl max-w-xl w-full">
//         <div className="text-center mb-6">
//           <img
//             src={coffee.photo}
//             alt={coffee.name}
//             className="w-48 h-48 object-cover mx-auto p-3 rounded-md border-4 border-blue-600 mb-4"
//           />
//           <h2 className=" font-rancho  text-4xl font-semibold text-gray-800">{coffee.name}</h2>
//         </div>

//         <div className="text-lg font-rancho text-center text-gray-600 space-y-4">
//           <p>
//             <strong className="font-semibold text-gray-700">Supplier:</strong> {coffee.supplier}
//           </p>
//           <p>
//             <strong className="font-semibold text-gray-700">Taste:</strong> {coffee.taste}
//           </p>
//           <p>
//             <strong className="font-semibold text-gray-700">Price:</strong> ${coffee.price}
//           </p>
//           <p>
//             <strong className="font-semibold text-gray-700">Category:</strong> {coffee.category}
//           </p>
//           <p>
//             <strong className="font-semibold text-gray-700">Available Quantity:</strong> {coffee.quantity}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


