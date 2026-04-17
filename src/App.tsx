// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton";
// import HomePage from "@/pages/HomePage";
// import AboutPage from "@/pages/AboutPage";
// import ServicesPage from "@/pages/ServicesPage";
// import ContactPage from "@/pages/ContactPage";
// import NotFound from "@/pages/NotFound";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const queryClient = new QueryClient();

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
//   return null;
// }

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <BrowserRouter>
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//         <WhatsAppButton />
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;



// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton";
// import HomePage from "@/pages/HomePage";
// import AboutPage from "@/pages/AboutPage";
// import ServicesPage from "@/pages/ServicesPage";
// import ContactPage from "@/pages/ContactPage";
// import NotFound from "@/pages/NotFound";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// // Import your logo
// import logo from "@/assets/logo3.png";

// const queryClient = new QueryClient();

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <BrowserRouter>
//         <div className="relative min-h-screen w-full">
//           {/* FIXED WATERMARK LAYER 
//               We use z-[9999] to put it ABOVE the background colors, 
//               but pointer-events-none so you can still click things.
//           */}
//           <div 
//             className="fixed inset-0 z-[50] pointer-events-none flex items-center justify-center overflow-hidden"
//             aria-hidden="true"
//           >
//             <img 
//               src={logo} 
//               alt="Elite Bridge Watermark" 
//               className="w-[60%] max-w-3xl object-contain select-none opacity-[0.04] grayscale"
//             />
//           </div>

//           <ScrollToTop />
//           <Navbar />
          
//           <main className="relative z-10">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/services" element={<ServicesPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </main>

//           <Footer />
//           <WhatsAppButton />
//         </div>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;









import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import your logo
import logo from "@/assets/logo3.png";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="relative min-h-screen w-full">
          {/* FIXED WATERMARK LAYER 
              - Removed 'grayscale' to show original colors.
              - Kept 'pointer-events-none' so users can click through the logo.
              - Adjusted opacity to 0.05 (adjust this value as needed).
          */}
          <div 
            className="fixed inset-0 z-[50] pointer-events-none flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <img 
              src={logo} 
              alt="Elite Bridge Watermark" 
              className="w-[60%] max-w-3xl object-contain select-none opacity-[0.05]"
            />
          </div>

          <ScrollToTop />
          <Navbar />
          
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;