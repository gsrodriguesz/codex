import { motion } from 'framer-motion';
import { Play, ChevronRight, Terminal, Trophy, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-orange-300 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        {t('hero.newSeason')}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        Master the Art of <br />
                        <span className="text-gradient">{t('hero.titleHighlight')}</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn-primary flex items-center gap-2 group">
                            {t('hero.startCoding')}
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary flex items-center gap-2">
                            <Play size={18} fill="currentColor" />
                            {t('hero.watchDemo')}
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Terminal size={20} />
                            <span className="text-sm font-medium">{t('hero.multiLanguage')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Trophy size={20} />
                            <span className="text-sm font-medium">{t('hero.globalRankings')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={20} />
                            <span className="text-sm font-medium">{t('hero.activeCommunity')}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="relative perspective-1000"
                >
                    {/* Main Card */}
                    <div className="relative z-20 glass-panel p-6 rounded-2xl shadow-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl transform transition-transform hover:scale-[1.02] duration-500">
                        {/* Fake Browser Header */}
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="ml-4 px-3 py-1 rounded-md bg-black/20 text-xs text-gray-500 font-mono flex-1 text-center">
                                codex.platform/arena/battle-royale
                            </div>
                        </div>

                        {/* Code/IDE Preview */}
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-8 space-y-3">
                                <div className="h-4 w-3/4 rounded bg-white/5 animate-pulse" />
                                <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse delay-75" />
                                <div className="h-32 rounded bg-black/30 border border-white/5 p-4 font-mono text-xs text-gray-400">
                                    <span className="text-purple-400">function</span> <span className="text-blue-400">solve</span>(input) {'{'}
                                    <br />
                                    &nbsp;&nbsp;<span className="text-gray-500">// Your optimized solution here</span>
                                    <br />
                                    &nbsp;&nbsp;<span className="text-purple-400">const</span> n = input.<span className="text-blue-400">length</span>;
                                    <br />
                                    &nbsp;&nbsp;<span className="text-purple-400">return</span> n * <span className="text-orange-400">2</span>;
                                    <br />
                                    {'}'}
                                </div>
                            </div>
                            <div className="col-span-4 space-y-3">
                                <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                    <div className="text-xs text-orange-300 mb-1">{t('hero.rank')}</div>
                                    <div className="text-xl font-bold text-white">#42</div>
                                </div>
                                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <div className="text-xs text-green-300 mb-1">{t('hero.solved')}</div>
                                    <div className="text-xl font-bold text-white">1,204</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-4 rounded-xl glass-panel border-t border-white/20 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                                    <Trophy size={20} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">{t('hero.currentStreak')}</div>
                                    <div className="text-lg font-bold text-white">14 {t('hero.days')}</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 p-4 rounded-xl glass-panel border-t border-white/20 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0f172a] bg-gray-700 flex items-center justify-center text-xs`}>
                                            U{i}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-medium text-white">
                                    +400 {t('hero.online')}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
