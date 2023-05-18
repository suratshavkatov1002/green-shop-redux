import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';

import heroImg1 from '../../../assets/images/1heroimg.png';
import heroImg2 from '../../../assets/images/2heroimg.png';


const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">

                <Carousel>
                    <Carousel.Item interval={500}>
                        <div className="hero__container">
                            <div className="hero__left-site">
                                <p className="hero__left-site-text1">
                                    Welcome to GreenShop
                                </p>

                                <h2>Let’s Make a Better <span>Planet</span> </h2>

                                <p className="hero__left-site-text2">
                                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>

                                <button className="hero__left-site-btn">
                                    SHOP NOW
                                </button>
                            </div>

                            <div className="hero__right-site">
                                <img src={heroImg1} alt="hero-img" />
                                <img className='hero__right-site-img2' src={heroImg2} alt="hero-img2" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <div className="hero__container">
                            <div className="hero__left-site">
                                <p className="hero__left-site-text1">
                                    Welcome to GreenShop
                                </p>

                                <h2>Let’s Make a Better <span>Planet</span> </h2>

                                <p className="hero__left-site-text2">
                                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>

                                <button className="hero__left-site-btn">
                                    SHOP NOW
                                </button>
                            </div>

                            <div className="hero__right-site">
                                <img src={heroImg1} alt="hero-img" />
                                <img className='hero__right-site-img2' src={heroImg2} alt="hero-img2" />
                            </div>
                        </div>
                    </Carousel.Item>
                   
                    <Carousel.Item interval={500} >
                        <div className="hero__container">
                            <div className="hero__left-site">
                                <p className="hero__left-site-text1">
                                    Welcome to GreenShop
                                </p>

                                <h2>Let’s Make a Better <span>Planet</span> </h2>

                                <p className="hero__left-site-text2">
                                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>

                                <button className="hero__left-site-btn">
                                    SHOP NOW
                                </button>
                            </div>

                            <div className="hero__right-site">
                                <img src={heroImg1} alt="hero-img" />
                                <img className='hero__right-site-img2' src={heroImg2} alt="hero-img2" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Hero