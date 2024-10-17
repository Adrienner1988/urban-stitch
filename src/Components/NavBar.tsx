import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Hide second nav bar on scroll down
    let scrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollTop) {
        // Scroll Down
        setIsHidden(true);
      } else {
        // Scroll Up
        setIsHidden(false);
      }
      scrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav>
        {/* fixed to the top: logo on left, icons on right */}
        <div className="first-bar w-full h-14 p-4 fixed top-0 z-10 flex items-center justify-between bg-lightCream">
          <div className="logo font-bold">
            <NavLink to={"/"} aria-label="UrbanStitch Home">
              UrbanStitch
            </NavLink>
          </div>

          {/* Icons float to the right */}
          <ul className="flex space-x-4 items-center">
            <li className="search-icon">
              <NavLink to={"/search"} aria-label="Search">
                <SearchIcon />
              </NavLink>
            </li>

            <li className="account-icon">
              <NavLink to={"/account"} aria-label="Account">
                <PersonOutlineIcon />
              </NavLink>
            </li>

            <li className="wishlist-icon">
              <NavLink to={"/wishlist"} aria-label="Wishlist">
                <FavoriteBorderIcon />
              </NavLink>
            </li>

            <li className="cart-icon">
              <NavLink to={"/cart"} aria-label="Cart">
                <ShoppingBagOutlinedIcon />
              </NavLink>
            </li>

            <li className="hamburger-icon">
              <button onClick={toggleSidebar} aria-label="Sidebar Menu">
                <MenuOutlinedIcon />
              </button>
            </li>
          </ul>
        </div>

        {/* Second bar links- Disappears on scroll */}
        <div
          className={`second-bar w-full h-10 p-2 fixed top-14 left-0 z-0 transition-transform duration-300 bg-lightCream ${
            isHidden ? "transform translate-y-full" : "transform translate-y-0"
          }`}
        >
          <ul className="flex items-center justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li className="font-bold">
              <NavLink to={"/women"} aria-label="Women">
                Women
              </NavLink>
            </li>

            <li className="font-bold">
              <NavLink to={"/men"} aria-label="Men">
                Men
              </NavLink>
            </li>

            <li className="font-bold">
              <NavLink to={"/accessories"} aria-label="Accessories">
                Accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar - Slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-lightCream border-l-2 border-l-grayLight z-20 transform transition-transform duration-500 
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <CloseIcon />
        </button>
        <ul className="flex flex-col space-y-4 mt-16 p-4">
          <li className="font-bold">
            <NavLink to={"/women"} onClick={toggleSidebar} aria-label="Women">
              Women
            </NavLink>
          </li>

          <li className="font-bold">
            <NavLink to={"/men"} onClick={toggleSidebar} aria-label="Men">
              Men
            </NavLink>
          </li>

          <li className="font-bold">
            <NavLink to={"/accessories"} onClick={toggleSidebar} aria-label="Accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay to close the sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default NavBar;
