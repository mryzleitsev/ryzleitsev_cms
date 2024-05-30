import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";

const Layout = ({children}) => {
    return (
        <div>
            <div><Sidebar></Sidebar></div>
            <div><Navbar></Navbar></div>
            {children}
        </div>
    )
}

export default Layout;
