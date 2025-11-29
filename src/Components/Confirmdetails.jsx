import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../assets/TIḳTOḳ HÜB/imgi_2_483207-the-mobile-wallpaper.jpg";

const ConfirmDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { username, selectedPack, method, date, transactionId } =
        location.state || {};

    const handleConfirm = () => {
        navigate("/processing", { state: { username, selectedPack,method,date } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#1a0028] to-[#3a003a] flex justify-center items-center text-black">
            <div className="bg-white rounded-2xl shadow-xl p-10 w-[450px] text-center">
                <h1 className="text-3xl font-bold mb-8">Confirm Details</h1>

                <div className="flex flex-col items-center gap-6">
                    <div>
                        <img
                            src={profile}
                            alt={profile}
                            className="w-16 h-16 rounded-full mx-auto mb-2"
                        />
                        <h2 className="text-xl font-semibold">Manahil 🌹</h2>
                        <p className="text-gray-500">{username}</p>
                    </div>

                    <div className="text-left w-full px-6 space-y-3">
                        <p>
                            <span className="font-semibold">Payment Method:</span> {method}
                        </p>
                        <p>
                            <span className="font-semibold">Coins Purchased:</span>{" "}
                            {selectedPack} TİḰTOḰ Coins
                        </p>
                        <p>
                            <span className="font-semibold">Date:</span> {date}
                        </p>
                        <p>
                            <span className="font-semibold">Transaction ID:</span>{" "}
                            {transactionId}
                        </p>
                    </div>

                    <button
                        onClick={handleConfirm}
                        className="mt-6 w-60 py-3 bg-gradient-to-r from-[#FE2C55] to-[#00C3FF] text-white font-semibold rounded-lg hover:opacity-90 cursor-pointer"
                    >
                        CONFIRM NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDetails;

