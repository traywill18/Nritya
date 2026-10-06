import { ArrowRight } from "lucide-react";


const cards = [
    ["Wedding", "Making your special day even more memorable with a stunning cultural performance.", "/images/wedding.jpg"],
    ["Private Celebration", "Birthdays, anniversaries and private events filled with culture and energy.", "/images/private.jpg"],
    ["Cultural Events", "Bring your festival, community event, celebration to life", "/images/cultural.jpg"],

];

export default function OccasionCards() {
    return(
        <section id="services" className="bg-[#f7eee7] px-5 py-14 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <p className="section-kicker"> Performance For Every Occasion</p>
                    <h2 className="mt-2 text-4xl">Choose Your Celebration</h2>

                </div>
                <div id="performances" className="mt-8 grid gap-4 md:grid-cols-3">
                    {cards.map(([title, text, image]) => (
                        <article
                            key={(title)}
                            className="photo group relative min-h-[300px] overflow-hidden rounded-2xl bg-[#3a1a12]"
                            style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(20,8,6,.9) 100%), url("${image}")` }}
                        >
                            <div className="absolute inset-0 bottom-0 p-6 text-white">
                                <h3 className="text-3xl">{title}</h3>
                                <p className="mt-2 text-xs leading-5 text-white/75">{text}</p>
                                <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-2 text-xs font-bold">
                                    Learn More <ArrowRight size={13} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
