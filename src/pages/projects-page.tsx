import { useLanguage } from '../contexts/language-context';
import { MetricStrip } from '../components/metric-strip';
import { CtaBanner } from '../components/cta-banner';

export const ProjectsPage = () => {
  const { t } = useLanguage();

  const projectImpactMetrics = [
    { value: '2', label: t('projects.metrics.platforms') },
    { value: '100+', label: t('projects.metrics.reports') },
    { value: '15%', label: t('projects.metrics.efficiency') },
    { value: '40%', label: t('projects.metrics.faster') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-blue-200/40 to-transparent dark:from-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-radial from-indigo-200/40 to-transparent dark:from-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('projects.title')}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* RayNext Project Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('projects.raynext.title')} – {t('projects.raynext.subtitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {t('projects.raynext.description')}
              </p>
              <ul className="mt-6 space-y-4">
                <FeatureListItem text={t('projects.raynext.feature1.full')} />
                <FeatureListItem text={t('projects.raynext.feature2.full')} />
                <FeatureListItem text={t('projects.raynext.feature3.full')} />
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 items-center">
                <div className="flex flex-wrap gap-2">
                  {['Java SpringBoot', 'React', 'Microservices', 'PostgreSQL', 'Kubernetes', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('projects.raynext.title')}</h3>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">✓</div>
                      <div className="text-sm text-blue-100">{t('projects.raynext.stats.operations')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">24/7</div>
                      <div className="text-sm text-blue-100">{t('projects.raynext.stats.availability')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">100+</div>
                      <div className="text-sm text-blue-100">{t('projects.raynext.stats.daily')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RayData Project Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('projects.raydata.title')}</h3>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">3</div>
                      <div className="text-sm text-indigo-100">{t('projects.raydata.stats.dashboards')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">100+</div>
                      <div className="text-sm text-indigo-100">{t('projects.raydata.stats.reports')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">AI</div>
                      <div className="text-sm text-indigo-100">{t('projects.raydata.stats.analytics')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('projects.raydata.title')} – {t('projects.raydata.subtitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {t('projects.raydata.description')}
              </p>
              <ul className="mt-6 space-y-4">
                <FeatureListItem text={t('projects.raydata.feature1.full')} />
                <FeatureListItem text={t('projects.raydata.feature2.full')} />
                <FeatureListItem text={t('projects.raydata.feature3.full')} />
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 items-center">
                <div className="flex flex-wrap gap-2">
                  {['React', 'Recharts', 'Leaflet', 'Data Warehouse', 'OLAP Cubes', 'PostgreSQL', 'Redis', 'Elasticsearch'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact Section */}
      <MetricStrip metrics={projectImpactMetrics} />

      <CtaBanner
        title={t('projects.cta.title')}
        description={t('projects.cta.description')}
        primaryLink={{ href: '/expertise', label: t('projects.cta.primary') }}
      />
    </div>
  );
};

const FeatureListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start">
    <svg className="flex-shrink-0 h-6 w-6 text-cyan-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="ml-3 text-gray-700 dark:text-gray-300">{text}</span>
  </li>
);
