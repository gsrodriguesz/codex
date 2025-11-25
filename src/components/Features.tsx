import { motion } from 'framer-motion';
import { Code2, Cpu, Users, Globe, Zap, Trophy } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-24 relative">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="features.title">
                            Everything you need to <span className="text-gradient">excel</span>
                        </Trans>
                    </h2>
                    <p className="text-gray-400">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Code2 className="w-6 h-6 text-orange-400" />,
                            title: t('features.cards.ide.title'),
                            description: t('features.cards.ide.description')
                        },
                        {
                            icon: <Cpu className="w-6 h-6 text-purple-400" />,
                            title: t('features.cards.judge.title'),
                            description: t('features.cards.judge.description')
                        },
                        {
                            icon: <Users className="w-6 h-6 text-blue-400" />,
                            title: t('features.cards.battles.title'),
                            description: t('features.cards.battles.description')
                        },
                        {
                            icon: <Trophy className="w-6 h-6 text-yellow-400" />,
                            title: t('features.cards.leaderboards.title'),
                            description: t('features.cards.leaderboards.description')
                        },
                        {
                            icon: <Globe className="w-6 h-6 text-green-400" />,
                            title: t('features.cards.repository.title'),
                            description: t('features.cards.repository.description')
                        },
                        {
                            icon: <Zap className="w-6 h-6 text-orange-400" />,
                            title: t('features.cards.analytics.title'),
                            description: t('features.cards.analytics.description')
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 hover:bg-white/5 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
