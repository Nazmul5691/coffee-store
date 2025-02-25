import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json"; 

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
            <div className="w-56 h-56 pt-12">
                <Lottie animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    );
}
