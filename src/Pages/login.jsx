import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("Sohail1");
    const [password, setPassword] = useState("Sohail1");
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === formData.username && password === formData.password) {
            localStorage.setItem("isAuthenticated", "true"); 
            navigate("/dashboard"); 
        } else {
            alert("Enter valid username and password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a]">
            <div className="bg-[#2c2c2c] shadow-2xl rounded-2xl p-10 w-[500px] text-center">
                <h2 className="text-white text-3xl font-semibold mb-8 tracking-widest">
                    ADMIN LOGIN
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={formData.username}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#3a3a3a] text-gray-300 
              outline-none border border-transparent 
              shadow-[0_0_10px_rgba(255,255,255,0.05)]
              focus:shadow-[0_0_15px_rgba(255,255,255,0.09)] 
              transition duration-300"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#3a3a3a] text-gray-300  
              outline-none border border-transparent 
              shadow-[0_0_10px_rgba(255,255,255,0.05)]
              focus:shadow-[0_0_15px_rgba(255,255,255,0.09)] 
              transition duration-300"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-bold text-white 
              bg-gradient-to-r from-[#5a6ff0] to-[#a583f6] 
              shadow-[0_0_10px_rgba(107,110,249,0.4)] 
              hover:shadow-[0_0_18px_rgba(107,110,249,0.8)]
              focus:shadow-[0_0_20px_rgba(107,110,249,0.9)]
              transition duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                        LOGIN NOW
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;


