import { Outlet } from "react-router-dom"

import Navbar from "../components/global/Navbar"


const Home = () => {
  return (
    <div className="relative container">
      <div className="p-4">
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}

export default Home
