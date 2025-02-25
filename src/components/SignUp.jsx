import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate(); // Initialize navigate

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const createdAt = result.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt };

                fetch('https://coffee-store-server-blush-alpha.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully Signed Up',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        }).then(() => {
                            navigate('/'); // Redirect to home page after success
                        });
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}





// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";

// export default function SignUp() {
//     const { createUser } = useContext(AuthContext)

//     const handleSignUp = e => {
//         e.preventDefault();
//         const form = e.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password)

//         createUser(email, password)
//             .then(result => {
//                 console.log(result.user);
//                 const createdAt = result.user?.metadata?.creationTime;
//                 const newUser = { name, email, createdAt: createdAt };
//                 fetch('https://coffee-store-server-blush-alpha.vercel.app/users', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(newUser)
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.insertedId) {
//                             Swal.fire({
//                                 title: 'Success!',
//                                 text: 'Successfully Sign Up',
//                                 icon: 'success',
//                                 confirmButtonText: 'Cool'
//                             })
//                         }
//                     })
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }


//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Sign Up!</h1>

//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form onSubmit={handleSignUp} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="name"
//                                 name="name"
//                                 className="input input-bordered"
//                                 required
//                             />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="email"
//                                 name="email"
//                                 className="input input-bordered"
//                                 required
//                             />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="password"
//                                 name="password"
//                                 className="input input-bordered"
//                                 required
//                             />
                           
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Sign Up</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };