import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Partners from "./pages/Partners";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Radiology from "./pages/solutions/Radiology";
import Endoscopy from "./pages/solutions/Endoscopy";
import OperatingTheatre from "./pages/solutions/OperatingTheatre";
import ICU from "./pages/solutions/ICU";
import Neurology from "./pages/solutions/Neurology";
import Cardiology from "./pages/solutions/Cardiology";
import RenalCare from "./pages/solutions/RenalCare";
import Microscopy from "./pages/solutions/Microscopy";
import Consumables from "./pages/solutions/Consumables";
import SonyPrinters from "./pages/solutions/SonyPrinters";
import ContrastMedia from "./pages/solutions/ContrastMedia";
import MaternalInfantCare from "./pages/solutions/MaternalInfantCare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/solutions/radiology" element={<Radiology />} />
          <Route path="/solutions/endoscopy" element={<Endoscopy />} />
          <Route path="/solutions/operating-theatre" element={<OperatingTheatre />} />
          <Route path="/solutions/icu" element={<ICU />} />
          <Route path="/solutions/neurology" element={<Neurology />} />
          <Route path="/solutions/cardiology" element={<Cardiology />} />
          <Route path="/solutions/renal-care" element={<RenalCare />} />
          <Route path="/solutions/microscopy" element={<Microscopy />} />
          <Route path="/solutions/consumables" element={<Consumables />} />
          <Route path="/solutions/sony-printers" element={<SonyPrinters />} />
          <Route path="/solutions/contrast-media" element={<ContrastMedia />} />
          <Route path="/solutions/maternal-infant-care" element={<MaternalInfantCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
