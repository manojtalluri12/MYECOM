import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
import { useMydata } from "../../EcomContext/EcomContext";
import { useTheme } from "../../theme-context/theme-context";
import { TbArrowsCross } from "react-icons/tb";
import { CiLight, CiDark } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
const NavBar = () => {
  const { cart, order,menu, handlemenu} = useMydata();
  const { theme, toggleTheme, isDark } = useTheme();
  return (
    <div className="navbar">
      <div className="navleft">
        <Link to="/" className="links ">
          Ecom
        </Link>
      </div>
      {
        menu ? <CiMenuFries size={20} className="menu" onClick={handlemenu} /> :<TbArrowsCross size={20} className="menu" onClick={handlemenu}/>
      }
      <div className={menu ?"active":"navright"}>
        <Link to="/" className="links">
          Products
        </Link>
        <Link to="/cart" className="links">
          <FaShoppingCart /> <sup>{cart.length}</sup>
        </Link>
        <Link to="/orders" className="links">
          Orders<sup>{order.length}</sup>
        </Link>
        <Link onClick={toggleTheme} className="links">
          {isDark ? <CiDark size={20}   /> : <CiLight size={20} />}
        </Link>
      </div>
      
    </div>
  );
};

export default NavBar;
