import React, { useState } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/TIḳTOḳ HÜB/imgi_1_3046125.png";
import profile from "../assets/TIḳTOḳ HÜB/imgi_2_483207-the-mobile-wallpaper.jpg";
import coin from "../assets/TIḳTOḳ HÜB/imgi_3_coin.png";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("vip_oprince");
    const [error, setError] = useState("");
    const [showProfile, setShowProfile] = useState(true);
    const [selectedPack, setSelectedPack] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (inputValue.trim() === "") {
            setError("Tiktok user-data fetcher Expired!");
            setShowProfile(false);
        } else {
            setError("");
            setUsername(inputValue);
            setShowProfile(true);
            setInputValue("");
        }
    };

    const handlePurchase = (amount) => {
        setSelectedPack(amount);
        setTimeout(() => {
            navigate("/cart", {
                state: {
                    username,
                    selectedPack: amount,
                    method: "Credit Card",
                    date: new Date().toLocaleString(),
                },
            });
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0028] to-[#3a003a] text-white">
            {/* ✅ Navbar */}
            <nav className="flex justify-between items-center px-5 md:px-10 py-6 border-b border-gray-700 relative">
                {/* Left Logo */}
                <div className="flex items-center space-x-3">
                    <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
                    <h1 className="text-2xl font-bold tracking-wide">
                        <span className="text-pink-400">TİḰTOḰ</span>{" "}
                        <span className="text-sky-400">HÜB</span>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-lg">
                    <li className="relative cursor-pointer">
                        TİḰTOḰ Coins
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FE2C55]"></span>
                    </li>
                    <li className="cursor-pointer relative group">
                        Analytics
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FE2C55] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="cursor-pointer relative group">
                        Trending
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FE2C55] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="cursor-pointer relative group">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FE2C55] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>

                {/* Moon + Mobile Menu Icon */}
                <div className="flex items-center gap-4">
                    <FaMoon className="text-3xl cursor-pointer p-2 rounded-full hover:bg-sky-400/30 transition-all" />

                    {/* Hamburger icon for mobile */}
                    <button
                        className="md:hidden text-3xl focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* ✅ Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#2a1530] border-t border-gray-700 md:hidden animate-slideDown">
                        <ul className="flex flex-col items-center py-4 space-y-4 font-semibold">
                            <li
                                className="cursor-pointer hover:text-[#FE2C55]"
                                onClick={() => setMenuOpen(false)}
                            >
                                TİḰTOḰ Coins
                            </li>
                            <li
                                className="cursor-pointer hover:text-[#FE2C55]"
                                onClick={() => setMenuOpen(false)}
                            >
                                Analytics
                            </li>
                            <li
                                className="cursor-pointer hover:text-[#FE2C55]"
                                onClick={() => setMenuOpen(false)}
                            >
                                Trending
                            </li>
                            <li
                                className="cursor-pointer hover:text-[#FE2C55]"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* ✅ Main Content */}
            <div className="flex flex-col items-center mt-10 md:mt-20 px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent text-center">
                    TİḰTOḰ Coins
                </h2>
                <p className="text-gray-400 mb-10 text-lg md:text-xl text-center">
                    Get Coins With Verified Your TİḰTOḰ account
                </p>

                {/* Search Box */}
                <div className="flex items-center bg-[#2a1530] px-3 md:px-4 py-2 md:py-3 rounded-full w-full max-w-[800px] mb-6 border border-gray-700 focus-within:ring-1 focus-within:ring-[#FE2C55]">
                    <span className="text-[#FE2C55] text-lg md:text-xl font-bold mr-2">@</span>
                    <input
                        type="text"
                        placeholder="Enter TİḰTOḰ username"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500 text-sm md:text-base"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-[#FE2C55] text-white font-semibold px-4 md:px-7 py-2 md:py-3 text-sm rounded-full ml-2 md:ml-4 shadow-md hover:scale-105 transition-transform"
                    >
                        Create Profile
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-lg font-semibold mb-10 animate-pulse">
                        {error}
                    </p>
                )}

                {/* Profile Card */}
                {showProfile && (
                    <div className="bg-[#2a1530] w-full max-w-[1000px] rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700 mt-4
//   transition-transform duration-300 hover:-translate-y-2 
//   hover:shadow-[inset_0_0_25px_rgba(254,44,85,0.4)]">
                        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5 mb-8 pb-7 border-b border-b-gray-700 text-center md:text-left">
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-24 h-24 object-cover rounded-full border-4 border-[#FE2C55] mb-4 md:mb-0"
                            />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold">Vip Prince</h3>
                                <p className="text-[#FE2C55]">@{username}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 md:justify-around">
                            {[
                                { label: "Following", value: "200" },
                                { label: "Followers", value: "20k" },
                                { label: "Likes", value: "10M" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="px-8 md:px-28 py-4 border border-gray-700 rounded-lg bg-[#33253A] hover:border-[#FE2C55] hover:-translate-y-2 transition-transform"
                                >
                                    <p className="text-pink-300 text-xl md:text-2xl font-bold">
                                        {item.value}
                                    </p>
                                    <p className="text-gray-400">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Coins Packages */}
                <div className="mt-20 text-center">
                    {/* Title */}
                    <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent">
                        Select Coins Package
                    </h2>

                    {/* Cards Container */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 justify-center max-w-5xl mx-auto">
                        {[
                            "100k", "200k", "300k", "400k", "500k", "1M", "2M", "350k", "120k", "260k",
                            "30k", "80k", "450k", "220k", "50k", "160k", "20k", "850k", "240k", "720k",
                            "4M", "10M", "60k", "130k", "420k", "600k", "180k", "780k", "460k", "40k",
                            "105k", "25k", "150k", "8k", "5k", "20k", "120k", "560k", "140k", "17k",
                            "760k",
                        ].map((amount, i) => (
                            <div
                                key={i}
                                className="relative group bg-[#2a1530] w-[300px] mx-auto rounded-2xl p-8 border border-gray-700 overflow-hidden"
                            >
                                {/* Optional PREMIUM LABEL (every 5th package just for example) */}
                                {i % 5 === 0 && (
                                    <div className="absolute top-6 right-[-45px] bg-[#FE2C55] text-white text-xs font-semibold px-12 z-10 py-1 rotate-45 shadow-lg">
                                        PREMIUM PACK
                                    </div>
                                )}
                                {/* Coins Animation */}
                                <div className="relative w-28 h-20 mx-auto mb-6">
                                    <img
                                        src={coin}
                                        alt="coin"
                                        className="w-16 absolute left-0 top-2 transition-all duration-500 group-hover:left-4"
                                    />
                                    <img
                                        src={coin}
                                        alt="coin"
                                        className="w-16 absolute left-4 top-2 transition-all duration-500 group-hover:left-4"
                                    />
                                    <img
                                        src={coin}
                                        alt="coin"
                                        className="w-16 absolute left-8 top-2 transition-all duration-500 group-hover:left-4"
                                    />
                                </div>

                                {/* Text */}
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent">
                                    {amount}
                                </h3>
                                <p className="text-gray-300 mb-6">TİḰTOḰ Coins</p>

                                {/* Button */}
                                <button
                                    onClick={() => handlePurchase(amount)}
                                    className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${selectedPack === amount
                                        ? "bg-green-500 cursor-not-allowed"
                                        : "bg-gradient-to-r from-pink-400 to-sky-400 hover:-translate-y-2 cursor-pointer"
                                        }`}
                                >
                                    {selectedPack === amount ? "Pack Selected" : "Purchase"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Mainpage;

