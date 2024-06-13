import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <div className="min-h-[calc(100vh-542px)] ">
                <Outlet></Outlet>
            </div>
            <div className="">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;