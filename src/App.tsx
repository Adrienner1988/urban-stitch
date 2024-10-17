import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Home } from "./Views/Home";
import Search  from "./Components/Search";
import Account from "./Views/Account";
import Wishlist from "./Views/Wishlist";
import Cart from "./Views/Cart";
import Women from "./Views/Women";
import Men from "./Views/Men";
import Accessories from "./Views/Accessories";
import "./index.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </>
  );
}

export default App;
