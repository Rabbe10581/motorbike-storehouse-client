import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen my-6" style={{ backgroundImage: `url("https://compare.pricesofindia.com/src/wallpapers/yamaha/yamaha-yzf-r15-v4/Yamaha-YZF-R15-V4-HD-Wallpapers-PricesOfIndia-1.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to the Bike's Paradise</h1>
                    <p className="mb-5">Are you searching for a used motorebike? We have a large collection of motorbikes with resonable price. Choose your dream bike and ride it safe.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;