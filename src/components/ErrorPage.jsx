import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../assets/errorAnimation.json"; 

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            {/* Lottie Animation */}
            <div className="w-72 h-72">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>

            {error.status === 404 && (
                <div className="mt-4">
                    <h1 className="text-2xl font-semibold text-gray-800">Page not found</h1>
                    <Link to="/">
                        <button className="mt-4 bg-blue-800 px-4 py-2 text-white rounded-md hover:bg-blue-900 transition">
                            Go back home
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;
