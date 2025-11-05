import { useLanguage } from '../contexts/language-context';
import { Link } from 'react-router-dom';
import trainImage from '../assets/slider2.png';
import { MetricStrip } from '../components/metric-strip';
import { CtaBanner } from '../components/cta-banner';

export const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Unofficial Notice */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800">
        <div className="container mx-auto px-4 py-2 text-center">
          <p className="text-xs text-yellow-800 dark:text-yellow-200 italic">
            {t('home.unofficial.notice')}
          </p>
        </div>
      </div>
      
      {/* Hero Section with Train Image */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Train Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={trainImage}
            alt="Train"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/35 to-indigo-900/40 dark:from-gray-900/50 dark:via-gray-900/45 dark:to-gray-900/50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-6 drop-shadow-2xl">
              {t('home.title')}
            </h1>
          </div>
          <div className="mb-8 animate-fade-in-delay">
            <p className="text-3xl md:text-4xl font-semibold text-blue-100 mb-4 drop-shadow-lg">
              {t('home.subtitle')}
            </p>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {t('home.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Link
              to="/projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t('nav.about')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('home.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                RayNext
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.raynext.desc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                RayData
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.raydata.desc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.innovation.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t('home.projects.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              {t('home.projects.subtitle')}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <ProjectPreviewCard
              title="RayNext"
              subtitle={t('projects.raynext.subtitle')}
              description={t('projects.raynext.description')}
              link="/projects"
              tech={['Java SpringBoot', 'React', 'Microservices', 'PostgreSQL', 'Kubernetes']}
            />
            <ProjectPreviewCard
              title="RayData"
              subtitle={t('projects.raydata.subtitle')}
              description={t('projects.raydata.description')}
              link="/projects"
              tech={['React', 'Recharts', 'Data Warehouse', 'OLAP Cubes', 'Elasticsearch']}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <MetricStrip metrics={[
        { value: '2', label: t('home.stats.projects') },
        { value: '100+', label: t('home.stats.reports') },
        { value: '15%', label: t('home.stats.efficiency') },
        { value: '24/7', label: t('home.stats.availability') },
      ]} />

      <CtaBanner
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        primaryLink={{ href: '/expertise', label: t('home.cta.primary') }}
        secondaryLink={{ href: '/about', label: t('home.cta.secondary') }}
      />
    </div>
  );
};

interface ProjectPreviewCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  tech: string[];
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ title, subtitle, description, link, tech }) => (
  <Link to={link} className="block group">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-cyan-500/20">
      <h3 className="text-2xl font-bold bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 text-transparent bg-clip-text">{title}</h3>
      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-1">{subtitle}</p>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 text-sm font-semibold text-blue-600 dark:text-cyan-400 flex items-center group-hover:text-blue-500 dark:group-hover:text-cyan-300">
        {title === 'RayNext' ? 'Learn More' : 'Learn More'}
        <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  </Link>
);

