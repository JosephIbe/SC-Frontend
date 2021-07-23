import styled from 'styled-components';

import {NavLink} from 'react-router-dom';

import {GoSearch} from 'react-icons/go';
import {IoIosPerson} from 'react-icons/io';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary);
  padding: 0 8rem;
  color: var(--gray-1);
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
        gap: 2.5rem;
        color: var(--gray-1);
        font-size: 2.5rem;
        font-weight: bold;

        li, a {
            font-size: 2.5rem;
            font-weight: bold;
            color: white;

            .active {
                color: var(--primary);
                font-size: 2.5rem;
                font-weight: bold;
            }
        }
  }

  .end-items {

    display: flex;
    gap: 1rem;

    .search, .account {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #767779;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 17px;
            height: 17px;
        }

        &:hover {
            cursor: pointer;
        }
    }
  }
`;

const Navbar = () => {
    return <NavbarContainer>
        <div className="logo"><NavLink to="/" >Logo</NavLink></div>
        <ul className="main-items">
            <li>
                <NavLink to="/" exact activeClassName="active">Explore</NavLink>
            </li>
            <li>
                <NavLink to='/my-wish-list' activeClassName="active">Wish-List</NavLink>
            </li>
            <li>
                <NavLink to='/contact' activeClassName="active">Contact Us</NavLink>
            </li>
        </ul>
        <div className="end-items">
            <div className="search">
                <GoSearch />
            </div>
            <div className="account">
                <IoIosPerson />
            </div>
        </div>
    </NavbarContainer>
}

export default Navbar;