import {Routes,Route, useLocation} from 'react-router-dom'
import {AnimatePresence,motion} from "framer-motion"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'


function App() {
const location=useLocation();
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
    <div className='flex-grow p-6'>
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/home"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/projects"
              element={
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // start hidden
      animate={{ opacity: 1, y: 0 }}    // fade in
      exit={{ opacity: 0, y: -20 }}     // fade out
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
export default App
