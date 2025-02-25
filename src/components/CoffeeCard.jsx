
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";

export default function CoffeeCard({ coffee, coffees, setCoffees }) {
    const { _id, name, supplier, taste, photo, price, chef, quantity } = coffee;


    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                    )
                    const remaining = coffees.filter(cof => cof._id !== _id)
                    setCoffees(remaining)
                }
             })
            
            }
          })
    }


    return (
        <div className="flex items-center bg-base-100 shadow-xl p-4 rounded-lg">
            {/* Coffee Image */}
            <figure className="w-40 h-40">
                <img
                    src={photo}
                    alt="Coffee"
                    className="w-full h-full object-cover rounded-lg"
                />
            </figure>

            {/* Coffee Details */}
            <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold"> <span className="font-bold">Name:</span> {name} </h2>
                <p className="text-gray-600"> <span className="font-semibold">Available Quantity:</span> {quantity} </p>
                <p className="text-gray-700 font-semibold"> <span className="font-bold">Taste:</span> {taste} </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2">
                <button className="btn bg-gray-200 p-2 rounded-lg">
                    <FaEye className="h-5 w-5 text-gray-700" />
                </button>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn bg-gray-300 p-2 rounded-lg">
                        <BsPencilSquare className="h-5 w-5 text-gray-800" />
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-500 p-2 rounded-lg">
                    <IoTrashOutline className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
    );
}
