import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5">
      <nav className="flex justify-between items-center py-7 ">

        <div>
            <img className="h-14" src="/src/assets/Resources/Logo.png" alt="img" />
        </div>
        <ul className="md:flex gap-7 ">

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-base" : ""
              }
            >
              Home
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-base" : ""
              }
            >
              Donation
            </NavLink>
          </li>


          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-base" : ""
              }
            >
              Statistics
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
