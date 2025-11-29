import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import profile from "../assets/TIḳTOḳ HÜB/imgi_2_483207-the-mobile-wallpaper.jpg";

const TransactionDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
     const { username, selectedPack, method, date } =
        location.state || {};
        console.log("Received state:", location.state);

    return (
        <div className="min-h-screen bg-[#1a0028] flex justify-center items-center text-white">
            <div className="h-auto w-[400px] bg-white rounded-2xl text-black relative p-6">
                {/* Red X Icon */}
                <div className="h-12 w-12 border-2 border-[#FE2C55] rounded-full flex items-center justify-center m-auto">
                    <FaTimes className="text-[#FE2C55] text-2xl" />
                </div>

                <h1 className="text-[#FE2C55] font-bold text-2xl text-center mt-4">
                    Transaction Failed
                </h1>

                {/* Profile Info */}
                <div>
                    <img
                        src={profile}
                        alt={profile}
                        className="w-16 h-16 rounded-full mx-auto mb-2"
                    />
                    <h2 className="text-xl font-semibold text-center">Manahil 🌹</h2>
                    <p className="text-gray-500 text-center">@{username}</p>
                </div>

                {/* Transaction Details */}
                <div className="space-y-3 mt-6">
                    <div className="h-[80px] w-[90%] border-dashed border border-gray-400 rounded-lg mx-auto flex flex-col justify-center items-center">
                        <h1 className="font-semibold text-gray-600">Amount</h1>
                        <span className="text-[#FE2C55] font-bold text-lg">{selectedPack}</span>
                    </div>

                    <div className="h-[80px] w-[90%] border-dashed border border-gray-400 rounded-lg mx-auto flex flex-col justify-center items-center">
                        <h1 className="font-semibold text-gray-600">Payment Method</h1>
                        <span className="text-[#FE2C55] font-bold">{method}</span>
                    </div>

                    <div className="h-[80px] w-[90%] border-dashed border border-gray-400 rounded-lg mx-auto flex flex-col justify-center items-center">
                        <h1 className="font-semibold text-gray-600">Date</h1>
                        <span className="text-[#FE2C55] font-bold">{date}</span>
                    </div>

                    <div className="h-[80px] w-[90%] border-dashed border border-gray-400 rounded-lg mx-auto flex flex-col justify-center items-center">
                        <h1 className="font-semibold text-gray-600">Status</h1>
                        <span className="text-[#FE2C55] font-bold">Failed</span>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-sm text-gray-700 mt-4">
                    First time purchasing coins in Darkweb, please <br />
                    purchase a <span className="font-semibold text-[#FE2C55]">Gold Card</span> for your account.
                </p>

                {/* Account Health */}
                <h2 className="border-b-8 border-b-green-600 text-center text-green-700 mt-4 py-1 font-bold">
                    Account Health: 100%
                </h2>

                {/* Home Button */}
                <button
                    onClick={() => navigate("/mainpage")}
                    className="mt-5 w-full bg-gradient-to-r from-[#FE2C55] to-[#00C3FF] text-white py-2 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default TransactionDetails;
