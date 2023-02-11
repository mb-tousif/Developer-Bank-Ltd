import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

export default function SideNavbar() {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className={toggle ? "sidebar" : "sidebar open"}>
      <div className="logo-details">
        <i class='bx bxs-wallet icon'></i>
        <div className="logo_name mx-auto">DBL</div>
        <i className={toggle ? "bx bx-menu" : "bx-menu-alt-right"} id="btn" onClick={()=>handleToggle()}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to={"/dashboard"}>
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <a href="#!">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
    </div>
  );
}
