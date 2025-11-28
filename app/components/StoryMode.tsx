"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Flame, UserPlus } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Scene 1: The Setup",
        description:
            "Admin installs @ScrollEngageBot into the 'Scroll Devs' group. Admin deposits $100 and sets the rule: 'Reward technical help.'",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        icon: Flame,
        title: "Scene 2: The Spark",
        description:
            "It's 2:00 AM. The group is dead. The Bot wakes up: '🔥 Prediction Time: ETH is testing $3,500. Will it break resistance?'",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
    },
    {
        icon: CheckCircle2,
        title: "Scene 3: The Value",
        description:
            "Newbie User asks a question. Expert User replies. The Bot acts: '✅ Excellent Answer! You just earned +20 Reputation Points.'",
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
];

export default function StoryMode() {
    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        The User Journey
                    </h2>
                    <p className="mt-4 text-zinc-400">See it in action.</p>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <step.icon className={`h-5 w-5 ${step.color}`} />
                            </div>

                            <div className="ml-6 w-[calc(100%-4rem)] rounded-3xl border border-white/5 bg-zinc-900/50 p-6 md:ml-0 md:w-[calc(50%-2.5rem)]">
                                <h3 className={`mb-2 text-lg font-bold ${step.color}`}>
                                    {step.title}
                                </h3>
                                <p className="text-zinc-400">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
