"use client";

import { useState, useEffect } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Load saved email from localStorage when the component mounts
    useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail");
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    // Save email input to localStorage whenever it changes
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        localStorage.setItem("userEmail", newEmail);
    };

    const handleMagicLink = async () => {
        setMessage("");
        if (!email) {
            setMessage("Please enter an email.");
            return;
        }
        try {
            const res = await fetch("/api/auth/send-magic-link", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setMessage("Check your email for the magic link!");
        } catch (error: any) {
            setMessage(error.message || "Error sending magic link.");
        }
    };

    return (
        <div className="bg-gray-900 text-white flex items-center justify-center p-4 pt-40">
            <div className="max-w-md w-full bg-gray-800 p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
                <p className="text-gray-400 mb-4 text-center">
                    Enter your email to receive a magic link
                </p>
                <input
                    className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button
                    className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black w-full font-semibold transition"
                    onClick={handleMagicLink}
                >
                    Send Magic Link
                </button>
                {message && <p className="mt-4 text-yellow-300 text-center">{message}</p>}
            </div>
        </div>
    );
}
