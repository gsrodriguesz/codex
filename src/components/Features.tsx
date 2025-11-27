import { useEffect, useRef } from 'react';
import { Code2, Cpu, Users, Globe, Zap, Trophy } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Cards Stagger Animation
            gsap.fromTo(cardsRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 30px -10px var(--color-primary-glow)",
            borderColor: "var(--color-primary)",
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(e.currentTarget.querySelector('.icon-bg'), {
            backgroundColor: "var(--color-primary)",
            color: "#000",
            scale: 1.1,
            duration: 0.3
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            boxShadow: "none",
            borderColor: "rgba(255, 255, 255, 0.05)",
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(e.currentTarget.querySelector('.icon-bg'), {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: "var(--color-primary)",
            scale: 1,
            duration: 0.3
        });
    };

    return (
        <section id="features" ref={sectionRef} className="py-24 relative">
            <div className="container">
                <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="features.title">
                            Everything you need to <span className="text-gradient">excel</span>
                        </Trans>
                    </h2>
                    <p className="text-gray-400">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Code2 className="w-6 h-6" />,
                            title: t('features.cards.ide.title'),
                            description: t('features.cards.ide.description')
                        },
                        {
                            icon: <Cpu className="w-6 h-6" />,
                            title: t('features.cards.judge.title'),
                            description: t('features.cards.judge.description')
                        },
                        {
                            icon: <Users className="w-6 h-6" />,
                            title: t('features.cards.battles.title'),
                            description: t('features.cards.battles.description')
                        },
                        {
                            icon: <Trophy className="w-6 h-6" />,
                            title: t('features.cards.leaderboards.title'),
                            description: t('features.cards.leaderboards.description')
                        },
                        {
                            icon: <Globe className="w-6 h-6" />,
                            title: t('features.cards.repository.title'),
                            description: t('features.cards.repository.description')
                        },
                        {
                            icon: <Zap className="w-6 h-6" />,
                            title: t('features.cards.analytics.title'),
                            description: t('features.cards.analytics.description')
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="glass-panel p-6 border border-white/5 transition-colors group cursor-default"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="icon-bg w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-primary transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
