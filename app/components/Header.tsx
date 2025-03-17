'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { logout } from '../lib/auth';

interface UserProfile {
    email: string;
    username?: string;
    balance: number;
    aiCallAllowance: number;
    freePredictionCount: number;
}

interface HeaderProps {
    isAuthenticated: boolean;
    profileLoading: boolean;
    userProfile?: UserProfile | undefined;
    isDeltaAlpha?: boolean;
    onOpenSubscriptionModal?: () => void;
    freePredictionCount?: number;
}

export default function Header({
                                   isAuthenticated,
                                   profileLoading,
                                   userProfile,
                                   isDeltaAlpha = false,
                                   onOpenSubscriptionModal,
                               }: HeaderProps) {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const logoSection = (
        <div
            onClick={() => router.push(isAuthenticated ? '/dashboard' : '/')}
            className="flex items-center space-x-3 cursor-pointer"
        >
            <Image
                src="/logos/scoop-logo.png"
                alt="App Logo"
                width={80}
                height={40}
                className="object-contain"
                priority
            />
        </div>
    );

    if (profileLoading) {
        return (
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 bg-[#121212] border-b-2 border-[#e0e0e0] p-4 flex justify-between items-center shadow-lg z-50"
            >
                {logoSection}
                <div className="w-40" />
            </motion.header>
        );
    }

    if (!isAuthenticated) {
        return (
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 bg-[#121212] border-b-2 border-[#e0e0e0] p-4 flex justify-between items-center shadow-lg z-50"
            >
                {logoSection}
                <div className="flex gap-4">
                    <Link
                        href="/login"
                        className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="bg-[#ff4d4d] hover:bg-[#ff0000] px-4 py-2 rounded-lg text-white font-semibold transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </motion.header>
        );
    }

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bg-[#121212] border-b-2 border-[#e0e0e0] p-4 flex justify-between items-center shadow-lg z-50"
        >
            {logoSection}
            <div className="relative flex items-center gap-4">
                {onOpenSubscriptionModal && (
                    <button
                        onClick={onOpenSubscriptionModal}
                        className="bg-[#ff4d4d] hover:bg-[#ff0000] px-4 py-2 rounded-lg text-white font-semibold text-sm transition-colors ease-in-out duration-150"
                    >
                        Get Tokens
                    </button>
                )}
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333333] hover:bg-[#4d4d4d] focus:outline-none transition"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </button>
                {dropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute right-0 top-full mt-3 w-44 bg-[#121212] border border-[#e0e0e0] rounded shadow-lg z-10"
                    >
                        <div className="px-4 py-3">
                            <p className="text-sm text-white">
                                <strong>Balance:</strong> ${userProfile?.balance.toFixed(2)}
                            </p>
                            <p className="text-sm text-white">
                                <strong>Free Calls:</strong> {userProfile?.freePredictionCount}
                            </p>
                            <p className="text-sm text-white">
                                <strong>Token Allowance:</strong> {userProfile?.aiCallAllowance}
                            </p>
                        </div>
                        <div className="border-t border-[#e0e0e0]">
                            <button
                                onClick={() => {
                                    setDropdownOpen(false);
                                    router.push('/add-credit');
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-[#4d4d4d] text-sm text-white transition"
                            >
                                Add Credit
                            </button>
                            {isDeltaAlpha && (
                                <button
                                    onClick={() => router.push('/dashboard/admin')}
                                    className="block w-full text-left px-4 py-2 hover:bg-[#4d4d4d] text-sm text-white transition"
                                >
                                    Admin Dashboard
                                </button>
                            )}
                            <button
                                onClick={logout}
                                className="block w-full text-left px-4 py-2 hover:bg-[#4d4d4d] text-sm text-white transition"
                            >
                                Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
}
