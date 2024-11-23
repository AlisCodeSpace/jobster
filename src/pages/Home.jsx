import { Outlet } from "react-router-dom"

import Navbar from "../components/global/Navbar"


const Home = () => {
  return (
    <div className="relative">
      <div className="mb-4">
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}

export default Home
