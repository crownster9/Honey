const Craft = () => {
    return ( 
        <>
        <section id="craft" className="bg-[#fffaf0] py-20 px-6">
      <p className="text-center text-xs tracking-[0.16em] uppercase font-black text-[#d99a28] mb-2">
        From field to jar
      </p>
      <h2 className="text-center font-serif text-3xl text-[#013e37] mb-14">
        Nothing here is staged.
      </h2>

      <div className="relative h-[340px] max-w-[360px] mx-auto">
        <div className="absolute left-0 top-2.5 w-[150px] rotate-[-7deg] bg-white p-2.5 pb-8 shadow-[0_14px_26px_rgba(1,42,37,0.18)] rounded-sm z-[1]">
          <img src="https://images.unsplash.com/photo-1758522964230-c2c402fd5670?auto=format&fit=crop&w=400&q=80" className="w-full h-[150px] object-cover" />
          <p className="font-serif text-xs text-center mt-2.5">The harvest</p>
        </div>

        <div className="absolute right-0 top-0 w-[158px] rotate-[6deg] bg-white p-2.5 pb-8 shadow-[0_14px_26px_rgba(1,42,37,0.18)] rounded-sm z-[2]">
          <img src="https://images.unsplash.com/photo-1642067958024-1a2d9f836920?auto=format&fit=crop&w=400&q=80" className="w-full h-[156px] object-cover" />
          <p className="font-serif text-xs text-center mt-2.5">Straight from comb</p>
        </div>

        <div className="absolute left-17.5 bottom-0 w-[146px] rotate-3 bg-white p-2.5 pb-8 shadow-[0_16px_30px_rgba(1,42,37,0.22)] rounded-sm z-[3]">
          <img src="https://images.unsplash.com/photo-1679941279735-b3b35e8bc476?auto=format&fit=crop&w=400&q=80" className="w-full h-[142px] object-cover" />
          <p className="font-serif text-xs text-center mt-2.5">Jarred that day</p>
        </div>
      </div>
    </section>
        </>
     );
}
 
export default Craft;