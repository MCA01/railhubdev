import { useLanguage } from '../contexts/language-context';
import { CtaBanner } from '../components/cta-banner';

const technologies = [
  'Java SpringBoot',
  'React',
  'TypeScript',
  'Microservices',
  'PostgreSQL',
  'Kubernetes',
  'Docker',
  'Redis',
  'Elasticsearch',
  'Node.js',
  'Tailwind CSS',
];

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Header with Different Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-indigo-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                {t('about.badge')}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Values - Different Layout */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('about.vision.title')}</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.vision.description')}
              </p>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-base text-gray-500 dark:text-gray-400 italic">
                  {t('about.vision.quote')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ValueBox icon="🚀" title={t('about.values.innovation')} />
              <ValueBox icon="🎯" title={t('about.values.excellence')} />
              <ValueBox icon="🤝" title={t('about.values.collaboration')} />
              <ValueBox icon="🔒" title={t('about.values.trust')} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline Style */}
      <section className="py-20 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-gray-800/50 dark:via-gray-800/30 dark:to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.journey.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('about.journey.subtitle')}</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <JourneyStep
              number="01"
              title={t('about.journey.step1.title')}
              description={t('about.journey.step1.desc')}
            />
            <JourneyStep
              number="02"
              title={t('about.journey.step2.title')}
              description={t('about.journey.step2.desc')}
            />
            <JourneyStep
              number="03"
              title={t('about.journey.step3.title')}
              description={t('about.journey.step3.desc')}
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.different.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureHighlight
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title={t('about.different.reliability.title')}
              description={t('about.different.reliability.desc')}
            />
            <FeatureHighlight
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title={t('about.different.innovation.title')}
              description={t('about.different.innovation.desc')}
            />
            <FeatureHighlight
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title={t('about.different.team.title')}
              description={t('about.different.team.desc')}
            />
          </div>
        </div>
      </section>

      {/* Technologies - Enhanced Style */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.technologies')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">{t('about.technologies.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <TechCard key={tech} tech={tech} delay={index * 50} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={t('about.cta.title')}
        description={t('about.cta.description')}
        primaryLink={{ href: '/projects', label: t('about.cta.primary') }}
        secondaryLink={{ href: '/expertise', label: t('about.cta.secondary') }}
      />
    </div>
  );
};

const ValueBox: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
  </div>
);

const JourneyStep: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {number}
      </div>
    </div>
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const FeatureHighlight: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const TechCard: React.FC<{ tech: string; delay: number }> = ({ tech, delay }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-2 h-2 rounded-full bg-blue-500 mx-auto"></div>
    </div>
    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {tech}
    </span>
  </div>
);
