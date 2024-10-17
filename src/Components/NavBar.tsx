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
  }

  window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <>
      <nav>
        {/* fixed to the top. name or logo link- search, account, wishlist, cart icons, hamburger menu to slide out same menu*/}
        <div className="first-bar w-full p-2 fixed top-0 z-10 border-4 border-double border-red-500 ">
          <ul className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li className="home">
              {" "}
              <NavLink to={"/"}>UrbanStitch</NavLink>
            </li>

            <li className="search-icon">
              {" "}
              <NavLink to="/search">
                <SearchIcon />
              </NavLink>
            </li>

            <li className="account-icon">
              {" "}
              <NavLink to={"/account"}>
                <PersonOutlineIcon />
              </NavLink>
            </li>

            <li className="wishlist-icon">
              {" "}
              <NavLink to={"/wishlist"}>
                <FavoriteBorderIcon />
              </NavLink>
            </li>

            <li className="cart-icon">
              {" "}
              <NavLink to={"/cart"}>
                <ShoppingBagOutlinedIcon />
              </NavLink>
            </li>

            <li className="hamburger-icon">
              {" "}
              <NavLink to={"/sidebar"}>
                <MenuOutlinedIcon />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* page links across page, disappears on scroll down  */}
        <div
          className={`second-bar w-full p-2 fixed top-16 left-0 border-4 border-double border-blue-500 z-0 transition-transform duration-300 ${
            isHidden ? "transform translate-y-full" : "transform translate-y-0"
          }`}
        >
          <ul className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
            <li className="nav-list">
              <NavLink to={"/women"}>women</NavLink>
            </li>

            <li className="nav-list">
              <NavLink to={"/men"}>men</NavLink>
            </li>

            <li className="nav-list">
              <NavLink to={"/accessories"}>accessories</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
