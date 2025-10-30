import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Accommodations from "./pages/Accommodations";
import Inquiries from "./pages/Inquiries";
import NotFound from "./pages/NotFound";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};


const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
  
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />


        <Route
          path="/about"
          element={
            <motion.div {...pageVariants}>
              <About />
            </motion.div>
          }
        />


        <Route
          path="/activities"
          element={
            <motion.div {...pageVariants}>
              <Activities />
            </motion.div>
          }
        />

 
        <Route
          path="/events"
          element={
            <motion.div {...pageVariants}>
              <Events />
            </motion.div>
          }
        />


        <Route
          path="/gallery"
          element={
            <motion.div {...pageVariants}>
              <Gallery />
            </motion.div>
          }
        />

  
        <Route
          path="/menu"
          element={
            <motion.div {...pageVariants}>
              <Menu />
            </motion.div>
          }
        />

   
        <Route
          path="/accommodations"
          element={
            <motion.div {...pageVariants}>
              <Accommodations />
            </motion.div>
          }
        />

  
        <Route
          path="/contact"
          element={
            <motion.div {...pageVariants}>
              <Contact />
            </motion.div>
          }
        />

   
        <Route
          path="/inquiries"
          element={
            <motion.div {...pageVariants}>
              <Inquiries />
            </motion.div>
          }
        />


        <Route
          path="*"
          element={
            <motion.div {...pageVariants}>
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#faf8f6] text-gray-800">
        <Navbar />
        <main className="grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
