import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-context';
import { LanguageProvider } from './contexts/language-context';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { HomePage } from './pages/home-page';
import { AboutPage } from './pages/about-page';
import { ProjectsPage } from './pages/projects-page';
import { ExpertisePage } from './pages/expertise-page';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex flex-col">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/expertise" element={<ExpertisePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

