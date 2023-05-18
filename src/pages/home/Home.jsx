import React from 'react'
import TrendFlower from '../../components/layout/trendFlower/TrendFlower'
import Hero from '../../components/ui/hero/Hero'
import Posts from '../../components/ui/posts/Posts'
import Products from '../../components/ui/products/Products'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <TrendFlower/>
      <Posts/>
    </div>
  )
}

export default Home