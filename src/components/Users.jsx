import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


export default function Users() {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) { 
                fetch(`https://coffee-store-server-blush-alpha.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User Deleted Successfully",
                            icon: "success"
                        });
    
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
            }
        });
    };

    return (
        <div className="lg:p-10 p-5 bg-base-200">
            <h1 className="lg:text-5xl text-3xl font-rancho font-bold text-center pb-5 lg:pb-10 text-purple-600 "> All Users</h1>
            <div className="overflow-x-auto bg-white rounded-md">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                               
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

