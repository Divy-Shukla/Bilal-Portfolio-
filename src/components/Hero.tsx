import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden text-white flex flex-col justify-center items-center">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/media/Hero Background.mp4" type="video/mp4" />
                </video>
                {/* Dark Forest Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-[var(--color-forest)]/60 to-[var(--color-forest)]/90 mix-blend-multiply" />
            </div>

            {/* Foreground Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center px-6"
            >
                {/* Profile Image SLOT */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] shrink-0 mb-8 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-[0_0_30px_rgba(62,142,65,0.6)]"
                >
                    <img
                        src="/media/Profile Pic.jpeg"
                        alt="Bilal Shakeel"
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>

                {/* Tagline */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="font-playfair italic text-xl md:text-2xl mb-4 text-[#F5F5DC]/90"
                >
                    Travel Through Stories
                </motion.h3>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide text-glow"
                >
                    Hi, I’m Bilal Shakeel
                </motion.h1>

                {/* Dynamic / Rotating Text Alternative */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="text-lg md:text-xl max-w-2xl text-[#F5F5DC]/80 font-light mb-10"
                >
                    Traveling with purpose, storytelling with authenticity.
                </motion.p>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="bg-[var(--color-coral)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
                >
                    Work With Me
                </motion.button>
            </motion.div>

            {/* Scroll indicator overlay */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 z-10 text-white/70"
            >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
