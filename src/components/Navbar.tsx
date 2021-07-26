import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

import { MdClose, MdMenu } from 'react-icons/md';
import { useState } from 'react';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
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
            color: white;

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

  .main-items {
        display: flex;
        gap: 2rem;
        color: var(--gray-1);
        font-size: 2rem;
        font-weight: bold;

        li, a {
            font-size: 2rem;
            font-weight: bold;
            color: white;

            .active {
                color: var(--primary);
                font-size: 2rem;
                font-weight: bold;
            }
        }
  }

  .mobile-nav {
      display: none;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
    border-bottom: 1px solid var(--primary);
    
    .logo, .main-items {
        display: none;
    }

    .mobile-nav {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;

        .upper-mobile-nav {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-left: 2rem;
            padding-right: 2rem;

            .mobile-logo {
                position: absolute;
                left: 4rem;

                a {
                    font-size: 2rem;
                    font-weight: bold;
                    color: white;

                    .active {
                        color: var(--primary);
                        font-size: 2rem;
                        font-weight: bold;
                    }
                }

                &:hover {
                    cursor: pointer;
                }
            }

            .hamburger-menu {
                justify-content: flex-end;
                position: absolute;
                right: 2rem;

                svg {
                    fill: burlywood;
                    width: 45px;
                }
            }
        }
        
        .lower-mobile-nav {
            width: 100%;
            height: auto;
            z-index: 1000;
            background-color: var(--primary);
            margin-top: 100px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            display: ${(props: {showMenu: boolean}) => props.showMenu ? 'block' : 'none'};

            ul {
                --top: 2rem;
                display: flex;
                flex-direction: column;

                li {
                    font-size: 2rem;
                    padding: 1.5rem;
                    color: var(--gray-1);
                    width: 100%;
                }
                    
                a {
                    font-size: 2rem;
                    color: var(--gray-1);
                    width: 100%;
                }

                .active {
                    font-size: 2rem;
                    color: var(--gray-1);
                }

            }
        }

        .hide-items {
            transform: translateY(calc(-150% - var(--top)));
            transition: .2s ease-in transform;
        }
    }

  }
`;

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    return <NavbarContainer showMenu={showMobileNav}>
        <div className="logo"><NavLink to="/" >MuviMeta</NavLink></div>
        <ul className="main-items">
            <li>
                <NavLink to="/" exact activeClassName="active">Explore</NavLink>
            </li>
            <li>
                <NavLink to='/my-wish-list' activeClassName="active">Wish-List</NavLink>
            </li>
        </ul>
        <div className="mobile-nav">
                
                <div className="upper-mobile-nav">
                    <div className="mobile-logo"><NavLink to="/" >MuviMeta</NavLink></div>

                    <div 
                        className="hamburger-menu"
                        role="button"
                        onClick={()=> setShowMobileNav(!showMobileNav)}
                    >
                        {
                            !showMobileNav ? <MdMenu /> : <MdClose />
                        }
                    </div>
                </div>
                
                <div className="lower-mobile-nav">
                    <ul>
                        <li>
                            <NavLink 
                                to="/"
                                role="button"
                                onClick={()=> setShowMobileNav(!showMobileNav)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li 
                            className="about-menu"
                            role="button"
                            onClick={()=> setShowMobileNav(!showMobileNav)}
                        >
                            <NavLink to="/wishlist">
                                Wishlist
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
    </NavbarContainer>
}

export default Navbar;