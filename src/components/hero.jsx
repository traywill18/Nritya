import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Gem } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[680px] overflow-hidden bg-[#120807] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(154,70,45,.35),transparent_38%)]" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center px-5 pt-28 lg:grid-cols-2 lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="relative z-10 pb-10"
        >
          <p className="section-kicker text-[#d9a889]">Culture. Heritage. Expression.</p>
          <h1 className="mt-4 max-w-xl text-5xl leading-[.9] md:text-7xl">
            Where Heritage
            <br /> Comes Alive
            <br /><span className="script text-5xl text-[#e8aa91] md:text-7xl">Through Dance.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-6 text-white/70">
            Authentic Indo-Caribbean and Indian-inspired performances for weddings,
            celebrations, cultural events, and unforgettable moments.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a  href="/book"
          className="btn-primary hidden items-center gap-2 md:inline-flex">
              Book a Performance <ArrowRight size={14} />
            </a>
            <a href="#performances" className="btn-outline">Explore Our Performances</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-photo relative min-h-[430px] overflow-hidden rounded-t-[180px] bg-[#2a1510] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[53%] lg:rounded-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#120807] via-transparent to-transparent lg:block" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-5 border-t border-white/10 px-5 py-5 sm:grid-cols-3 lg:px-8">
        <Feature icon={<Heart size={17} />} text="Weddings" />
        <Feature icon={<Sparkles size={17} />} text="Cultural Events" />
        <Feature icon={<Gem size={17} />} text="Private Celebrations" />
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/85">
      <span className="text-[#e8aa91]">{icon}</span>{text}
    </div>
  );
}