import React from 'react';
import { motion } from 'framer-motion';

const BrandCollab: React.FC = () => {
    return (
        <section className="bg-[var(--color-forest)] text-[var(--color-beige)] py-24 px-6 xl:px-0 relative overflow-hidden">
            {/* Background glass element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-coral)]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto z-10 relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-white">Let’s Create Together</h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed">
                        Bilal helps brands connect with audiences through authentic travel experiences, visually compelling storytelling, and highly engaging social media content that inspires action.
                    </p>
                </motion.div>

                {/* Results / Impact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        { metric: "Strong", label: "Audience Engagement" },
                        { metric: "Highly", label: "Shareable Travel Content" },
                        { metric: "Authentic", label: "Audience Trust" },
                        { metric: "Consistent", label: "Visual Branding" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center card-3d"
                        >
                            <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-2 font-montserrat">{stat.metric}</h4>
                            <p className="text-sm font-playfair italic opacity-90">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Campaign Showcases (Using floating videos) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        { id: 'v2', src: '/media/V2.mp4', title: 'Luxury Hotel Partnerships' },
                        { id: 'v4', src: '/media/V4.mp4', title: 'Tourism Board Campaigns' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="relative group card-3d overflow-hidden rounded-[24px]"
                        >
                            <video
                                src={item.src}
                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                                <h3 className="text-2xl font-bold text-white font-montserrat">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BrandCollab;
