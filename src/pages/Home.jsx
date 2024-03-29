import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import ProductItem from '../components/ProductItem'

import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <ProductItem />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
