import React from 'react';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
const Banner = ({inProgressCount}) => {
    return (
        <div className=" bg-base-200 py-12 md:px-3">
            <div className='max-w-7xl mx-auto'>
                <div className="hero-content flex-col md:flex-row lg:px-0">
                    <div
                        className="relative text-center p-10 rounded-2xl text-white w-full space-y-4 overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                        {/* Left Vector */}
                        <img
                            src={vector1}
                            alt="vector"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-52 opacity-90"
                        />

                        {/* Right Mirrored Vector */}
                        <img
                            src={vector1}
                            alt="vector mirrored"
                            className="absolute right-0 top-1/2 -translate-y-1/2 scale-x-[-1] w-52 opacity-90"
                        />

                        {/* Content */}
                        <p>In Progress</p>
                        <h2 className="font-bold text-5xl">{inProgressCount.length}</h2>
                    </div>
                    <div
                        className="relative text-center p-10 rounded-2xl text-white w-full space-y-4 overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]">
                        {/* Left Vector */}
                        <img
                            src={vector1}
                            alt="vector"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-52 opacity-90"
                        />

                        {/* Right Mirrored Vector */}
                        <img
                            src={vector1}
                            alt="vector mirrored"
                            className="absolute right-0 top-1/2 -translate-y-1/2 scale-x-[-1] w-52 opacity-90"
                        />

                        {/* Content */}
                        <p>Resolved</p>
                        <h2 className="font-bold text-5xl">0</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;