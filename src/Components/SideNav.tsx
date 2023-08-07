import { Icon } from '@iconify/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='side-nav-wrapper'>
      <div className="logo">
        <img src='./assets/images/logo-white.png' alt='pathway finance'/>
      </div>
      <div className="side-nav-links">
        <NavLink
            to="/vaults"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <div className="icon">
                <Icon icon="bxs:bank" />
            </div>
            <div className="link-text">
                Vaults
            </div>
        </NavLink>
        <NavLink
            to="/summary"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <div className="icon">
                <Icon icon="bxs:detail" />
            </div>
            <div className="link-text">
                Summary
            </div>
        </NavLink>
      </div>
    </div>
  )
}

export default SideNav
