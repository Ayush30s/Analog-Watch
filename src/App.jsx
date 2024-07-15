import React, { useState, useEffect } from "react";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Update current date every second
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    // Calculate degrees for each clock hand
    const getHourDegrees = () => {
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        return (hours % 12) * 30 + minutes / 2;
    };

    const getMinuteDegrees = () => {
        const minutes = currentDate.getMinutes();
        return minutes * 6;
    };

    const getSecondDegrees = () => {
        const seconds = currentDate.getSeconds();
        return seconds * 6;
    };

    return (
        <div className="container relative m-0 p-0 bg-white w-[100%] h-[100vh] flex justify-center pt-10">
            <div className="flex justify-center items-center w-[300px] h-[300px] rounded-full text-white bg-black border-gray-500 relative border-4">
                {/* Clock face */}
                {[...Array(12)].map((_, index) => (
                    <span key={index} className="absolute inset-1 text-center transform"
                        style={{ transform: `rotate(${30 * (index + 1)}deg)` }}>
                        <b style={{ transform: `rotate(${-30 * (index + 1)}deg)` }} className="inline-block text-black w-6 rounded-full m-1 font-bold bg-white border-gray-500">{index + 1}</b>
                    </span>
                ))}

                <h1 className="rounded-full z-10 absolute p-[5px] bg-white"></h1>

                {/* Hour hand */}
                <div className="hour-hand flex justify-center absolute" style={{ transform: `rotate(${getHourDegrees()}deg)` }}>
                    <i className="absolute bg-gray-500 w-1 h-20 rounded-full"></i>
                </div>

                {/* Minute hand */}
                <div className="minute-hand flex justify-center absolute" style={{ transform: `rotate(${getMinuteDegrees()}deg)` }}>
                    <i className="absolute bg-gray-700 w-1 h-[85px] rounded-full"></i>
                </div>

                {/* Second hand */}
                <div className="second-hand flex justify-center absolute" style={{ transform: `rotate(${getSecondDegrees()}deg)` }}>
                    <i className="absolute bg-red-500 w-1 h-24 rounded-full"></i>
                </div>
            </div>
        </div>
    );
};

export default Clock;
