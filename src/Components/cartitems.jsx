import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import coin from "../assets/TIḳTOḳ HÜB/imgi_3_coin.png";
import profile from "../assets/TIḳTOḳ HÜB/imgi_2_483207-the-mobile-wallpaper.jpg";
import img1 from "../assets/Cart/imgi_2_visa.png";
import img2 from "../assets/Cart/imgi_3_master.png";
import img3 from "../assets/Cart/imgi_4_paypal.png";
import img4 from "../assets/Cart/imgi_5_amex.png";
import { FaSync } from "react-icons/fa";

const Cartitems = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { username = "manahil_princess", selectedPack = "0" } = location.state || {};

    const [selectedMethod, setSelectedMethod] = useState(null);
    const [timer, setTimer] = useState(10);
    const [isCounting, setIsCounting] = useState(false);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [processing, setProcessing] = useState(false);
    const inputsRef = useRef([]);

    const paymentMethods = [
        { name: "Visa Card", key: "Visa", img: img1 },
        { name: "Master Card", key: "MasterCard", img: img2 },
        { name: "PayPal", key: "PayPal", img: img3 },
        { name: "Amex", key: "Amex", img: img4 },
    ];

    
    useEffect(() => {
        let countdown;
        if (isCounting && timer > 0) {
            countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else if (timer === 0) {
            clearInterval(countdown);
            setIsCounting(false);
        }
        return () => clearInterval(countdown);
    }, [isCounting, timer]);

    
    useEffect(() => {
        if (selectedMethod) {
            setTimer(10);
            setIsCounting(true);
        }
    }, [selectedMethod]);

    const handleResend = () => {
        setTimer(10);
        setIsCounting(true);
    };

    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 3) inputsRef.current[index + 1].focus();
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleProceedPayment = () => {
        if (otp.some((d) => d === "")) {
            alert("Please enter 4-digit code");
        } else {
            setProcessing(true);
            setTimeout(() => {
                const transactionId =
                    "TIKO" + Math.random().toString(36).substr(2, 8).toUpperCase();
                navigate("/confirm", {
                    state: {
                        username,
                        selectedPack,
                        method: selectedMethod.name,
                        date: new Date().toLocaleDateString(),
                        transactionId,
                    },
                });
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0028] to-[#3a003a] text-white flex flex-col items-center py-10 relative px-4">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent text-center">
                Cart Items
            </h2>

            {/* Cart Container */}
            <div className="bg-[#2a1530] w-full max-w-[1000px] rounded-2xl p-6 md:p-10 border border-gray-700 shadow-xl mb-10">
                {/* Profile & Coins */}
                <div className="flex flex-col md:flex-row items-center md:justify-between border-b border-gray-700 pb-6 md:pb-8 gap-6">
                    {/* Profile */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#FE2C55]"
                        />
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold">Manahil 🌹</h3>
                            <p className="text-[#FE2C55] text-sm md:text-base">@{username}</p>
                        </div>
                    </div>

                    {/* Coins */}
                    <div className="flex items-center bg-[#33253A] rounded-2xl px-6 py-3 md:px-8 md:py-4">
                        <img src={coin} alt="coin" className="w-10 md:w-12 mr-4" />
                        <p className="text-base md:text-xl font-semibold">
                            {selectedPack} TİḰTOḰ Coins
                        </p>
                    </div>
                </div>

                {/* Payment Methods */}
                <h3 className="text-center text-xl md:text-2xl mt-10 font-bold text-white">
                    Select Payment Method
                </h3>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.key}
                            onClick={() => setSelectedMethod(method)}
                            className={`cursor-pointer w-[45%] sm:w-[40%] md:w-[200px] h-[110px] md:h-[130px] bg-[#1f1126] rounded-2xl border transition-all flex flex-col items-center justify-center hover:-translate-y-2 ${selectedMethod?.key === method.key
                                    ? "border-[#FE2C55] bg-[#fe2c561b]"
                                    : "border border-gray-600"
                                }`}
                        >
                            <img
                                src={method.img}
                                alt={method.name}
                                className="w-12 h-8 md:w-16 md:h-10 object-contain mb-3"
                            />
                            <p className="text-sm md:text-lg font-medium">{method.name}</p>
                        </div>
                    ))}
                </div>

                {/* Checkout Button */}
                <div className="flex justify-center mt-10 md:mt-14">
                    <button className="w-[90%] sm:w-[320px] py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl bg-gradient-to-r from-[#FE2C55] to-[#00C3FF] hover:opacity-90 hover:-translate-y-2 cursor-pointer transition">
                        Checkout
                    </button>
                </div>
            </div>

            {/* OTP Popup */}
            {selectedMethod && !processing && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
                    <div className="w-full max-w-[370px] bg-white rounded-xl shadow-2xl p-5 text-center animate-fadeIn">
                        <div className="border-b border-gray-200 pb-5">
                            <img src={selectedMethod.img} alt="method" className="h-10 mx-auto mb-2" />
                            <h1 className="text-2xl font-semibold text-black">Payment Verification</h1>
                        </div>

                        <div className="mt-5 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-green-600">
                                <div className="h-2 w-2 rounded-full bg-green-600" />
                                <span className="text-sm font-medium">Card Connected</span>
                            </div>

                            <p className="text-sm text-gray-500">Enter 4-digit code sent to your account</p>

                            {/* OTP */}
                            <div className="flex justify-between w-52">
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        value={value}
                                        onChange={(e) => handleOtpChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        className="h-10 w-10 md:h-12 md:w-12 text-center text-lg font-bold text-gray-800 border border-gray-500 rounded focus:border-[#FE2C55] focus:outline-none"
                                    />
                                ))}
                            </div>

                            {/* Timer */}
                            <div className="text-gray-600 text-sm mt-2 flex items-center gap-2">
                                {timer > 0 ? (
                                    <>
                                        <FaSync className="animate-spin text-[#FE2C55]" />
                                        <span>Resend code in {timer}s</span>
                                    </>
                                ) : (
                                    <button
                                        onClick={handleResend}
                                        className="text-[#FE2C55] font-semibold hover:underline"
                                    >
                                        Resend Code
                                    </button>
                                )}
                            </div>

                            <button
                                onClick={handleProceedPayment}
                                className="mt-3 w-60 py-3 bg-gradient-to-r from-[#FE2C55] to-[#00C3FF] text-white font-semibold rounded-lg hover:opacity-90 cursor-pointer"
                            >
                                Proceed with Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Processing Popup */}
            {processing && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
                    <div className="w-full max-w-[370px] bg-white rounded-xl shadow-2xl p-5 text-center animate-fadeIn">
                        <img src={selectedMethod?.img} alt="card" className="h-10 mx-auto mb-3" />
                        <h1 className="text-xl font-semibold text-black mb-2">Payment Verification</h1>
                        <p className="text-green-600 font-medium mb-5">Card Connected</p>
                        <div className="loader mx-auto border-4 border-gray-300 border-t-[#FE2C55] rounded-full w-10 h-10 animate-spin" />
                        <p className="mt-5 text-gray-600 font-medium">Processing Payment...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cartitems;





