import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/language-context';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white/30 dark:bg-gray-950/30 backdrop-blur-lg mt-24 ring-1 ring-black/5 dark:ring-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-blue-600 dark:text-blue-400">RailHubDev</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {t('footer.description')}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 italic">
              {t('footer.disclaimer')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">
              {t('footer.quickLinks')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t('nav.expertise')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Tech */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">
              {t('footer.coreTech')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">{t('footer.tech.ai')}</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">{t('footer.tech.java')}</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">{t('footer.tech.react')}</li>
              <li className="text-sm text-gray-600 dark:text-gray-400">{t('footer.tech.kubernetes')}</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">
              {t('footer.connect')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
                {t('footer.contact')}
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
                {t('footer.linkedin')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            &copy; {new Date().getFullYear()} RailHubDev. {t('footer.rights')}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 italic">
            {t('footer.unofficial')}
          </p>
        </div>
      </div>
    </footer>
  );
};

