import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#120807] px-5 py-10 text-white/70 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="font-serif text-2xl tracking-[.15em] text-white">
            NRITYA
          </div>

          <p className="mt-3 text-xs leading-5">
            Bringing heritage to life through movement.
          </p>

          <div className="mt-4 flex gap-4 text-xs">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-white">
            Explore
          </h4>

          <div className="mt-3 grid gap-2 text-xs">
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#performances"
              className="transition hover:text-white"
            >
              Performances
            </a>

            <a
              href="#gallery"
              className="transition hover:text-white"
            >
              Gallery
            </a>
          </div>
        </div>

        {/* Bookings */}
        <div>
          <h4 className="font-semibold text-white">
            Bookings
          </h4>

          <div className="mt-3 grid gap-2 text-xs">
            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Book a Performance
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-white">
            Connect
          </h4>

          <div className="mt-3 grid gap-3 text-xs">

            {/* Email */}
            <span className="flex items-center gap-2">
              <Mail size={14} />
              hello@nrityadance.com
            </span>

            {/* Phone */}
            <span className="flex items-center gap-2">
              <Phone size={14} />
              (929) 000-0000
            </span>

            {/* Location */}
            <span>
              New York, NY
            </span>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-[10px]">
        © 2026 Nritya Dance Collective. All Rights Reserved.
      </div>
    </footer>
  );
}
