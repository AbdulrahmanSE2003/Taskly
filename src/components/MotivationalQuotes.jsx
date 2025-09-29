// MotivationalQuotes.jsx
import { motion } from "framer-motion";
import {useMemo, useState} from "react";

const quotes = [
    "Keep pushing forward, you’re closer than you think 🚀",
    "Consistency beats motivation every single time 💡",
    "Believe in yourself and all that you are ✨",
    "Every step you take is progress, no matter how small 👣",
    "Dream big. Start small. Act now ⚡",
    "Your hard work will pay off 🌟",
    "Focus on progress, not perfection 🎯",
    "Success doesn’t come from what you do occasionally, but what you do consistently 🔑",
    "Turn your ‘can’t’ into ‘can’, and your dreams into plans 📌",
    "Don’t stop when you’re tired. Stop when you’re done 🏁",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful 🌿",
    "Do something today that your future self will thank you for 💎",
    "Start where you are. Use what you have. Do what you can 🔥",
    "The secret of getting ahead is getting started 🌱",
    "Push yourself, because no one else is going to do it for you 💪",
];

export default function MotivationalQuotes() {
    const quote = useMemo(() => {
        return quotes[Math.floor(Math.random() * quotes.length)]
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 px-8 py-10 w-11/12  sm:w-5/6 lg:w-2/3 leading-8 rounded-2xl text-center text-lg sm:text-xl font-medium italic
                 bg-white/80 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100
                 shadow-md backdrop-blur-md border border-gray-200 dark:border-gray-700"
        >
            {quote}
        </motion.div>
    );
}
