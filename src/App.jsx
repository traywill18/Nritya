// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Website Components
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import StorySection from "./components/storysection.jsx";
import OccasionCards from "./components/occassioncards.jsx";
import FeaturedPerformance from "./components/featuredperformance.jsx";
import GalleryGrid from "./components/gallerygrid.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";

// Booking Page
import BookPerformance from "./pages/bookperformance.jsx";

// Admin Pages
import AdminLogin from "./pages/admin/adminlogin.jsx";
import AdminDashboard from "./pages/admin/admindashboard.jsx";
import AdminProtectedRoute from "./pages/admin/adminprotectedroute.jsx";

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

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
        {/* Admin Dashboard — Protected */}
        <Route element={<AdminProtectedRoute />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}