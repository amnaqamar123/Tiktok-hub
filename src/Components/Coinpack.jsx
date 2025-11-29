import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Dashboard - TIḳTOḳ HÜB/imgi_1_coin.png";

export default function CoinPacks() {
    const navigate = useNavigate();
    const [coinPacks, setCoinPacks] = useState([
        "100k", "200k", "300k", "400k", "500k", "1M", "2M",
        "350k", "120k", "260k", "30k", "80k", "450k", "6M",
        "7M", "30k", "190k", "268k", "35k", "82k", "550k",
        "7M", "30k", "190k", "268k", "35k", "82k", "550k",
        "7M", "30k", "190k", "268k", "35k", "82k", "550k",
        "7M", "30k", "19k", "260k", "30k", "8k", "55k",
        "9k", "0k", "10M", "28k", "5k", "2k", "50k",
        "3k", "30k", "10k", "68M", "35k", "82k", "550k",
        "2k", "30k", "170k", "288M", "35k", "2k", "550k",
        "6k", "30k", "10k", "28k", "35k", "82k", "550k",
        "8M", "30k", "190M", "68k", "35k", "8k", "550k",
        "12k"
    ]);

    const [newAmount, setNewAmount] = useState("");
    const [type, setType] = useState("Normal");

    const addCoinPack = () => {
        if (newAmount.trim() === "") return;
        setCoinPacks([...coinPacks, `${newAmount}${type === "Premium" ? " (Premium)" : ""}`]);
        setNewAmount("");
    };

    const deleteCoinPack = (amount) => {
        setCoinPacks(coinPacks.filter((item) => item !== amount));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0c0f1d] via-[#181a2b] to-[#0c0f1d] flex items-center justify-center text-white font-poppins p-6">
            <div className="w-[95%] max-w-[1200px] bg-[#2a2a40]/90 rounded-2xl shadow-2xl border border-white/10 p-8 overflow-hidden">

                {/* 🔙 Back Button */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="inline-block mb-6 px-6 py-2 font-semibold text-lg rounded-full text-white 
          bg-gradient-to-r from-pink-500 to-rose-500 border border-white/30 
          shadow-[0_0_20px_rgba(255,82,119,0.5)] hover:scale-105 transition duration-300 cursor-pointer"
                >
                    &lt; Back
                </button>

                {/* 🪙 Input Section */}
                <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Enter Coin Amount"
                        value={newAmount}
                        onChange={(e) => setNewAmount(e.target.value)}
                        className="bg-transparent border-2 border-white/40 rounded-lg px-6 py-3 text-white 
            placeholder:text-white/60 focus:outline-none min-w-[200px]"
                    />

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="bg-transparent border-2 border-white/40 rounded-lg px-4 py-3 text-white 
            focus:outline-none min-w-[140px]"
                    >
                        <option className="text-black">Normal</option>
                        <option className="text-black">Premium</option>
                    </select>

                    <button
                        onClick={addCoinPack}
                        className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-3 
            rounded-lg shadow-lg hover:shadow-pink-500/50 transition duration-300"
                    >
                        ADD NOW
                    </button>
                </div>

                {/* Divider */}
                <div className="w-full h-[2px] bg-pink-500 mb-6"></div>

                
                <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-5 max-h-[480px] overflow-y-auto pr-2">
                    {coinPacks.map((amount, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-br from-yellow-700 to-yellow-500 text-center 
              text-white font-bold text-lg rounded-xl p-5 shadow-lg hover:-translate-y-1 
              hover:shadow-yellow-400/50 transition"
                        >
                            {/* 🪙 Coin Image */}
                            <div className="flex justify-center mb-2">
                                <img className="h-10 w-10 object-contain" src={logo} alt="coin" />
                            </div>

                            <div>{amount}</div>

                            <button
                                onClick={() => deleteCoinPack(amount)}
                                className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 bg-pink-600 
                hover:bg-pink-500 text-white rounded-full w-7 h-7 flex items-center justify-center 
                shadow-lg transition"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

