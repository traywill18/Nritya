import { motion } from "framer-motion";
import { Heart, Sparkles, Flower2, ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <section id="about" className="bg-[#fffaf5] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="photo min-h-[380px] rounded-2xl bg-[#301711]" style={{backgroundImage: 'url("/images/story-dancer.jpg")'}} />
        </motion.div>

        <div>
          <p className="section-kicker">Our Story</p>
          <h2 className="mt-3 text-4xl leading-none md:text-5xl">
            More Than Dance.
            <br />It’s Our <span className="script text-5xl text-[#b86c60]">Heritage.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-black/60">
            Rooted in Indo-Caribbean culture and inspired by the rich traditions of
            Indian dance, our performances blend storytelling, rhythm, and grace to
            create experiences that stay with you long after the music ends.
          </p>
          <a href="#contact" className="btn-primary mt-6">
            Discover Our Story <ArrowRight size={14} />
          </a>

          <div className="mt-8 grid gap-5 border-t border-black/10 pt-6 sm:grid-cols-3">
            <Value icon={<Flower2 />} title="Indo-Caribbean Roots" text="A unique blend of culture and tradition." />
            <Value icon={<Sparkles />} title="Authentic & Elegant" text="Classical grace with a modern touch." />
            <Value icon={<Heart />} title="Passionate & Professional" text="Dedicated to meaningful experiences." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ icon, title, text }) {
  return (
    <div>
      <div className="mb-3 text-[#b86c60]">{icon}</div>
      <h3 className="font-serif text-lg">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-black/50">{text}</p>
    </div>
  );
}