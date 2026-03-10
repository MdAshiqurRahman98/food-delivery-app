const Hero = () => {
    return (
        <div className="px-4 mt-6">
            <div className="bg-orange-500 rounded-3xl text-white p-6 flex flex-col items-center text-center">

                {/* Text */}
                <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
                    Deliver Food To Your Door Step
                </h1>

                <p className="text-sm mt-3 opacity-90">
                    Authentic Food, Quick Service, Fast Delivery
                </p>

                {/* Image */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                    alt="food"
                    className="w-48 mt-6"
                />
            </div>
        </div>
    );
};

export default Hero;