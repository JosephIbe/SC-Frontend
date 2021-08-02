import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

import { MdClose, MdMenu } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {

  const [showMobileNav, setShowMobileNav] = useState(false);

   const NavContainer = styled.nav`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--primary);
    padding: 0 8rem;
    color: var(--gray-1);
    background-color: var(--dark-bg);
    font-size: 2.5rem;
    font-weight: bold;

    .logo {

        a {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--primary);

            .active {
                color: var(--primary);
                font-size: 2.5rem;
                font-weight: bold;
            }
        }

        &:hover {
            cursor: pointer;
        }

    }
    
    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
    
        li {
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
    
            &:hover {
                background-color: var(--deep-dark);
                color: var(--primary);
            }
    
        }
    
        a {
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1);
            outline: none;
        }
    
        .active {
            color: var(--primary);
        }
    
    }
    
    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
    
        * {
            pointer-events: none;
        }
    
    }
    
    .navItems .closeNavIcon {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        padding: 0;

        .logo {
            padding-left: 2rem;
        }
        
        .hide-item {
            transform: translateY(calc(-100% - var(--top)));
        }
        
        .mobile-menu-icon {
            display: block;
        }

        .navItems {
            --top: 1rem;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 200px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
        
            .closeNavIcon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
            
                * {
                   pointer-events: none;
                }
            
            }
        
            li {
                display: block;
                margin-bottom: 1rem;
            }
        
        }
    
    }
    
  `;

    return <NavContainer>

      <div className="logo"><NavLink to="/" >MuviMeta</NavLink></div>  

      <div
        className="mobile-menu-icon"
        onClick={() => setShowMobileNav(!showMobileNav)}
        role="button"
        onKeyDown={() => setShowMobileNav(!showMobileNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showMobileNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowMobileNav(!showMobileNav)}
          role="button"
          onKeyDown={() => setShowMobileNav(!showMobileNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowMobileNav(!showMobileNav)}
            role="button"
            onKeyDown={() => setShowMobileNav(!showMobileNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-wishlist"
            onClick={() => setShowMobileNav(!showMobileNav)}
            role="button"
            onKeyDown={() => setShowMobileNav(!showMobileNav)}
            tabIndex={0}
          >
            My Wishlist
          </NavLink>
        </li>
      </ul>
    </NavContainer>
}

export default Navbar;