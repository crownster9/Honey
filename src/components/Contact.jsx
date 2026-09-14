import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return ( 
        <>
        <section id="contact" className="bg-[#fffaf0] py-20 px-6 md:px-[8vw]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* ---- Left: info ---- */}
        <div>
          <p className="text-xs tracking-[0.16em] uppercase font-black text-[#d99a28] mb-2.5">
            Get in touch
          </p>
          <h2 className="font-serif text-3xl text-[#013e37] leading-[1.05] mb-3.5 max-w-[320px]">
            Questions before you order?
          </h2>
          <p className="text-sm text-[#5c6b5f] leading-relaxed mb-8 max-w-[340px]">
            Ask about a flavor, a bulk order, or just say hello — we read every
            message ourselves.
          </p>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-full bg-[#013e37] flex items-center justify-center flex-shrink-0">
                <FiMail className="text-[#ffefb3]" size={16} />
              </div>
              <span className="text-sm text-[#142019]">hello@hiveandharvest.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-full bg-[#013e37] flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-[#ffefb3]" size={16} />
              </div>
              <span className="text-sm text-[#142019]">+234 800 000 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-full bg-[#013e37] flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-[#ffefb3]" size={16} />
              </div>
              <span className="text-sm text-[#142019]">Akure, Ondo State</span>
            </div>
          </div>
        </div>

        {/* ---- Right: form ---- */}
        <form className="bg-white border border-[#013e37]/10 rounded-[20px] p-6">
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wide text-[#5c6b5f] mb-1.5">
              Name
            </label>
            <input
            required
              type="text"
              placeholder="Your name"
              className="w-full border border-[#013e37]/15 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#013e37]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wide text-[#5c6b5f] mb-1.5">
              Email
            </label>
            <input
            required
              type="email"
              placeholder="you@email.com"
              className="w-full border border-[#013e37]/15 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#013e37]"
            />
          </div>

          <div className="mb-5">
            <label className="block text-xs uppercase tracking-wide text-[#5c6b5f] mb-1.5">
              Message
            </label>
            <textarea
            required
              rows={3}
              placeholder="Tell us what's on your mind..."
              className="w-full border border-[#013e37]/15 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-[#013e37] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#013e37] text-[#ffefb3] font-bold text-sm py-3.5 rounded-full transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
        </>
     );
}
 
export default Contact;