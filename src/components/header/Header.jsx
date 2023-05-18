import React from 'react'
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import HeaderLogo from '../../assets/images/headerlogo.png'
import searchImg from '../../assets/images/search.png'
import cartImg from '../../assets/images/cart.png'
import logoutImg from '../../assets/images/Logout.png'

import { useSelector } from 'react-redux'

const nav_link = [
    {
        path: '/',
        display: 'Home'
    },

    {
        path: '/shop',
        display: 'Shop'
    },

    {
        path: '/plantcare',
        display: 'Plant Care'
    },

    {
        path: '/blogs',
        display: 'Blogs'
    },
]

const Header = () => {
     
    const nav = useNavigate()

    const { order } = useSelector(state => state)

    const clickBtn = () => {
        nav('#')
    }

    return (
        <div className='header'>
            <div className="container">
                <div className="header__container">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={HeaderLogo} alt="headerlogo" />
                        </Link>
                    </div>

                    <div className="header__menu" >
                        <ul className='header__menu-list'>
                            {
                                nav_link.map((item, index) => (
                                    <li className='header__menu-item' key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={
                                                (navClass) => navClass.isActive ? "nav__active" : ""
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="header__icons">
                        <img src={searchImg} alt="searchimg" />

                        <div className='header__icons-cart' onClick={clickBtn}>
                        
                                <img src={cartImg} alt="cart-img" />
                                <span className='header__card-number'>{order.length}</span>

                                
                        </div>

                        <button className='header__button'>
                            <img src={logoutImg} alt="btn-img" />
                            <div>
                                Login
                            </div>
                        </button>
                    </div>
                </div>
                <span className='header__line'></span>
            </div>
        </div>
    )
}

export default Header