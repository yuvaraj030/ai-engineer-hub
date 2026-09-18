import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1" id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai" element={<CategoryPage slug="ai" />} />
            <Route path="/python" element={<CategoryPage slug="python" />} />
            <Route path="/ai-tools" element={<CategoryPage slug="ai-tools" />} />
            <Route path="/local-ai" element={<CategoryPage slug="local-ai" />} />
            <Route path="/ollama" element={<CategoryPage slug="ollama" />} />
            <Route path="/remote-jobs" element={<CategoryPage slug="remote-jobs" />} />
            <Route path="/tutorials" element={<CategoryPage slug="tutorials" />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
