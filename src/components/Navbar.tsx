import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Sticky Header Animation
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top top",
                end: 99999,
                onUpdate: (self) => {
                    if (self.scroll() > 20) {
                        gsap.to(navRef.current, {
                            backgroundColor: "rgba(3, 7, 18, 0.8)",
                            backdropFilter: "blur(12px)",
                            borderBottomColor: "rgba(255, 255, 255, 0.05)",
                            paddingTop: "1rem",
                            paddingBottom: "1rem",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    } else {
                        gsap.to(navRef.current, {
                            backgroundColor: "transparent",
                            backdropFilter: "blur(0px)",
                            borderBottomColor: "transparent",
                            paddingTop: "1.5rem",
                            paddingBottom: "1.5rem",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            });

            // Logo Animation
            if (logoRef.current) {
                const paths = logoRef.current.querySelectorAll("path");
                gsap.fromTo(paths,
                    { opacity: 0, scale: 0.8, transformOrigin: "center" },
                    {
                        opacity: 1,
                        scale: 1,
                        stagger: 0.05,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        delay: 0.5
                    }
                );
            }
        }, navRef);

        return () => ctx.revert();
    }, []);

    // Mobile Menu Animation
    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    }, [isMobileMenuOpen]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('navbar.features'), href: '#features' },
        { name: t('navbar.platform'), href: '#platform' },
        { name: t('navbar.community'), href: '#community' },
        { name: t('navbar.pricing'), href: '#pricing' },
    ];

    const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
        const line = e.currentTarget.querySelector('.nav-line');
        if (isEnter) {
            gsap.to(line, { width: "100%", duration: 0.3, ease: "power2.out" });
            gsap.to(e.currentTarget, { color: "var(--color-primary)", duration: 0.3 });
        } else {
            gsap.to(line, { width: "0%", duration: 0.3, ease: "power2.out" });
            gsap.to(e.currentTarget, { color: "#d1d5db", duration: 0.3 });
        }
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 py-6 border-b border-transparent"
        >
            <div className="container flex items-center justify-between">
                <div ref={logoRef} className="font-mono text-2xl font-bold tracking-tighter cursor-pointer flex items-center">
                    <svg className="h-8 w-auto" viewBox="0 0 522 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M86.9591 39.3756H20.5092C17.0638 39.3756 14.7667 41.6724 14.7667 45.1181V94.3402C14.7667 97.7854 17.0638 100.083 20.5092 100.083H86.9591C87.9435 100.083 88.5997 100.739 88.5997 101.723V113.209C88.5997 114.193 87.9435 114.849 86.9591 114.849H21.8217C20.5092 114.849 19.0327 114.193 18.2122 113.373L1.47676 96.637C0.656469 95.8167 0 94.34 0 93.0275V45.9384C0 44.9541 0.492399 43.8054 1.14864 43.1492L18.5405 25.7573C19.1965 25.1011 20.3452 24.6089 21.3297 24.6089H86.9591C87.9435 24.6089 88.5997 25.2651 88.5997 26.2497V37.7348C88.5997 38.7191 87.9435 39.3756 86.9591 39.3756Z" fill="#00F3FF" />
                        <path d="M101.717 41.3438C101.717 40.1956 102.538 39.3751 103.686 39.3751H114.515C115.663 39.3751 116.483 40.1956 116.483 41.3438V94.3395C116.483 97.7852 118.78 100.082 122.226 100.082H180.472C181.456 100.082 182.113 100.739 182.113 101.723V113.208C182.113 114.193 181.456 114.849 180.472 114.849H123.047C122.062 114.849 120.913 114.357 120.257 113.7L102.866 96.3082C102.209 95.6524 101.717 94.5036 101.717 93.519V41.3438Z" fill="#00F3FF" />
                        <path d="M118.124 24.6089H175.55C176.534 24.6089 177.683 25.1011 178.339 25.7571L195.731 43.1492C196.387 43.805 196.879 44.9538 196.879 45.9384V98.1138C196.879 99.262 196.059 100.083 194.91 100.083H184.082C182.933 100.083 182.113 99.262 182.113 98.1138V45.1179C182.113 41.6722 179.816 39.3754 176.37 39.3754H118.124C117.14 39.3754 116.483 38.7189 116.483 37.7348V26.2495C116.483 25.2647 117.14 24.6089 118.124 24.6089Z" fill="white" />
                        <path d="M226.404 24.6109H288.751C289.736 24.6109 290.392 23.9547 290.392 22.9701V1.64059C290.392 0.65624 291.048 0 292.033 0H303.518C304.502 0 305.159 0.65624 305.159 1.64059V113.211C305.159 114.195 304.502 114.851 303.518 114.851H231.818C230.505 114.851 229.029 114.195 228.208 113.375L211.473 96.6391C210.653 95.8188 209.996 94.342 209.996 93.0295V41.0182C209.996 40.0336 210.653 39.3776 211.637 39.3776H223.122C224.107 39.3776 224.763 40.0336 224.763 41.0182V94.3422C224.763 97.7875 227.06 100.085 230.505 100.085H284.65C288.095 100.085 290.392 97.7875 290.392 94.3422V45.1202C290.392 41.6745 288.095 39.3776 284.65 39.3776H226.404C225.419 39.3776 224.763 38.7212 224.763 37.7368V26.2518C224.763 25.2672 225.419 24.6109 226.404 24.6109Z" fill="#00F3FF" />
                        <path d="M349.449 62.3457H392.929C396.374 62.3457 398.671 60.0486 398.671 56.6032V45.1181C398.671 41.6724 396.374 39.3756 392.929 39.3756H338.784C335.339 39.3756 333.042 41.6724 333.042 45.1181V94.3402C333.042 97.7854 335.339 100.083 338.784 100.083H405.234C406.218 100.083 406.875 100.739 406.875 101.723V113.209C406.875 114.193 406.218 114.849 405.234 114.849H340.097C338.784 114.849 337.308 114.193 336.487 113.373L319.752 96.637C318.931 95.8167 318.275 94.34 318.275 93.0275V45.9384C318.275 44.9541 318.767 43.8054 319.424 43.1492L336.815 25.7573C337.472 25.1011 338.62 24.6089 339.605 24.6089H392.108C393.093 24.6089 394.241 25.1011 394.897 25.7573L412.289 43.1492C412.945 43.8054 413.438 44.9541 413.438 45.9384V55.7826C413.438 56.7672 412.945 57.9156 412.289 58.5721L394.897 75.964C394.241 76.6202 393.093 77.1124 392.108 77.1124H349.449C348.465 77.1124 347.808 76.4562 347.808 75.4716V63.9865C347.808 63.0022 348.465 62.3457 349.449 62.3457Z" fill="#00F3FF" />
                        <path d="M519.748 114.849H508.92C507.77 114.849 506.95 114.029 506.95 112.88V82.8551C506.95 79.4092 504.654 77.1124 501.208 77.1124H448.212C447.064 77.1124 445.751 76.62 444.931 75.7995L427.867 58.7362C427.047 57.9156 426.554 56.6034 426.554 55.4545V26.2493C426.554 25.2647 427.21 24.6089 428.195 24.6089H439.352C440.5 24.6089 441.322 25.4294 441.322 26.5776V56.6032C441.322 60.0484 443.618 62.3455 447.064 62.3455H500.387C501.372 62.3455 502.521 62.8376 503.176 63.4941L520.569 80.8857C521.225 81.5422 521.717 82.6909 521.717 83.675V112.88C521.717 114.029 520.897 114.849 519.748 114.849Z" fill="#00F3FF" />
                        <path d="M426.554 78.7528C426.554 77.7682 427.21 77.1124 428.195 77.1124H439.681C440.665 77.1124 441.322 77.7682 441.322 78.7528V113.208C441.322 114.193 440.665 114.849 439.681 114.849H428.195C427.21 114.849 426.554 114.193 426.554 113.208V78.7528Z" fill="white" />
                        <path d="M506.95 26.2493C506.95 25.2647 507.607 24.6089 508.591 24.6089H520.077C521.06 24.6089 521.717 25.2647 521.717 26.2493V60.7049C521.717 61.6895 521.06 62.3455 520.077 62.3455H508.591C507.607 62.3455 506.95 61.6895 506.95 60.7049V26.2493Z" fill="white" />
                    </svg>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 relative group"
                            onMouseEnter={(e) => handleLinkHover(e, true)}
                            onMouseLeave={(e) => handleLinkHover(e, false)}
                        >
                            {link.name}
                            <span className="nav-line absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-none" />
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        <Globe size={18} />
                        {i18n.language.toUpperCase()}
                    </button>
                    <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        {t('navbar.login')}
                    </button>
                    <button className="btn-primary text-sm">
                        {t('navbar.getStarted')}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                ref={mobileMenuRef}
                className="md:hidden bg-[#030712] border-b border-white/10 overflow-hidden h-0 opacity-0"
            >
                <div className="container py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-white/10 my-2" />
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-white"
                    >
                        <Globe size={20} />
                        {i18n.language === 'en' ? 'Português' : 'English'}
                    </button>
                    <button className="text-left text-lg font-medium text-gray-300 hover:text-white">
                        {t('navbar.login')}
                    </button>
                    <button className="btn-primary w-full text-center">
                        {t('navbar.getStarted')}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
