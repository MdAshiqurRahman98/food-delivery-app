

const Banner = () => {
    return (
        <div className="px-4 mt-6">
            <div className="bg-orange-500 rounded-3xl text-white p-6 flex flex-row justify-between items-center text-center px-24">

                {/* Text */}
                <div className="flex flex-col">
                    <h1 className="text-4xl sm:text-3xl font-bold leading-snug text-start">
                        Deliver Food To Your <br /> Door Step
                    </h1>

                    <p className="text-lg mt-3 opacity-90 text-start">
                        Authentic Food, Quick Service, Fast Delivery
                    </p>
                </div>

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

export default Banner;