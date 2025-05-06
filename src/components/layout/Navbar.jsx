import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BrainCircuit,Menu,X } from 'lucide-react';
import {ShowSidebar} from './showside';
import { Hidesidebar } from './showside';



const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <ul className='sidebar'>
          <li>
            <Link to="/" className="logo"><X style={{color : 'black'}} onClick={Hidesidebar}/></Link>
          </li>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/help" className="nav-link">Help</Link>
          </li>
          <li> 
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
          <Link to="/about" className="nav-link">Login</Link>
          </li>
        </ul>


        <ul>
          <li>
          <Link to="/" className="logo">
          
          <span><BrainCircuit  size={24} color={'black'}/>QuizWhiz</span>
        </Link>
          </li>
          <li className = 'onmobile'>
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className = 'onmobile'>
            <Link to="/help" className="nav-link">Help</Link>
          </li>
          <li className = 'onmobile'>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className = 'onmobile'>
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
          <Menu onClick={ShowSidebar} className='menubutton'/>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


