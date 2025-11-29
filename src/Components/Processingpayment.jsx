import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import coin from "../assets/TIḳTOḳ HÜB/imgi_3_coin.png";
import profile from "../assets/TIḳTOḳ HÜB/imgi_2_483207-the-mobile-wallpaper.jpg";

const ProcessingPayment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { username, selectedPack, method, date } = location.state || {};
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) return prev + 2;
                clearInterval(interval);
                setTimeout(() => {
                    // inside setTimeout:
                    navigate("/transaction-failed", {
                        state: { username, selectedPack, method, date }
                    });

                }, 500);
                return 100;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [navigate, username, selectedPack,method,date]);

    return (
        <div className="min-h-screen bg-[#1a0028] flex justify-center items-center text-white relative">
            <div className="flex items-center justify-between w-[1000px] max-w-[95%] bg-gradient-to-br from-[#2a003a] to-[#3a004a] rounded-2xl shadow-lg p-10 relative">
                {/* Left - Coin info */}
                <div className="flex flex-col items-center bg-[#2b1b3d] p-10 rounded-2xl w-[280px]">
                    <img src={coin} alt="coin" className="w-20 h-20 mb-6" />
                    <h2 className="text-3xl font-bold text-[#FE2C55]">{selectedPack}</h2>
                    <p className="text-gray-300 text-lg">TİḰTOḰ Coins</p>
                </div>

                {/* Center - Progress */}
                <div className="flex flex-col items-center justify-center flex-1 mx-10">
                    <div className="relative w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-8">
                        <div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FE2C55] to-[#00C3FF] transition-all duration-200"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="flex gap-3 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <img
                                key={i}
                                src={coin}
                                alt="coin"
                                className="w-8 h-8 animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                    <p className="text-xl font-semibold text-gray-200">
                        Processing Payment...
                    </p>
                </div>

                {/* Right - Profile */}
                <div className="flex flex-col items-center bg-[#2b1b3d] p-10 rounded-2xl w-[280px]">
                    <div className="relative">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-20 h-20 rounded-full border-4 border-[#FE2C55] mb-4"
                        />
                        <div className="absolute -top-3 -right-3 bg-[#FE2C55] text-white text-sm px-3 py-1 rounded-full">
                            Profile
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold">Manahil 🌹</h2>
                    <p className="text-[#FE2C55]">@{username}</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessingPayment;

