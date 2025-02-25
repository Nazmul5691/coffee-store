



import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

export default function Layout() {
  const navigation = useNavigation(); 
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      <Navbar />
      {isLoading ? <LoadingScreen /> : <Outlet />}
      <Footer />
    </div>
  );
}



// import { Outlet, useNavigation } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import LoadingScreen from "./LoadingScreen";

// export default function Layout() {
//   const navigation = useNavigation();
//   const isLoading = navigation.state === "loading"; // Detect actual loading state

//   return (
//     <div>
//       <Navbar />
//       {isLoading ? <LoadingScreen /> : <Outlet />}
//       <Footer />
//     </div>
//   );
// }


