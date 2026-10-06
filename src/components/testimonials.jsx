import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  ["Priya & Arjun", "Wedding · New York", "The performance was the highlight of our wedding! Our guests are still talking about it."],
  ["Sunita Patel", "Cultural Event Organizer", "Professional, punctual and incredibly talented. They brought so much energy and culture to our festival."],
  ["Raj & Meera", "Private Celebration", "We booked them for my sister’s engagement and it was the best decision we made!"],
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f9e7e4] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="section-kicker">Kind Words</p>
        <h2 className="mt-2 text-4xl">Loved by Our Clients</h2>

        <Swiper
          className="mt-8 pb-10"
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 3 } }}
        >
          {testimonials.map(([name, role, quote]) => (
            <SwiperSlide key={name}>
              <article className="h-full rounded-2xl bg-[#fffaf5] p-7 text-left shadow-sm">
                <div className="flex gap-1 text-[#c88b5d]">
                  {[1,2,3,4,5].map((n) => <Star key={n} size={13} fill="currentColor" />)}
                </div>
                <p className="mt-4 text-sm leading-6 text-black/65">“{quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold">{name}</p>
                  <p className="text-xs text-black/45">{role}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}