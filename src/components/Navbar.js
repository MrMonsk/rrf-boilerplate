import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {
  return (
    <nav>
      <div className='logo'>
        <Link to='/'>{props.logo}</Link>
      </div>
      <div className='navLinks'>
      {(()=> {
        const homeLinks = Object.keys(props.links);
        return homeLinks.map((link) => {
          return (
            <Link to={props.links[link]} key={link}>{link}</Link>
          )
        })
      })()}
      </div>
    </nav>
  )
}
