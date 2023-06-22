import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOUt } = useContext(AuthContext);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrolly > 200);
      //console.log
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <nav className={`${sticky ? "sticky" : ""}`}>
        <h1 className="logo">NJ</h1>
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
          {user?.uid ? (
            <Link onClick={logOUt}>LogOut</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sing Up</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
