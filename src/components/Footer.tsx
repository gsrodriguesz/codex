import { Github, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import logo from '../assets/codex_logo.svg';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#030712] border-t border-white/10 pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-4">
                            <Image src={logo} alt="CODEX Logo" className="w-40 object-cover" />
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">{t('footer.platform')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.features')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.pricing')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.download')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.integrations')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">{t('footer.resources')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.documentation')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.apiReference')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.community')}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t('footer.links.blog')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-500">
                        {t('footer.copyright')}
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
