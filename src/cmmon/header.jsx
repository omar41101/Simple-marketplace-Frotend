import React, { useState } from 'react'
import { logo, cart, pdp } from '../assests'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const productData = useSelector(state => state.market.productData)

    console.log(productData)
    return (
        <div className="w-full h-20  bg-white border-b-[1px] border-b-gray-500 sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>
                        <img className="w-28 " src={logo} alt="logo" />
                    </div>
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 ">
                        <li
                            className="text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                        duration-300"
                        >
                            Home
                        </li>
                        <li
                            className="text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                        duration-300"
                        >
                            Pages
                        </li>
                        <li
                            className="text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                        duration-300"
                        >
                            Shop
                        </li>
                        <li
                            className="text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                        duration-300"
                        >
                            Element
                        </li>
                        <li
                            className="text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                        duration-300"
                        >
                            Contact
                        </li>
                    </ul>

                    <div className="relative">
                        <Link to="/cart">
                            <img
                                className="w-10 cursor-pointer"
                                src={cart}
                                alt="cart"
                            />
                            <span className="absolute top-3 left-4">
                                {productData.length}
                            </span>
                        </Link>
                    </div>
                    <Link to="/login">
                    <img
                        className=" w-12 h-15 rounded-full cursor-pointer  "
                        src={pdp}
                        alt="userLogo"
                    />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header
