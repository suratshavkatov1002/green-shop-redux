import React, { useState } from 'react'
import './Posts.css'
import postImg1 from '../../../assets/images/post-img1.png'
import postImg2 from "../../../assets/images/post-img2.png"
import postImg3 from '../../../assets/images/post-img3.png'
import postImg4 from "../../../assets/images/post-img4.png"
import arrow from "../../../assets/images/Arrow - Right.svg"


const Posts = () => {
    const [posts,setPosts] = useState([
        {
            id: 1,
            img: postImg1,
            time: "September 12  I Read in 6 minutes",
            title:"Cactus & Succulent Care Tips",
            desc:"Cacti are succulents are easy care plants for any home or patio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        },
        {
            id: 2,
            img: postImg2,
            time: "September 13  I Read in 2 minutes",
            title:"Top 10 Succulents forYour Home",
            desc:"Best in hanging baskets. Prefers medium to high light.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        },
        {
            id: 3,
            img: postImg3,
            time: "September 15  I Read in 3 minutes",
            title:"Cacti & Succulent Care Tips",
            desc:"Cacti and succulents thrive in containers and because most are.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        },
        {
            id: 4,
            img: postImg4,
            time: "September 15  I Read in 2 minutes",
            title:"Best Houseplants Room by Room",
            desc:"The benefits of houseplants are endless. In addition to. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        }
    ])

  return (
    <section className="posts">
        <div className='container'>
            <div className="posts_inner">
                <h3 className="posts_title">Our Blog Posts</h3>
                <p className="posts_desc">
                    We are an online plant shop offering a wide range of cheap and trendy plants. 
                </p>

                <ul className="posts_list">
                    {
                        posts.map(el => (
                            <li className="posts_item "key={el.id}>
                                <div className="card">
                                    <div className="card_img">
                                        <img className="img" src={el.img} alt={el.title}  />
                                    </div>
                                    <div className="card_body">
                                        <p className="cart_time">{el.time}</p>
                                        <h4 className="card_title">{el.title}</h4>
                                        <p className="card_desc">
                                            {el.readMore ? el.desc : el.desc.slice(0,78) + "..." }
                                        </p>
                                        {
                                        el.readMore 
                                        ?
                                        null
                                        :(
                                            <button className='card_btn' >
                                            <span>Read More</span>
                                            <img src={arrow} alt="Arrow icon" />
                                        </button>
                                        )
                                        }
                                        
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Posts