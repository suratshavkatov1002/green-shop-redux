
import "./TrendFlower.css"

import arrow from '../../../assets/images/Arrow - Right1.svg'
import img1 from '../../../assets/images/trend-img1.1.png'
import img2 from '../../../assets/images/trend-img1.2.png'

const TrendFlower = () => {
    

  return (
    <section className="trend_flover">
        <div className='container'>
            <div className="trend_flower_inner">
                <div className='trend_flower_box box'>
                    <div className="box_img box_img1">
                        <img src={img1} alt="" className='img' />
                    </div>
                    <div className="box_content">
                        <h3 className="box_title">Summer cactus & succulents</h3>
                        <p className= "box_desc">
                            We are an online plant shop offering a wide range of cheap and trendy plants
                        
                        </p>

                        <button className="btn1">
                            <span>Find More</span>
                            <img src={arrow} alt="Arrow right" />
                        </button>
                    </div>
                </div>

                <div className="trend_flower_box box">
                    <div className="box_img box_img2">
                        <img src={img2} alt="" className="img" />
                    </div>
                    
                    <div className="box_content">
                        <h3 className="box_title">Summer cactus & succulents</h3>
                        <p className="box_desc">
                            We are an online plant shop offering a wide range of cheap and trendy plants
                           
                        </p>

                        <button className=" btn1">
                            <span>Find More</span>
                            
                            <span className="arrow_box">
                                <img  src={arrow} alt="Arrow right" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TrendFlower