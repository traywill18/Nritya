import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import StorySection from "./components/storysection.jsx";
import OccasionCards from "./components/occassioncards.jsx";
import FeaturedPerformance from "./components/featuredperformance.jsx";
import GalleryGrid from "./components/gallerygrid.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";

import BookPerformance from "./pages/bookperformance.jsx";


function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <StorySection />
        <OccasionCards />
        <FeaturedPerformance />
        <GalleryGrid />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Booking Page */}
        <Route
          path="/book"
          element={<BookPerformance />}
        />

      </Routes>
    </BrowserRouter>
  );
}