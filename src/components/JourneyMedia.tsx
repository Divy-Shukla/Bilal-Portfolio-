import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export type MediaType = 'image' | 'video';

export interface JourneyItem {
    id: string;
    type: MediaType;
    src: string;
    title: string;
    description: string;
    reverse?: boolean; // If true, Media is Right, Text is Left
}

interface JourneyMediaProps {
    items: JourneyItem[];
}

const JourneyMedia: React.FC<JourneyMediaProps> = ({ items }) => {
    return (
        <section className="bg-[var(--color-alt-bg)] py-20 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col gap-[100px] md:gap-[160px]">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={clsx(
                            "flex flex-col items-center justify-between gap-[60px]",
                            item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                        )}
                    >
                        {/* Media (55%) */}
                        <motion.div
                            initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full md:w-[55%] flex justify-center perspective-[1200px]"
                        >
                            {item.type === 'image' ? (
                                <div className="card-3d w-full overflow-hidden relative">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-auto max-h-[420px] md:max-h-[850px] object-cover aspect-[4/5] md:aspect-[4/5] lg:aspect-auto"
                                    />
                                    {/* Subtle glass reflection overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay pointer-events-none" />
                                </div>
                            ) : (
                                <div className="card-3d w-full overflow-hidden relative">
                                    <video
                                        src={item.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-auto aspect-video object-cover"
                                    />
                                    {/* Subtle glass reflection overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay pointer-events-none" />
                                </div>
                            )}
                        </motion.div>

                        {/* Text Content (45%) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="w-full md:w-[45%] flex flex-col justify-center"
                        >
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-forest)] font-montserrat">
                                {item.title}
                            </h3>
                            <p className="text-lg md:text-xl text-[var(--color-text)] opacity-80 leading-relaxed font-playfair italic">
                                {item.description}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneyMedia;
