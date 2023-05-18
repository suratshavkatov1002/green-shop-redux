import React from 'react'
import './Footer.css'
import img1 from '../../assets/images/footer-img1.png'
import img2 from '../../assets/images/footer-img1.png'
import img3 from '../../assets/images/footer-img1.png'

import logo from "../../assets/images/logo.svg"
import pay from "../../assets/images/footer-pay.svg"
import instagram from "../../assets/images/Instagram.svg"
import facebook from "../../assets/images/Facebook.svg"
import linkiden from "../../assets/images/Linkedin.svg"
import twitter from "../../assets/images/Twitter.svg"
import youtube from "../../assets/images/Union.svg"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className="footer_inner">
                <div className='footer_start'>
                    <ul className='start_list'>
                        <li className='start_item'>
                            <div className='card'>
                                <div className=''>
                                    <img className='img' src={img3} alt="img"/>
                                </div>
                                <div className='card_body'>
                                    <strong className='cart_titlee'>Garden Care</strong>
                                    <p className='card_desc'>
                                        We are an online plant shop offering a wide range of cheap and trendy plants.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className='start_item'>
                            <div className='card'>
                                <div className='card_image'>
                                    <img className='img' src={img2} alt=""  />
                                </div>
                                <div className='card_body'>
                                    <strong className='cart_titlee'>Plant Renovation</strong>
                                    <p className='card_desc'>
                                        We are an online plant shop offering a wide range of cheap and trendy plants.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className='start_item'>
                            <div className='card'>
                                <div className='card_image'>
                                    <img className='img' src={img1} alt=""  />
                                </div>
                                <div className='card_body'>
                                    <strong className='cart_titlee'>Watering Graden</strong>
                                    <p className='card_desc'>
                                        We are an online plant shop offering a wide range of cheap and trendy plants.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className='start_item'>
                            <div className='start_search'>
                                <p className='searc_question'>Would you like to join newsletters?</p>
                                <div className='group'>
                                    <input className='search_input' type="text" placeholder='enter your email address...'/>
                                    <button className='search_btn'>Join</button>
                                </div>
                                <div className='desc'>
                                    We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='footer_middle'>
                    <ul className='middle_list'>
                        <li className='middle_item'>
                           <a  className="logo" href="/">
                            <img src={logo} alt="Logo" />
                           </a>
                        </li>

                        <li className='middle_item'>
                           <span className='middle_item_span'> 70 West Buckingham Ave. Farmingdale, NY 11735</span>
                        </li>

                        <li className='middle_item'>
                            contact@greenshop.com
                        </li>

                        <li className='middle_item'>
                            +88 01911 717 490
                        </li>

                    </ul>
                </div>
                <div className='footer_end'>
                    <ul className='end_list'>
                        <li className='end_item'>
                            <strong className='title'>My Account</strong>
                            
                            <ul className='account_list'>
                                <li className='account_item'>
                                    <a className='link' href="/">My Account</a>
                                </li>

                                <li className='account_item'>
                                    <a className='link' href="/">Our stores</a>
                                </li>

                                <li className='account_item'>
                                    <a className='link' href="/"> Contact us</a>
                                </li>

                                <li className='account_item'>
                                    <a className='link' href="/">Career</a>
                                </li>

                                <li className='account_item'>
                                    <a className='link' href="/"> Specials</a>
                                </li>
                            </ul>
                        </li>

                        <li className='end_item'>
                            <strong className='title'>Help & Guide</strong>

                            <ul className='help_list'>
                                <li className='help_item'>
                                    <a className='link' href="/">Help Center</a>
                                </li>

                                <li className='help_item'>
                                    <a className='link' href="/">How to Buy</a>
                                </li>

                                <li className='help_item'>
                                    <a className='link' href="/">Shipping & Delivery</a>
                                </li>

                                <li className='help_item'>
                                    <a className='link' href="/">Product Policy</a>
                                </li>

                                <li className='help_item'>
                                    <a className='link' href="/">How to Return</a>
                                </li>
                            </ul>
                        </li>

                        <li className='end_item'>
                            <strong className='title'>Categories</strong>

                            <ul className='categories_list'>
                                <li className='categories_item'>
                                    <a className='link' href="/">House Plants</a>
                                </li>

                                <li className='categories_item'>
                                    <a className='link' href="/">Potter Plants</a>
                                </li>

                                <li className='categories_item'>
                                    <a className='link' href="/">Seeds</a>
                                </li>

                                <li className='categories_item'>
                                    <a className='link' href="/">Small Plants</a>
                                </li>

                                <li className='categories_item'>
                                    <a className='link' href="/">Accessories</a>
                                </li>
                            </ul>
                        </li>

                        <li className='end_item'>
                            <strong className='title'>Social Media</strong>

                            <ul className='media_list'>
                                <li className='media_item'>
                                    <a className='media_link' href="/">
                                        <img src={facebook} alt="Facebook" />
                                    </a>
                                </li>

                                <li className='media_item'>
                                    <a className='media_link' href="/">
                                        <img src={instagram} alt="Instagram" />
                                    </a>
                                </li>

                                <li className='media_item'>
                                    <a className='media_link' href="/">
                                        <img src={twitter} alt="Twitter" />
                                    </a>
                                </li>

                                <li className='media_item'>
                                    <a className='media_link' href="/">
                                        <img src={linkiden} alt="Linkiden" />
                                    </a>
                                </li>

                                <li className='media_item'>
                                    <a className='media_link' href="/">
                                        <img src={youtube} alt="Youtube" />
                                    </a>
                                </li>
                            </ul>

                            <strong className='title accep'>We accept</strong>
                            <img src={pay} alt="Payme" />
                        </li>
                    </ul>

                    <p className='about'>
                      © {new Date().getFullYear() }GreenShop. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )

}
export default Footer