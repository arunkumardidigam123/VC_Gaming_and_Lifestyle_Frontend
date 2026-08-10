import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CoreNetwork from './pages/CoreNetwork';
import About from './pages/About';
import Founder from './pages/Founder';
import Brands from './pages/Brands';
import Vision from './pages/Vision';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import CorporateHub from './pages/CorporateHub';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-on-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<CoreNetwork />} />
            <Route path="/corporate" element={<CorporateHub />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
