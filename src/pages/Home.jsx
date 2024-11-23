import { Outlet } from "react-router-dom"

import Navbar from "../components/global/Navbar"


const Home = () => {
  return (
    <div className="relative">
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Home
