import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout({ showSidebar, setShowSidebar}) {
    return (
        <>
            <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <Outlet />
        </>
    )

}