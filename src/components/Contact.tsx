import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <section className="relative bg-[var(--color-alt-bg)] text-[var(--color-text)] py-32 px-6 xl:px-0 overflow-hidden">
            {/* Subtle Background Parallax Image or Video */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
                <video
                    className="w-full h-full object-cover grayscale"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src="/media/Come With Me.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="max-w-[800px] mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="card-3d bg-white p-12 md:p-20 rounded-[32px] border border-[var(--color-beige)]"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-[var(--color-forest)]">Let’s Collaborate</h2>

                    <p className="text-lg md:text-xl mb-12 opacity-80 font-playfair italic text-[var(--color-text)]">
                        Let’s collaborate and create meaningful travel stories together.
                    </p>

                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Name or Brand"
                            className="w-full p-4 rounded-xl border border-[var(--color-beige)] bg-[var(--color-alt-bg)] focus:outline-none focus:border-[var(--color-primary)] transition-colors font-montserrat"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-xl border border-[var(--color-beige)] bg-[var(--color-alt-bg)] focus:outline-none focus:border-[var(--color-primary)] transition-colors font-montserrat"
                        />
                        <textarea
                            placeholder="Tell me about your project or campaign..."
                            rows={4}
                            className="w-full p-4 rounded-xl border border-[var(--color-beige)] bg-[var(--color-alt-bg)] focus:outline-none focus:border-[var(--color-primary)] transition-colors font-montserrat resize-none"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 bg-[var(--color-coral)] text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(255,111,97,0.3)] hover:shadow-[0_15px_30px_rgba(255,111,97,0.4)] transition-all font-montserrat"
                        >
                            Send Message
                        </motion.button>
                    </form>

                    {/* Social Links */}
                    <div className="mt-12 pt-8 border-t border-[var(--color-beige)] flex justify-center gap-6">
                        <a href="https://www.instagram.com/bilal.shakeel_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[var(--color-forest)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 font-bold font-montserrat">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                            <span>Follow on Instagram</span>
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
