"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[var(--neon-purple)]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--neon-cyan)]/10 blur-[100px]" />

      <div className="relative z-10 max-w-5xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 w-full"
        >
          <div className="relative h-40 w-full sm:h-52 sm:w-full">
            <Image
              src="/scroll_engine_logo.png"
              alt="Scroll Engine Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-2"
        >
          <span className="rounded-full border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/10 px-3 py-1 text-sm font-medium text-[var(--neon-cyan)] backdrop-blur-sm shadow-[0_0_10px_rgba(0,243,255,0.2)]">
            <Sparkles className="mr-1 inline-block h-3 w-3" />
            The Always-On Community Agent
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
        >
          Turn "Dead Chats" into <br />
          <span className="bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-cyan)] to-[var(--neon-purple)] bg-clip-text text-transparent animate-pulse">
            Productive Economies
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group relative flex items-center gap-2 rounded-full bg-[var(--neon-cyan)] px-8 py-3 text-base font-bold text-black transition-all hover:bg-[var(--neon-cyan)]/80 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
            Start the Engine
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="rounded-full border border-[var(--neon-purple)]/50 bg-[var(--neon-purple)]/10 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--neon-purple)]/20 hover:shadow-[0_0_15px_rgba(188,19,254,0.3)]">
            View Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
