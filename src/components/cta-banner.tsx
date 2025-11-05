import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/language-context';

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLink: { href: string; label: string };
  secondaryLink?: { href: string; label: string };
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ title, description, primaryLink, secondaryLink }) => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial from-blue-400/50 to-transparent rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-radial from-purple-400/50 to-transparent rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={primaryLink.href}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-[1.02] transition-transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {primaryLink.label}
              </Link>
              {secondaryLink && (
                <Link
                  to={secondaryLink.href}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 dark:text-white bg-white/60 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors duration-300 shadow-lg"
                >
                  {secondaryLink.label}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

