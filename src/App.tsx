import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PageTransition>
          <Index />
        </PageTransition>
      } />
      <Route path="/education" element={
        <PageTransition>
          <Education />
        </PageTransition>
      } />
      <Route path="/projects" element={
        <PageTransition>
          <Projects />
        </PageTransition>
      } />
      <Route path="/resume" element={
        <PageTransition>
          <Resume />
        </PageTransition>
      } />
      <Route path="/contact" element={
        <PageTransition>
          <Contact />
        </PageTransition>
      } />
      <Route path="*" element={
        <PageTransition>
          <NotFound />
        </PageTransition>
      } />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Site-wide logo at top-left */}
        <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center">
          <img
            src="/kendi prof.jpg"
            alt="Dorcas Kendi Logo"
            className="w-10 h-10 md:w-13 md:h-13 rounded-full object-cover shadow-lg border-2 border-white"
          />
          <span className="ml-3 md:ml-4 font-bold text-lg md:text-xl lg:text-2xl text-white tracking-wide" style={{ textShadow: '0 2px 8px #0008' }}>
            Dorcas Kendi
          </span>
        </div>
        <div className="min-h-screen">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
