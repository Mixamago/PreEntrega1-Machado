import React from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo.webp";

const NavBar = () => {
  return (
    <div className="navbar bg-cyan-900 flex justify-between">
        <div className="flex-auto">
            <img src={logo} alt=""/>
        </div>
        <div className="flex-auto content-center">
            <ul className="menu menu-horizontal p-0">
                <li className="mx-20">
                    <button className="btn rounded-full text-base">
                        <a>Bombillas</a>
                    </button>
                </li>
                <li className="mx-20">
                    <button className="btn rounded-full text-base">
                        <a>Mates</a>
                    </button>
                </li>
                <li className="mx-20">
                    <button className="btn rounded-full text-base">
                        <a>Termos</a>
                    </button>
                </li>
            </ul>
        </div>
        <CartWidget/>
    </div>
  );
};

export default NavBar;
