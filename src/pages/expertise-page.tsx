import { useLanguage } from '../contexts/language-context';
import { CtaBanner } from '../components/cta-banner';

const aiExpertise = [
  { key: 'llm', titleKey: 'expertise.ai.llm.title', descKey: 'expertise.ai.llm.desc' },
  { key: 'a2a', titleKey: 'expertise.ai.a2a.title', descKey: 'expertise.ai.a2a.desc' },
  { key: 'bigdata', titleKey: 'expertise.ai.bigdata.title', descKey: 'expertise.ai.bigdata.desc' },
];

const softwareExpertise = [
  { key: 'java', titleKey: 'expertise.software.java.title', descKey: 'expertise.software.java.desc' },
  { key: 'react', titleKey: 'expertise.software.react.title', descKey: 'expertise.software.react.desc' },
  { key: 'microservices', titleKey: 'expertise.software.microservices.title', descKey: 'expertise.software.microservices.desc' },
  { key: 'database', titleKey: 'expertise.software.database.title', descKey: 'expertise.software.database.desc' },
  { key: 'kubernetes', titleKey: 'expertise.software.kubernetes.title', descKey: 'expertise.software.kubernetes.desc' },
  { key: 'infrastructure', titleKey: 'expertise.software.infrastructure.title', descKey: 'expertise.software.infrastructure.desc' },
];

export const ExpertisePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-cyan-200/40 to-transparent dark:from-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-radial from-blue-200/40 to-transparent dark:from-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('expertise.title')}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            {t('expertise.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Expertise Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Artificial Intelligence */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('expertise.ai.title')}</h2>
              </div>
              <div className="space-y-6">
                {aiExpertise.map((item) => (
                  <ExpertiseItem
                    key={item.key}
                    title={t(item.titleKey)}
                    description={t(item.descKey)}
                  />
                ))}
              </div>
            </div>

            {/* Software Engineering */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-white">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('expertise.software.title')}</h2>
              </div>
              <div className="space-y-6">
                {softwareExpertise.map((item) => (
                  <ExpertiseItem
                    key={item.key}
                    title={t(item.titleKey)}
                    description={t(item.descKey)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={t('expertise.cta.title')}
        description={t('expertise.cta.description')}
        primaryLink={{ href: '/projects', label: t('expertise.cta.primary') }}
      />
    </div>
  );
};

interface ExpertiseItemProps {
  title: string;
  description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ title, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

