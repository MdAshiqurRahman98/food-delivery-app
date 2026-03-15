import { FiArrowRight } from "react-icons/fi";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-orange-400 text-white mt-12 px-4 py-10">

            {/* Subscribe */}
            <div className="bg-white rounded-xl flex items-center justify-between px-4 py-3">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="outline-none text-gray-600 w-full text-sm"
                />
                <button className="flex items-center gap-1 bg-orange-500 text-white text-sm px-7 py-2 rounded-xl font-semibold">
                    Subscribe <FiArrowRight />
                </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-8">
                <div className="bg-orange-200 text-orange-500 p-3 rounded-full">
                    <FaGoogle />
                </div>
                <div className="bg-orange-200 text-orange-500 p-3 rounded-full">
                    <FaTwitter />
                </div>
                <div className="bg-orange-200 text-orange-500 p-3 rounded-full">
                    <FaInstagram />
                </div>
            </div>

            {/* Logo */}
            <h2 className="text-center text-3xl font-bold mt-8">
                pti<span className="text-pink-500">.</span>
            </h2>

            <p className="text-center mt-4 text-sm">
                Copyright © Tripp. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;