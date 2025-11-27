import { useLayoutEffect, useRef } from 'react';
import { Play, ChevronRight, Terminal, Trophy, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Hero = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const float1Ref = useRef<HTMLDivElement>(null);
    const float2Ref = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const highlightRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Text Splitting
            const titleSplit = new SplitText(titleRef.current, { type: "words,chars" });
            // highlightSplit removed to preserve text-gradient

            // Entrance Timeline
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(titleSplit.chars, {
                opacity: 0,
                y: 50,
                rotateX: -90,
                stagger: 0.02,
                duration: 1
            })
                .from(highlightRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }, "-=0.5")
                .fromTo(contentRef.current?.querySelectorAll('.hero-anim') || [],
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                    "-=0.5"
                )
                .fromTo(visualRef.current,
                    { x: 50, opacity: 0, rotateY: -15 },
                    { x: 0, opacity: 1, rotateY: 0, duration: 1, ease: "back.out(1.7)" },
                    "-=0.6"
                )
                .fromTo([float1Ref.current, float2Ref.current],
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2, ease: "back.out(1.7)" },
                    "-=0.5"
                );

            // Floating Animation
            gsap.to(float1Ref.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(float2Ref.current, {
                y: 15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5
            });

            // Mouse Move Parallax
            const handleMouseMove = (e: MouseEvent) => {
                if (!containerRef.current) return;
                const { left, top, width, height } = containerRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                gsap.to(visualRef.current, {
                    rotateY: x * 10,
                    rotateX: -y * 10,
                    x: x * 20,
                    y: y * 20,
                    duration: 0.5,
                    ease: "power2.out"
                });

                gsap.to([float1Ref.current, float2Ref.current], {
                    x: x * 40,
                    y: y * 40,
                    duration: 0.5,
                    ease: "power2.out"
                });

                gsap.to(contentRef.current, {
                    x: x * -20,
                    y: y * -20,
                    duration: 0.5,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                titleSplit.revert(); // Clean up SplitText instances
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-1000">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[128px]" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div ref={contentRef}>
                    <div className="hero-anim inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {t('hero.newSeason')}
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                        <div ref={titleRef} className="inline-block">
                            {t('hero.title')}
                        </div>
                        <br />
                        <span ref={highlightRef} className="text-gradient inline-block">
                            {t('hero.titleHighlight')}
                        </span>
                    </h1>

                    <p className="hero-anim text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="hero-anim flex flex-wrap gap-4">
                        <button className="btn-primary flex items-center gap-2 group">
                            {t('hero.startCoding')}
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary flex items-center gap-2">
                            <Play size={18} fill="currentColor" />
                            {t('hero.watchDemo')}
                        </button>
                    </div>

                    <div className="hero-anim mt-12 flex items-center gap-8 text-gray-500">
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
                </div>

                {/* Visual Content */}
                <div className="relative perspective-1000">
                    {/* Main Card */}
                    <div ref={visualRef} className="relative z-20 glass-panel p-6 rounded-2xl shadow-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl transform-style-3d">
                        {/* Fake Browser Header */}
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="ml-4 px-3 py-1 rounded-md bg-black/20 text-xs text-gray-500 font-mono flex-1 text-center">
                                codex.edu.br/arena/battle-royale
                            </div>
                        </div>

                        {/* Code/IDE Preview */}
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-8 space-y-3">
                                <div className="h-4 w-3/4 rounded bg-white/5 animate-pulse" />
                                <div className="h-4 w-1/2 rounded bg-white/5 animate-pulse delay-75" />
                                <div className="h-32 rounded bg-black/30 border border-white/5 p-4 font-mono text-xs text-gray-400">
                                    <span className="text-accent">function</span> <span className="text-primary">solve</span>(input) {'{'}
                                    <br />
                                    &nbsp;&nbsp;<span className="text-gray-500">// Your optimized solution here</span>
                                    <br />
                                    &nbsp;&nbsp;<span className="text-accent">const</span> n = input.<span className="text-primary">length</span>;
                                    <br />
                                    &nbsp;&nbsp;<span className="text-accent">return</span> n * <span className="text-secondary">2</span>;
                                    <br />
                                    {'}'}
                                </div>
                            </div>
                            <div className="col-span-4 space-y-3">
                                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                                    <div className="text-xs text-primary mb-1">{t('hero.rank')}</div>
                                    <div className="text-xl font-bold text-white">#42</div>
                                </div>
                                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                                    <div className="text-xs text-secondary mb-1">{t('hero.solved')}</div>
                                    <div className="text-xl font-bold text-white">1,204</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div
                            ref={float1Ref}
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
                        </div>

                        <div
                            ref={float2Ref}
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
