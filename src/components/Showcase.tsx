import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Showcase = () => {
    const { t } = useTranslation();

    return (
        <section id="platform" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[128px]" />

            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
                            alt="Coding Environment"
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlay UI Elements */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono">{t('showcase.testCases')}</span>
                                    <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-mono">12ms</span>
                                    <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-mono">4.2MB</span>
                                </div>
                            </div>
                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                                />
                            </div>
                            <div className="mt-2 text-xs text-gray-400 text-right">{t('showcase.testCases')}: 45/45</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('showcase.title')}
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        {t('showcase.subtitle')}
                    </p>

                    <div className="space-y-4">
                        {(t('showcase.features', { returnObjects: true }) as string[]).map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="text-orange-400 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-8 btn-secondary">
                        Explore the IDE
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
