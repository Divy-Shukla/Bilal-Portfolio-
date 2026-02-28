import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section className="bg-[var(--color-beige)] text-[var(--color-text)] py-20 px-6 xl:px-0">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-[60px]">
                {/* Left: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-[45%] flex justify-center"
                >
                    <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] shrink-0 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] border-8 border-white mx-auto">
                        <img
                            src="/media/Profile Pic.webp"
                            alt="Bilal Shakeel"
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 rounded-full border border-[var(--color-primary)]/20 pointer-events-none" />
                    </div>
                </motion.div>

                {/* Right: Bio Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-full md:w-[55%] flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-forest)]">
                        About Me
                    </h2>

                    <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                        I am Bilal Shakeel, a travel influencer dedicated to exploring destinations beyond the map and turning journeys into visual stories. My goal is to capture the essence of every place I visit—the culture, the people, and the unseen beauty—and share those moments to inspire your own exploration.
                    </p>

                    <blockquote className="border-l-4 border-[var(--color-primary)] pl-6 py-2">
                        <p className="font-playfair italic text-2xl md:text-3xl text-[var(--color-forest)]">
                            "Every destination tells a story."
                        </p>
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
