
import React, { useState } from "react";


const Changepassword = () => {
    const [secretKey, setSecretKey] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

   
    const VALID_KEY = "SECRET123";

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!secretKey.trim()) {
            setError("Please fill this field");
            return;
        }

        if (secretKey !== VALID_KEY) {
            setError("Invalid secret key, try again");
            return;
        }

       
        setSuccess("Secret key verified successfully!");
        setSecretKey("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2e1630] to-[#0d0d1c] text-white flex items-center">
            <div className="bg-[#191c2a] shadow-2xl rounded-2xl p-10 w-[450px] text-center border border-[#00FF95] ml-20 top-gradient-border">
                <h2 className="text-[#00FF95] text-2xl font-bold mb-8">Verify Secret Key</h2>

                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="text-left">
                        <label className="block text-[#00ffc8] mb-2">ENTER SECRET KEY</label>
                        <input
                            type="text"
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                            aria-invalid={!!error}
                            aria-describedby="secret-error"
                            className="w-full px-4 py-3 rounded-lg border border-[#00ffbf] outline-none
                focus:ring-2 focus:ring-[#00FF95] transition duration-300 text-white"
                        />
                        {/* Error message */}
                        {error && (
                            <p id="secret-error" className="mt-2 text-sm text-red-400">
                                {error}
                            </p>
                        )}

                        {/* Success message */}
                        {success && (
                            <p className="mt-2 text-sm text-green-300">{success}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r 
              from-[#00ffc3] to-[#f2ff00] cursor-pointer hover:opacity-95 transition"
                    >
                        Verify Key
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Changepassword;
