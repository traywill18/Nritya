const images = [
 "/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg",
  "/images/gallery-4.jpg", "/images/gallery-5.jpg"
];


export default function gallerygrid() {
    return (
        <section id="gallery" className="bg-[#fffaf5] px-5 py-14 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <p className="section-kicker">Behind The Moments</p>
                        <h2 className="mt-2 text-4xl">Moments in Motion</h2>

                    </div>
                    <a href ="#contacts" className="hidden txt-xs font-bold text-[#a95f55] sm:block">View Full Gallery →</a>
                </div>
          <div className="grid auto-rows-[190px] grid-cols-2 gap-3 md:grid-cols-5">
          {images.map((src, i) => (
            <div
              key={src}
              className={`photo overflow-hidden rounded-xl bg-[#31150f] ${i === 1 || i === 3 ? "md:translate-y-5" : ""}`}
              style={{backgroundImage: `url("${src}")`}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}