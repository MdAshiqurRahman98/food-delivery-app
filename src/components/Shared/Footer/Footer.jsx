import { FiArrowRight } from "react-icons/fi";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-orange-400 text-white mt-12 px-4 py-10 flex flex-row justify-evenly">
            <div>
                {/* Subscribe */}
                <div className="bg-white rounded-xl flex items-center justify-between px-4 py-2">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="outline-none text-gray-600 w-full text-sm"
                    />
                    <button className="flex items-center gap-1 bg-orange-500 text-white text-sm px-7 py-2 rounded-xl font-semibold">
                        Subscribe <FiArrowRight />
                    </button>
                </div>

                <div className="flex flex-row justify-between gap-32">
                    {/* Logo */}
                    <div>
                        <h2 className="text-3xl font-bold mt-8">
                            pti<span className="text-orange-500">.</span>
                        </h2>

                        <p className="mt-4 text-sm">
                            Copyright © Tripp. All Rights Reserved.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-16">
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
                </div>
            </div>
            <img src="../../../../public/images/Image2.png" alt="Food basket" className="w-52 -mt-10" />
        </div>
    );
};

export default Footer;