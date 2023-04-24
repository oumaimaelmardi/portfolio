import logo from "./logo.svg";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import FormationAcad from "./components/FormationAcad";
import Portfolio from "./components/Portfolio";
import Formation from "./components/Formation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";

function responsivebar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="responsivebar">
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default responsivebar;
