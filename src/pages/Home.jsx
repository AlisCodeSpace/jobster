import { Outlet } from "react-router-dom"

import Navbar from "../components/global/Navbar"


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="px-4 py-6">
        <Outlet />
      </div>
    </div>
  )
}

export default Home
