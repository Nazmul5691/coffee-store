import AllCoffees from "./AllCoffees";
import Banner from "./HomeComponents/Banner";
import CoffeeFeatures from "./HomeComponents/CoffeeFeatures";
import FollowInstagram from "./HomeComponents/FollowInstagram";

export default function Home() {
    return (
        <div className="flex flex-col gap-20">
            <div>
                <Banner />
                <CoffeeFeatures />
            </div>
            <AllCoffees />
            <FollowInstagram />
        </div>
    )
}