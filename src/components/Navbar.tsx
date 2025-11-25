import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
            style={{ backgroundColor: isScrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent' }}
        >
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                    <img src="/src/assets/codex_logo.svg" alt="CODEX Logo" className="object-cover w-40" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
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
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#030712] border-b border-white/10 overflow-hidden"
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
