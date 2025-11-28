"use client";

import { motion } from "framer-motion";
import { Ghost, Zap } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl border border-red-900/20 bg-gradient-to-b from-red-900/10 to-transparent p-8"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                            <Ghost className="h-6 w-6 text-red-500" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">
                            The "Ghost Town" Cycle
                        </h3>
                        <p className="mb-6 text-zinc-400">
                            Most crypto Telegram groups are dead unless the founder is
                            actively paying for hype.
                        </p>
                        <ul className="space-y-3 text-zinc-500">
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                Without Money: The group is silent.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                With Money: The group is full of spam ("LFG", "GM").
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                Result: Community Managers burn out.
                            </li>
                        </ul>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl border border-green-900/20 bg-gradient-to-b from-green-900/10 to-transparent p-8"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                            <Zap className="h-6 w-6 text-green-500" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">
                            The "Open Economy" Engine
                        </h3>
                        <p className="mb-6 text-zinc-400">
                            An AI Agent that acts as a "Market Maker" for conversation, living
                            in the group 24/7.
                        </p>
                        <ul className="space-y-3 text-zinc-300">
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                Pays for high-quality answers (Crypto).
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                Sparks debates when silent (AI).
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                Rewards loyalty with Status (Scroll Badges).
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
