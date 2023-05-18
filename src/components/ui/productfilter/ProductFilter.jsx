import React, { useEffect, useState } from 'react'
import './PoductFilter.css'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProduct } from '../../../redux/reduser/Reduser'
import Category from '../category/Category'

const ProductFilter = ({ post, setPost }) => {
    const [size, setSize] = useState([])

    const { products, } = useSelector(state => state)
    const dispatch = useDispatch()

    const newFilterProduct = products.filter(product => (product.category.includes(post.activeCategory) && product.price.slice(1) >= 10 && product.price.slice(1) <= post.price * 1))

    useEffect(() => {
        const newSize = [...new Set(products.map(el => el.size))]
        setSize(newSize)

        dispatch(filteredProduct(newFilterProduct))
    }, [])

    const changeFilter = () => {
        dispatch(filteredProduct(newFilterProduct))
    }
    return (
        <div className='filter__box'>
            <div className='filter__box-category'>
                <Category post={post} setPost={setPost} />
            </div>

            <div className="filter__box-range">
                <h3 className='range__name'>Price Range</h3>

                <div className='range__filter-content'>
                    <label htmlFor="range">
                        <input
                            className='input__range'
                            type="range"
                            id='range'
                            min={10}
                            max={1000}
                            value={post.price}
                            step={5}
                            onChange={(e) => setPost({ ...post, price: e.target.value })}
                        />
                    </label>


                    <strong className='price__count'>Price:
                        <span className='price_count-number'>$10 - ${post.price * 1}</span>
                    </strong>

                    <button className='price__btn' onClick={changeFilter}>
                        Filter
                    </button>
                </div>
            </div>

            <div className="filter__box-size">
                <h3 className='size__name'>
                    Size
                </h3>

                <ul className='size__list'>
                    {
                        size.map((item, i) => (
                            <li className='size__list-item'key={i}>
                                <span>{item}</span>
                                <span>{`(${products.filter(product => product.size === item).length})`}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductFilter