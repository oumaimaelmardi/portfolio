import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { useLocation } from "react-router-dom";
import "./styles.css";
import { MegaMenu } from "primereact/megamenu";
function Navbar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // new state variable

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        setActiveIndex(0);
        window.location.href = "/";
      },
    },
    {
      label: "Portfolio",
      icon: "pi pi-fw pi-pencil",
      command: () => {
        setActiveIndex(1);
        window.location.href = "/portfolio";
      },
    },
    {
      label: "Parcours/Experience",
      icon: "pi pi-fw pi-file",
      command: () => {
        setActiveIndex(2);
        window.location.href = "/parcours";
      },
    },
    {
      label: "Formation",
      icon: "pi pi-fw pi-cog",
      command: () => {
        setActiveIndex(3);
        window.location.href = "/formation";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-phone",
      command: () => {
        setActiveIndex(4);
        window.location.href = "/contact";
      },
    },
  ];

  return (
    /* <div className="card navbar">
      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="pi pi-desktop icon text-center"></i>
      </button>
      <div className={`menu-items ${menuOpen ? "open" : ""}`}>
        <Meg model={items} activeIndex={activeIndex} />
      </div>
    </div>*/
    <div className="card navbar">
      <MegaMenu model={items} breakpoint="960px" />
    </div>
  );
}

export default Navbar;
