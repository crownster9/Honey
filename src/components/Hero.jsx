export default function Hero() {
 return(
  <section className="-my-20 pt-30 px-5 md:px-10 bg-black w-full">
    <div className="md:flex gap-2 ">
    <div className="flex-col space-y-8 md:w-1/2">
      <div className="">
        <div className="flex items-center tracking-widest font-bold gap-2 text-sm border-[0.1px] border-(--cream)/50 w-fit p-2 rounded-full">
          <div className=" w-2 h-2 bg-(--cream) rounded-full animate-pulse"></div>
          <div className="text-(--butter) uppercase">Raw • Pure • Naturally sweet</div>
        </div>
      </div>
       <h1 className="font-serif font-medium text-6xl leading-[0.82] tracking-[-0.065em] text-[clamp(4rem,8.2vw,8.5rem)] max-w-190 text-(--cream)">
          Nature's <em className="text-[#ffefb3] italic">golden</em> ritual.
        </h1>
        <p className="text-(--cream)/50 font-semibold">
          Small-batch honey gathered from living wildflower fields. Slow harvested, gently bottled, and left close to the hive.</p>
       <div className="flex gap-2">
        <a href="#honey" className="inline-flex items-center gap-2.5 cursor-pointer bg-(--butter) text-(--green) rounded-full px-5.5 py-3.75 hover:shadow-[0_12px_30px_rgba(255,239,179,0.2)] hover:-translate-y-0.75 transition-all duration-300 tracking-wide font-extrabold text-lg">Explore the harvest <span>🍯</span>
</a>

        <a href="#honey" className="inline-flex items-center gap-2.5 cursor-pointer bg-transparent text-(--cream) hover:text-(--butter) rounded-full px-5.5 py-3.75 hover:border-(--butter) border-[0.5px] border-gray-400/50 hover:border transition-all duration-200 font-extrabold text-lg">Why our honey<span>?</span>
</a>
       </div>
       <div className="text-(--cream)/50 flex uppercase text-sm">
        <p className="border-r pr-5">Wildflower Reserve
      </p>
        <p className="pl-5">100% natural sweetness
      </p>
       </div>
    </div>
    <div className="md:w-1/2">
    <div className="relative min-h-[570px] grid place-items-center [perspective:1000px]">

  {/* the gold ring around the jar */}
  <div className="gold-ring absolute w-[490px] h-[490px] rounded-full rotate-[-16deg] opacity-85 z-[2]" />

  {/* the orbiting bees */}
  <div className="animate-orbit absolute w-[min(540px,103vw)] h-[min(540px,103vw)] border border-dashed border-white/20 rounded-full z-[5] pointer-events-none">
    <span className="absolute left-1/2 -top-[19px] -translate-x-1/2 text-[27px] drop-shadow-lg">🐝</span>
    <span className="absolute -right-[10px] bottom-[20%] rotate-90 text-[22px] drop-shadow-lg">🐝</span>
  </div>

  {/* the trust badge */}
  <div className="absolute -right-[3%] bottom-[4%] z-[6] w-[158px] h-[158px] rounded-full bg-[#ffefb3] text-[#013e37] flex flex-col items-center justify-center gap-2.5 text-center p-4 shadow-[0_20px_46px_rgba(0,0,0,0.22)]">
    <span className="text-[15px] opacity-65">✦</span>
    <p className="font-serif text-[0.82rem] leading-[1.25] font-medium">The sweetness<br/>you can trust</p>
    <a href="#honey" className="text-[0.6rem] font-extrabold tracking-wider uppercase bg-[#013e37] text-[#ffefb3] px-3.5 py-1.5 rounded-full transition-transform hover:-translate-y-0.5">
      Explore honey
    </a>
  </div>

  {/* the jar photo itself */}
  <div className="relative w-[min(420px,80vw)] aspect-square rounded-[36px] overflow-hidden border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.22)] z-[3]">
    <img
      src="https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?auto=format&fit=crop&fm=jpg&q=85&w=1400"
      alt="Golden honey dripping from a wooden dipper into a glass jar"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] to-[#013e37]/50 pointer-events-none" />
    <div className="absolute left-1/2 bottom-[9%] -translate-x-1/2 z-[4] bg-[#fffaf0]/95 text-[#013e37] px-4.5 py-3 rounded-full text-center whitespace-nowrap shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
      <small className="block text-[0.65rem] tracking-[0.15em] uppercase opacity-55 mb-1">Featured harvest</small>
      <strong className="font-serif text-[1.35rem] font-medium">Wildflower No. 01</strong>
    </div>
  </div>
</div>
</div>
</div>
</section>
 )
 }
