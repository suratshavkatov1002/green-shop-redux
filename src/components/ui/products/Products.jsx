import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Products.css'

import img from '../../../assets/images/banner2.png';
import { filteredProduct } from '../../../redux/reduser/Reduser';
import ProductList from '../product-list/ProductList';
import ProductFilter from '../productfilter/ProductFilter';



const Products = () => {

    const [post, setPost] = useState({ activeCategory: "House Plants", price: "500" })
    const [activee, setActive] = useState("all")
    const sortHeader = [
        { title: "All Plants", label: "all" },
        { title: "New Arrivals", label: "new" },
        { title: "Sale", label: "sale" },
    ]

    const { products } = useSelector(state => state)
    const dispatch = useDispatch()

    let newProductsFilter = products.filter(product => (product.category.includes(post.activeCategory) && product.price.slice(1) >= 10 && product.price.slice(1) <= post.price * 1))

    const sortProduct = (value) => {
        setActive(value)
        let newFilterProduct = []

        if (value === "all") {
            newFilterProduct = newProductsFilter
        } else {
            if (value === "new") {
                newFilterProduct = newProductsFilter.filter(product => product.newArrival)
            } else {
                newFilterProduct = newProductsFilter.filter(el => el.sale)
            }
        }

        dispatch(filteredProduct(newFilterProduct))
    }

    return (
        <section className='products'>
            <div className="container">
                <div className="products_inner">
                    <div className="products_start">
                        <ProductFilter post={post} setPost={setPost} />
                        <img src={img} alt="" />
                    </div>

                    <div className="products_end ">
                        <div className="header_list">
                           
                                {
                                    sortHeader.map((el, i) => (
                                        <li
                                            key={i}
                                            className={`header_item ${el.label === activee ? activee : ""}`}
                                            onClick={() => sortProduct(el.label)}
                                        >
                                            {el.title}
                                        </li>
                                    ))
                                }
                            

                            <div className="header_item">
                                <span>Short by:</span>

                                <select
                                    className="select"
                                    name="" id=""
                                >
                                    <option hidden>Default sorting</option>
                                    <option value="big">Big</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                        </div>

                        <ProductList/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products