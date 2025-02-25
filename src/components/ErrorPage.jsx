import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div>
            <h1>OOoopppps !!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h1>Page not found</h1>
                    <Link to="/">
                        <button className="bg-blue-800 p-2  text-white rounded-md">Go back home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;