import React from "react";
import "./app.css";
import { MdHome, MdContactPage, MdHeadphones } from "react-icons/md";
import { BsMusicPlayer } from "react-icons/bs";

function Navbar({darkMode, showNav}) {
  return (
    <>
    {showNav && (
    <div className={darkMode ? 'nav--light' : 'nav'}>
      <div className="nav--title">Euphoria</div>
      <div className="nav--position">
        <div className="nav--links">
          <ul>
            <li>
             <MdHome size={18} color='white' /> <a href="e">Home</a>
            </li>
            <li>
             <BsMusicPlayer size={18}  color='white'/> <a href="e">Top Artist</a>
            </li>
            <li>
              <MdHeadphones size={18} color='white'/><a href="e">World Charts</a>
            </li>
            <li>
              <MdContactPage size={18} color='white'/><a href="e">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social--link"></div>
    </div>
    )
    }
    </>
  );
}

export default Navbar;
