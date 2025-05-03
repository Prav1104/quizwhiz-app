import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from './menu.svg';
import { BrainCircuit } from 'lucide-react';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <ul className='sidebar'>
          <li>
            <Link to="/" className="logo">QuizWhiz</Link>
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
          <img src={MenuIcon} alt="Menu icon" />
          </li>

        </ul>

        <ul>
          <li>
          <Link to="/" className="logo">
          <BrainCircuit  size={24} color={'black'} gap = {'1rem'}/>
          <span>QuizWhiz</span>
        </Link>
          </li>
          <li>
            <Link to="/home" className="nav-link">Home</Link>
          </li>

          <li>
            <Link to="/help" className="nav-link">Help</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <button to="/" className="nav-link" style={{background : 'bisque'}}>{'Logout'}</button>
          </li>
          <li>
          <img src={MenuIcon} alt="Menu icon" />
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


