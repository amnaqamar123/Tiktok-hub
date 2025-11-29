import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const TransactionFailed = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { username = "Manahil", selectedPack = "2M", method, date } = location.state || {};


    // Automatically move to details page after few seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/transaction-details", {
                state: { username, selectedPack, method, date }
            });
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate, username, selectedPack,method,date]);

    return (
        <div className="min-h-screen bg-[#1a0028] flex flex-col justify-center items-center text-white">
            <div className="h-16 w-16 border-4 border-[#FE2C55] rounded-full flex items-center justify-center">
                <FaTimes className="text-[#FE2C55] text-3xl" />
            </div>
            <h1 className="text-[#FE2C55] font-bold text-3xl mt-5">
                Transaction Failed
            </h1>

            <button
                onClick={() => navigate("/transaction-details", { state: { username, selectedPack,method,date } })}
                className="mt-6 px-6 py-2 bg-[#FE2C55] text-white font-semibold rounded-full hover:bg-[#ff4f70] transition"
            >
                View Details
            </button>
        </div>
    );
};

export default TransactionFailed;
