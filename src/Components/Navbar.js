import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  return (
    <div id="navbar">
      <Link to="/about" style={{color: (location === "/") ? "white" : "black"}}>About</Link>
    </div>
  )
}
