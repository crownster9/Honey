const Footer = () => {
    return (  
<>
<footer className="bg-[#013e37] text-[#fffaf0] pt-11 pb-6 px-6 md:px-[8vw]">
      <div className="max-w-[1280px] mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-7">
          <div className="w-[30px] h-[30px] bg-[#ffefb3] text-[#013e37] flex items-center justify-center text-sm [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]">
            ✦
          </div>
          <span className="font-black tracking-[0.1em] text-sm">HIVE & HARVEST</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 flex-wrap text-sm text-white/70 mb-7">
          <a href="#honey" className="hover:text-[#ffefb3] transition-colors">Shop</a>
          <a href="#story" className="hover:text-[#ffefb3] transition-colors">Story</a>
          <a href="#craft" className="hover:text-[#ffefb3] transition-colors">Process</a>
          <a href="#contact" className="hover:text-[#ffefb3] transition-colors">Contact</a>
        </div>

        <div className="h-px bg-[#ffefb3]/15 mb-5" />

        {/* Bottom row: copyright + credit */}
        <div className="flex justify-between items-center flex-wrap gap-2.5">
          <span className="text-xs text-white/50">
            © 2026 HIVE & HARVEST — honey made beautifully.
          </span>
          <span className="text-xs text-white/50">
            Designed &amp; developed by {" "}
            <span className="text-[#ffefb3] font-semibold">Adeleke</span>
          </span>
        </div>

      </div>
    </footer>
</>
    );
}
 
export default Footer;