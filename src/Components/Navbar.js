import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  return (
    <div id="navbar">
      {/* {location.pathname === "/" ? <Link to="/about" >About</Link> : ""} */}
    </div>
  )
}
