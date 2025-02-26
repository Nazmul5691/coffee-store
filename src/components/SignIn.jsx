import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignIn() {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; // Get the previous route or default to home

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);

                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch("https://coffee-store-server-blush-alpha.vercel.app/users", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginInfo),
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log("User updated:", data);
                })
                .catch((error) => console.error("Error updating user:", error));

                
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log("Sign-in error:", error);
            });
    };

    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card flex-shrink-0 lg:w-[350px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                        <p>
                            New to coffee drinker?{" "}
                            <Link to="/signUp">
                                <span className="text-blue-600 font-semibold">Sign Up</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}







// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Link } from "react-router-dom";

// export default function SignIn() {

//     const { signInUser } = useContext(AuthContext);

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);

//     signInUser(email, password)
//       .then((result) => {
//         console.log(result.user);

//         const lastSignInTime = result?.user?.metadata?.lastSignInTime;
//         const loginInfo = { email, lastSignInTime }

//         fetch("https://coffee-store-server-blush-alpha.vercel.app/users", {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(loginInfo),
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               console.log("User updated:", data);
//             })
//             .catch((error) => console.error("Error updating user:", error));
//         })
//         .catch((error) => {
//           console.log("Sign-in error:", error);
//         });
//   };


//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Sign In</h1>

//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form onSubmit={handleSignIn} className="card-body">
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
//                             {/* <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">
//                                     Forgot password?
//                                 </a>
//                             </label> */}
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Sign In</button>
//                         </div>
//                         <p>New to coffee drinker : <Link to="/signUp"> <span className="text-blue-600 font-semibold">Sign Up</span> </Link> </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }