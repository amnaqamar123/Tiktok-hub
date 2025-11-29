import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import logo from "../assets/Dashboard - TIḳTOḳ HÜB/imgi_1_coin.png";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    // ✅ Redirect to login if not authenticated
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (isAuthenticated !== "true") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#2e1630] to-[#0d0d1c] text-white overflow-hidden">
            {/* ✅ Navbar */}
            <nav className="flex items-center justify-between px-8 py-4 from-[#190b1a] to-[#0d0d1c] shadow-lg border-b border-b-gray-600">
                <div className="flex items-center space-x-2">
                    <div className="border border-black w-10 h-10 flex items-center justify-center">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                    </div>
                    <h1 className="text-2xl font-bold">TIKTOK HÜB</h1>
                </div>

                <ul className="hidden md:flex items-center space-x-8 font-semibold text-lg">
                    <li onClick={() => navigate("/coinpacks")} className="relative group flex items-center gap-1 cursor-pointer px-3 py-1 rounded-lg transition hover:bg-gray-800">
                        <span className="text-yellow-400 text-3xl">●</span>
                        <span>Coin Packs</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li onClick={() => navigate("/bankfee")} className="cursor-pointer relative group px-3 py-1 rounded-lg transition hover:bg-gray-800">
                        Bank Fee
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li onClick={() => navigate("/publishfee")} className="cursor-pointer relative group px-3 py-1 rounded-lg transition hover:bg-gray-800">
                        Publish Fee
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li onClick={() => navigate("/changepassword")} className="cursor-pointer relative group px-3 py-1 rounded-lg transition hover:bg-gray-800">
                        Change Password
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>

                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium 
          bg-gradient-to-r from-pink-500 to-sky-500 shadow-[0_0_8px_rgba(236,72,153,0.5)] 
          hover:shadow-[0_0_16px_rgba(236,72,153,0.8)] transition duration-300 border-b-2 border-b-black border-r-2 border-r-black border-l-2 border-l-gray-500 border-t-2 border-t-gray-500"
                >
                    <FaCog /> Settings
                </button>
            </nav>

            <div className="flex items-center justify-center h-[80vh]">
                <button onClick={()=> navigate('/mainpage')}
                    className="text-3xl font-semibold px-20 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-sky-500 
          shadow-[0_0_15px_rgba(236,72,153,0.6)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] 
          transition duration-300 hover:-translate-y-2 cursor-pointer"
                >
                    Start
                </button>
            </div>

            {sidebarOpen && (
                <div className="fixed top-5 left-5 h-[450px] w-64 bg-black text-white p-6 z-50 rounded-xl">
                    <h2 className="text-xl font-bold mb-8">Transaction Status</h2>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3">
                            <input type="radio" name="status" id="success" className="w-3 h-3 accent-blue-500 cursor-pointer" defaultChecked />
                            <div className="px-5 py-2 rounded-full bg-green-900 text-green-400 text-sm cursor-pointer">Success</div>
                        </li>
                        <li className="flex items-center gap-3">
                            <input type="radio" name="status" id="failed" className="w-3 h-3 accent-blue-500 cursor-pointer" />
                            <div className="px-5 py-2 rounded-full bg-red-900 text-red-400 text-sm cursor-pointer">Failed</div>
                        </li>
                        <li className="flex items-center gap-3">
                            <input type="radio" name="status" id="cardBlocked" className="w-3 h-3 accent-blue-500 cursor-pointer" />
                            <div className="px-5 py-2 rounded-full bg-yellow-900 text-yellow-400 text-sm cursor-pointer">Card Blocked</div>
                        </li>
                        <li className="flex items-center gap-3">
                            <input type="radio" name="status" id="unpublished" className="w-3 h-3 accent-blue-500 cursor-pointer" />
                            <div className="px-5 py-2 bg-blue-900 text-blue-400 text-sm cursor-pointer rounded-full">Unpublished</div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dashboard;



