import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";


export default function featuredperformance() {
    return (
        <section className="relative overflow-hidden bg-[#160a08] text-white">
            <div className="photo absolute inset-0 opacity-80"
                style={{backgroundImage: 'linear-gradient(90deg,rgba(17,6,4,.95),rgba(17,6,4,.25)), url("/images/featured.jpg")'}}
            />
            <div className="relative mx-aut flex min-h-[330px] max-w-7xl items-end justify-between px-5 py-12 lg:px-8">
                <div>
                    <p className="section kicker text-[#9a889]"> Featured Performance</p>
                    <h2 className="mt-2 text-4xl md:text-5xl">Diwali Celebration 2026</h2>
                    <p className="mt-2 max-w-md text-sm text-white/65">
                    A vibrant celebration of light, culture, and unity through traditional dance and storytelling.
                    </p>

                    <a a href="#contact" className="btn-primary mt-5">Watch Performance<ArrowRight size={14} /></a>
                </div>
                <div className="hidden gap-2 md:flex">
                    <buton className="rounded-full border border-white/40 p-2"><ChevronLeft size={18}></ChevronLeft></buton>
                    <buton className="rounded-full border border-white/40 p-2"><ChevronRight size={18}></ChevronRight></buton>
                </div>
            </div>
        </section>
    )
}