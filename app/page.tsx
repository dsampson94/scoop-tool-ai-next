'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
    return (
        <div
            className="min-h-screen bg-gradient-to-r from-[#121212] via-[#1a1a2e] to-[#121212] text-white flex flex-col relative">
            {/* Scrollable Content */}
            <main className="flex-1 overflow-y-auto pt-12">
                {/* Hero Section */}
                <section className="flex flex-col py-32 items-center justify-center text-center px-6 sm:px-12">
                    UNDER CONSTRUCTION – COME BACK SOON!
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4"
                    >
                        Win More. Live Better.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-lg sm:text-xl text-[#e0e0e0] max-w-3xl"
                    >
                        A lifestyle tool designed to empower you with insights. Our sleek, minimal design
                        paired with real-time data helps you make smarter decisions every day.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/register"
                            className="bg-[#ff4d4d] hover:bg-[#ff0000] px-6 py-3 rounded-lg text-white font-semibold transition text-lg"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/about"
                            className="border border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition text-lg"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 bg-[#1a1a2e] mt-12">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl font-bold text-center mb-8"
                        >
                            How It Works
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center"
                        >
                            <div className="bg-[#121212] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h4 className="text-xl font-semibold mb-2">1. Sign Up</h4>
                                <p className="text-[#e0e0e0]">
                                    Create a free account in seconds and start exploring our insights.
                                </p>
                            </div>
                            <div className="bg-[#121212] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h4 className="text-xl font-semibold mb-2">2. Get Informed</h4>
                                <p className="text-[#e0e0e0]">
                                    Receive data-driven insights to help you live smarter.
                                </p>
                            </div>
                            <div className="bg-[#121212] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h4 className="text-xl font-semibold mb-2">3. Stay Updated</h4>
                                <p className="text-[#e0e0e0]">
                                    Enjoy a seamless, real-time experience with our minimal design.
                                </p>
                            </div>
                            <div className="bg-[#121212] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h4 className="text-xl font-semibold mb-2">4. Live Better</h4>
                                <p className="text-[#e0e0e0]">
                                    Use our tool to make empowered, informed decisions.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-[#121212]">
                    <div className="container mx-auto px-6">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl font-bold text-center mb-8"
                        >
                            Why Choose Us?
                        </motion.h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="bg-[#1a1a2e] p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow"
                            >
                                <h4 className="text-xl font-semibold mb-2">Sleek Design</h4>
                                <p className="text-white">
                                    Enjoy an interface that’s both minimal and engaging.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="bg-[#1a1a2e] p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow"
                            >
                                <h4 className="text-xl font-semibold mb-2">Accessibility</h4>
                                <p className="text-white">
                                    Designed with clear contrasts and legible typography.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="bg-[#1a1a2e] p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow"
                            >
                                <h4 className="text-xl font-semibold mb-2">Real-Time Insights</h4>
                                <p className="text-white">
                                    Stay ahead with up-to-date information that matters.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
