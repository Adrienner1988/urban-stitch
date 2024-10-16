import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const NavBar = () => {
  return (
    <>
      <nav>
        {/* fixed to the top. name or logo link- search, account, wishlist, cart icons, hamburger menu to slide out same menu*/}
        <div className="first bar">
          <ul className="">
            <li className="home">
              {" "}
              <NavLink to={"/"}>
                UrbanStitch
              </NavLink>
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
        <div className="second bar">
          <ul>
            <li className="nav-list">
              <NavLink to={"/women"}>
                women
              </NavLink>
            </li>

            <li className="nav-list">
              <NavLink to={"/men"}>
                men
              </NavLink>
            </li>

            <li className="nav-list">
              <NavLink to={"/accessories"}>
                accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
