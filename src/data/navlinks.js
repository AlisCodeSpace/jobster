import {
  FaSuitcase,
  FaSignInAlt,
  FaUserCircle,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";

const navlinks = [
  {
    path: "/jobs",
    icon: FaSuitcase, // Reference to the component
    text: "Jobs",
  },
  {
    path: "/companies",
    icon: FaBuilding,
    text: "Companies",
  },
  {
    path: "/applications",
    icon: FaClipboardList,
    text: "Apps",
  },
  {
    path: "/profile",
    icon: FaUserCircle,
    text: "Profile",
  },
  {
    path: "/login",
    icon: FaSignInAlt,
    text: "Login",
  },
];

export default navlinks;
