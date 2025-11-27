import { useLayoutEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Showcase = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Image Parallax Reveal
            gsap.fromTo(imageRef.current,
                { scale: 1.2, y: -50 },
                {
                    scale: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

            // Progress Bar Animation
            gsap.fromTo(progressBarRef.current,
                { width: 0 },
                {
                    width: "100%",
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: progressBarRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Title Split Animation
            const split = new SplitText(titleRef.current, { type: "words,chars" });
            gsap.from(split.chars, {
                opacity: 0,
                y: 20,
                rotateX: -90,
                stagger: 0.02,
                duration: 0.8,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                }
            });

            // Features Stagger
            gsap.from(".feature-item", {
                x: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".feature-list",
                    start: "top 80%",
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="platform" ref={containerRef} className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]" />

            <div className="container grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div ref={imageContainerRef} className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
                            alt="Coding Environment"
                            className="w-full h-full object-cover"
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
                                <div
                                    ref={progressBarRef}
                                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                                />
                            </div>
                            <div className="mt-2 text-xs text-gray-400 text-right">{t('showcase.testCases')}: 45/45</div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <div ref={titleRef} className="inline-block">
                            {t('showcase.title')}
                        </div>
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        {t('showcase.subtitle')}
                    </p>

                    <div className="space-y-4 feature-list">
                        {(t('showcase.features', { returnObjects: true }) as string[]).map((item, index) => (
                            <div key={index} className="feature-item flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-8 btn-secondary group">
                        Explore the IDE
                        <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
