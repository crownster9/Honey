export default function About() { 
    const image = "https://images.unsplash.com/photo-1554230513-961cc6696a80?auto=format&fit=crop&fm=jpg&q=85&w=1300";
    return (
        <>
<section id="story" className="bg-[#013e37] mt-20 text-[#fffaf0] relative overflow-hidden py-[120px] px-[5vw]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-[7vw] items-center">

        {/* ---- Image side ---- */}
        <div className="relative h-[430px] md:h-[600px] rounded-[40px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554230513-961cc6696a80?auto=format&fit=crop&fm=jpg&q=85&w=1300"
            alt="Close-up of a honey bee on honeycomb"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#013e37]/35 to-transparent" />
        </div>

        {/* ---- Text side ---- */}
        <div>
          <div className="text-xs tracking-[0.16em] uppercase font-black opacity-55 mb-3">
            Our story
          </div>

          <h2 className="font-serif font-medium text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.95] tracking-[-0.045em] text-[#fffaf0] max-w-[650px]">
            Good honey starts with <em className="text-[#ffefb3] italic">good flowers.</em>
          </h2>

          <p className="max-w-[560px] mt-7 text-white/68 leading-[1.9]">
            We keep the design simple because the product is simple: bees, flowers, time and
            careful hands. Every bottle is presented as close to the hive as possible, with the
            character of each harvest left intact.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            <div className="border-t border-white/15 pt-4">
              <strong className="font-serif text-3xl font-medium text-[#ffefb3]">01</strong>
              <span className="block text-xs opacity-55 uppercase tracking-[0.12em] mt-1">Small batch</span>
            </div>
            <div className="border-t border-white/15 pt-4">
              <strong className="font-serif text-3xl font-medium text-[#ffefb3]">100%</strong>
              <span className="block text-xs opacity-55 uppercase tracking-[0.12em] mt-1">Pure honey</span>
            </div>
            <div className="border-t border-white/15 pt-4">
              <strong className="font-serif text-3xl font-medium text-[#ffefb3]">24h</strong>
              <span className="block text-xs opacity-55 uppercase tracking-[0.12em] mt-1">Fresh dispatch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
    )}