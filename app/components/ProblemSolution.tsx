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
                        className="rounded-3xl border border-[var(--neon-orange)]/20 bg-gradient-to-b from-[var(--neon-orange)]/10 to-transparent p-8"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--neon-orange)]/10">
                            <Ghost className="h-6 w-6 text-[var(--neon-orange)]" />
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
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-orange)]" />
                                Without Money: The group is silent.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-orange)]" />
                                With Money: The group is full of spam ("LFG", "GM").
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-orange)]" />
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
                        className="rounded-3xl border border-[var(--neon-cyan)]/20 bg-gradient-to-b from-[var(--neon-cyan)]/10 to-transparent p-8"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--neon-cyan)]/10">
                            <Zap className="h-6 w-6 text-[var(--neon-cyan)]" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">
                            The "Scroll Engine"
                        </h3>
                        <p className="mb-6 text-zinc-400">
                            An AI Agent that acts as a "Market Maker" for conversation, living
                            in the group 24/7.
                        </p>
                        <ul className="space-y-3 text-zinc-300">
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" />
                                Pays for high-quality answers (Crypto).
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" />
                                Sparks debates when silent (AI).
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" />
                                Rewards loyalty with Status (Scroll Badges).
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
