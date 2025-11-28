"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-900/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-900/20 blur-[100px]" />

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
            <Sparkles className="mr-1 inline-block h-3 w-3" />
            The Always-On Community Agent
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
        >
          Turn "Dead Chats" into <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Productive Economies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          We don't just manage communities; we turn them into self-sustaining
          economies where knowledge is the currency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group relative flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition-all hover:bg-zinc-200">
            Start the Engine
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white/10">
            View Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
