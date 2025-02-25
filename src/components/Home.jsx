import AllCoffees from "./AllCoffees";
import CardSections1 from "./CardSections1";
import CardSections2 from "./CardSections2";
import UpdateCoffee from "./UpdateCoffee";

export default function Home() {
    return (
        <div>
            <CardSections1 />
            <AllCoffees />
            <CardSections2 />
        </div>
    )
}