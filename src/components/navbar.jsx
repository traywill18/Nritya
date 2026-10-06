import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  "Home",
  "About",
  "Performances",
  "Services",
  "Gallery",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">

          <div className="grid h-10 w-10 place-items-center rounded-full border border-[#c79b5c] text-[#c79b5c]">
            ✦
          </div>

          <div>
            <div className="font-serif text-xl tracking-[.18em]">
              NRITYA
            </div>

            <div className="text-[8px] uppercase tracking-[.28em] text-white/70">
              Dance Collective
            </div>
          </div>

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">

          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-xs font-semibold transition hover:text-[#f4b49e] ${
                i === 0
                  ? "border-b border-[#f4b49e] pb-2"
                  : ""
              }`}
            >
              {link}
            </a>
          ))}

        </nav>

        {/* Desktop CTA */}
        <a
          href="/book"
          className="btn-primary hidden items-center gap-2 md:inline-flex"
        >
          Book a Performance
          <ArrowRight size={14} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/30 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#1b0d0b]/95 p-5 shadow-2xl backdrop-blur-md lg:hidden">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm last:border-0"
            >
              {link}
            </a>
          ))}

          {/* Mobile Booking Button */}
          <a
            href="/book"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 flex w-full items-center justify-center gap-2"
          >
            Book a Performance
            <ArrowRight size={14} />
          </a>
 
        </div>
      )}

    </header>
  );
}