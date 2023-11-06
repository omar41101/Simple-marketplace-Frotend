import React from 'react'
import { ImGithub } from 'react-icons/im'
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaHome,
} from 'react-icons/fa'
import { logo, payment } from '../assests'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'

const Footer = () => {
    return (
        <div className="bg-black text-[#949494] py-20">
            <div className=" max-w-screen-xl mx-auto grid grid-cols-4">
                <div className="flex flex-col gap-7">
                    <img className="w-32" src={logo} alt="logo" />
                    <p></p>
                    <img className="w-56" src={logo} alt="logo" />
                    <p></p>
                    <img className="w-56" src={payment} alt="payment" />
                    <div className="flex gap-5 text-lg text-gray-500">
                        <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Locate us
                    </h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>omar ajimi</p>
                        <p>55005792</p>
                        <p>55005792</p>
                        <p>ajimiomar.oa@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4 font-Roboto">
                        Profile
                    </h2>
                    <div className="flex flex-col gap-2 text-base">
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <BsPersonFill />
                            </span>
                            my account
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <BsPaypal />
                            </span>
                            checkout
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <FaHome />
                            </span>
                            order tracking
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <MdLocationOn />
                            </span>
                            help & support
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <input
                        className="bg-transparent border px-5 py-2 text-sm"
                        placeholder="e-mail"
                        type="text"
                    />
                    <button
                        className="text-sm border text-white border-t-0
                    hover:bg-gray-500 active:bg-white active:text-black font-Roboto"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Footer
