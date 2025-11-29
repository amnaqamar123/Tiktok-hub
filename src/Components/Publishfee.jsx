import React from 'react'
import { useNavigate } from 'react-router-dom'

const Publishfee = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2e1630] to-[#0d0d1c] text-white">
            <button
                onClick={() => navigate("/dashboard")}
                className="inline-block mt-5 ml-5 px-6 py-2 font-semibold text-lg rounded-full text-white 
        bg-gradient-to-r from-pink-500 to-rose-500 border border-white/30 
        shadow-[0_0_20px_rgba(255,82,119,0.5)] hover:scale-105 transition duration-300 cursor-pointer"
            >
                &lt; Back
            </button>

            <div className="bg-white shadow-2xl rounded-2xl p-10 w-[350px] text-center m-auto">
                <h2 className="text-black text-2xl font-bold mb-8">
                    Fee Management
                </h2>

                <form className="space-y-2">
                    <div className="text-left">
                        <label className="block text-gray-800 mb-2">Publish Fee</label>
                        <input
                            type="text"
                            placeholder="Enter fee"
                            className="w-full px-4 py-3 rounded-lg text-gray-700 border
              shadow-[0_0_10px_rgba(255,255,255,0.05)]
              focus:shadow-[0_0_15px_rgba(255,255,255,0.09)] 
              transition duration-300"
                        />
                    </div>

                    <div className="text-left">
                        <label className="block text-gray-800 mb-2">Refund</label>
                        <input
                            type="number"
                            placeholder="Enter refund amount"
                            className="w-full px-4 py-3 rounded-lg text-gray-700 border 
              shadow-[0_0_10px_rgba(255,255,255,0.05)]
              focus:shadow-[0_0_15px_rgba(255,255,255,0.09)] 
              transition duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-bold text-white 
            bg-[#5a6ff0]
            shadow-[0_0_10px_rgba(107,110,249,0.4)] 
            hover:shadow-[0_0_18px_rgba(107,110,249,0.8)]
            focus:shadow-[0_0_20px_rgba(107,110,249,0.9)]
            transition duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Publishfee
