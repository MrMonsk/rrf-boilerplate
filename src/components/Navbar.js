import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <Link className='logo' to='/'>{props.logo}</Link>
      <div className='navLinks'>
      {(()=> {
        const navLinks = Object.keys(props.links);
        return navLinks.map((link) => {
          return (
            <Link className='navLink' to={props.links[link]} key={link}>{link}</Link>
          )
        });
      })()}
      </div>
    </nav>
  )
}
