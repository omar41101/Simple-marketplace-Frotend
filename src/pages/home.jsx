import React, { useEffect, useState } from 'react'
import Banner from '../cmmon/banner'
import Product from '../components/product'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
    const [products, setProducts] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        setProducts(data.data)
    }, [data])
    return (
        <div>
            <Banner />
            <Product products={products} />
        </div>
    )
}
export default Home
