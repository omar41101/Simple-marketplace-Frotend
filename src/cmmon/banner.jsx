import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        'https://img.freepik.com/free-photo/abstract-plastic-bag-concept-with-copy-space_23-2148549041.jpg?t=st=1698582466~exp=1698583066~hmac=6c7fd5b5779c2032ca31115ba343800376b970a5d26a5b18674110219a6c71a9',
        'https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=826&t=st=1698582674~exp=1698583274~hmac=57ccba8dd6c03660d697441fb56b86ba2027f5d815bd6349bc1cb5c1967d5ba2',
        'https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?w=996&t=st=1698582475~exp=1698583075~hmac=f79dad65c4d791428cb9ba9a93976b43e4972396ae6cea3d44151961bb06f772',
    ]
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : prev => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : prev => prev + 1)
    }
    console.log(currentSlide)
    return (
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[650px] relative">
                <div
                    style={{
                        transform: `translateX(-${currentSlide * 100}vw)`,
                    }}
                    className="w-[400vw] h-full flex transition-transform duration-1000"
                >
                    <img
                        className="w-screen h-full object-cover"
                        src={data[0]}
                        alt="img "
                        loading="priority"
                    />
                    <img
                        className="w-screen h-full object-cover"
                        src={data[2]}
                        alt="imgOne"
                    />
                    <img
                        className="w-screen h-full object-cover"
                        src={data[3]}
                        alt="imgtwo"
                    />
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                    <div
                        onClick={prevSlide}
                        className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                    active:bg-gray-900 duration-300"
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                    active:bg-gray-900 duration-300"
                    >
                        <AiOutlineArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner
