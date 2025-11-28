"use client";

import { motion } from "framer-motion";
import { MessageSquare, Award } from "lucide-react";

export default function Features() {
    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Two layers of engagement to keep your community alive.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Layer 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-colors hover:border-purple-500/50 hover:bg-zinc-900"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl transition-all group-hover:bg-purple-500/40" />

                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <MessageSquare className="h-6 w-6" />
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-white">
                            Layer 2: The "Silence Breaker"
                        </h3>
                        <p className="mb-4 text-sm font-medium text-purple-400">
                            Engagement Capital
                        </p>
                        <p className="mb-6 text-zinc-400">
                            The solution to "Ghost Towns" when there is no budget. The AI
                            monitors the group's pulse and sparks debates.
                        </p>

                        <div className="rounded-xl bg-black/50 p-4 text-sm text-zinc-300">
                            <p className="font-mono text-xs text-zinc-500 mb-2">Example:</p>
                            "🚨 Debate: Vitalik just criticized ZK-Rollups. Do you agree with
                            his point on finality? Discuss for Reputation Points."
                        </div>
                    </motion.div>

                    {/* Layer 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-colors hover:border-blue-500/50 hover:bg-zinc-900"
                    >
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-all group-hover:bg-blue-500/40" />

                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            <Award className="h-6 w-6" />
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-white">
                            Layer 3: The "Status Game"
                        </h3>
                        <p className="mb-4 text-sm font-medium text-blue-400">
                            Social Capital
                        </p>
                        <p className="mb-6 text-zinc-400">
                            A reason to chat when there is no money involved. Users grind to
                            hit milestones and earn permanent badges.
                        </p>

                        <div className="rounded-xl bg-black/50 p-4 text-sm text-zinc-300">
                            <p className="font-mono text-xs text-zinc-500 mb-2">The Prize:</p>
                            Upon hitting 100 RP, the Agent mints a permanent "Scroll Canvas
                            Badge" (e.g., "Verified Expert") to their wallet.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
