import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = () => {
  return (
    <div className="bg-bg text-text antialiased font-poppins"><Header/><Outlet /><Footer/></div>
  )
}
