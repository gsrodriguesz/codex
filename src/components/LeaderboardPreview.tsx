import { motion } from 'framer-motion';
import { Medal, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LeaderboardPreview = () => {
    const { t } = useTranslation();

    const topUsers = [
        { rank: 1, name: "AlgorithmKing", score: 3250, country: "US", avatar: "bg-yellow-500" },
        { rank: 2, name: "CodeNinja_99", score: 3180, country: "JP", avatar: "bg-gray-400" },
        { rank: 3, name: "BinaryBeast", score: 3120, country: "BR", avatar: "bg-orange-500" },
        { rank: 4, name: "RecursionMaster", score: 2980, country: "DE", avatar: "bg-orange-500" },
        { rank: 5, name: "GraphGuru", score: 2950, country: "IN", avatar: "bg-purple-500" },
    ];

    return (
        <section id="community" className="py-24 relative bg-gradient-to-b from-[#030712] to-[#0f172a]">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('leaderboard.title')}
                    </h2>
                    <p className="text-gray-400">
                        {t('leaderboard.subtitle')}
                    </p>
                </div>

                <div className="glass-panel overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm font-medium text-gray-400">
                        <div className="col-span-2 text-center">{t('leaderboard.rank')}</div>
                        <div className="col-span-6">{t('leaderboard.user')}</div>
                        <div className="col-span-4 text-right">{t('leaderboard.score')}</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {topUsers.map((user, index) => (
                            <motion.div
                                key={user.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors"
                            >
                                <div className="col-span-2 flex justify-center">
                                    {user.rank === 1 && <Crown className="text-yellow-400 w-5 h-5" />}
                                    {user.rank === 2 && <Medal className="text-gray-400 w-5 h-5" />}
                                    {user.rank === 3 && <Medal className="text-orange-500 w-5 h-5" />}
                                    {user.rank > 3 && <span className="text-gray-500 font-mono">#{user.rank}</span>}
                                </div>
                                <div className="col-span-6 flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${user.avatar} flex items-center justify-center text-xs font-bold text-white`}>
                                        {user.name[0]}
                                    </div>
                                    <span className="font-medium text-white">{user.name}</span>
                                    <span className="text-xs text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">{user.country}</span>
                                </div>
                                <div className="col-span-4 text-right font-mono text-orange-300">
                                    {user.score}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-4 text-center border-t border-white/10">
                        <button className="text-sm text-orange-400 hover:text-orange-300 transition-colors">
                            {t('leaderboard.viewFull')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeaderboardPreview;
