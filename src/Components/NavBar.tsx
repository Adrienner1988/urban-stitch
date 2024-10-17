import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let scrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      scrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-lightCream">
        {/* fixed to the top: logo on left, icons on right */}
        <div className="first-bar w-full h-14 p-4 fixed top-0 z-10 flex items-center justify-between">
          <div className="logo font-bold">
            <NavLink to={"/"}>UrbanStitch</NavLink>
          </div>

          {/* Icons float to the right */}
          <ul className="flex space-x-4 items-center">
            <li className="search-icon">
              <NavLink to={"/search"}>
                <SearchIcon />
              </NavLink>
            </li>

            <li className="account-icon">
              <NavLink to={"/account"}>
                <PersonOutlineIcon />
              </NavLink>
            </li>

            <li className="wishlist-icon">
              <NavLink to={"/wishlist"}>
                <FavoriteBorderIcon />
              </NavLink>
            </li>

            <li className="cart-icon">
              <NavLink to={"/cart"}>
                <ShoppingBagOutlinedIcon />
              </NavLink>
            </li>

            <li className="hamburger-icon">
              <NavLink to={"/sidebar"}>
                <MenuOutlinedIcon />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Second bar links */}
        <div
          className={`second-bar w-full h-10 p-2 fixed top-16 left-0 z-0 transition-transform duration-300 ${
            isHidden ? "transform translate-y-full" : "transform translate-y-0"
          }`}
        >
          <ul className="flex items-center justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li className="font-bold">
              <NavLink to={"/women"}>Women</NavLink>
            </li>

            <li className="font-bold">
              <NavLink to={"/men"}>Men</NavLink>
            </li>

            <li className="font-bold">
              <NavLink to={"/accessories"}>Accessories</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
