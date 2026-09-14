import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Cart = () => {
    useEffect(() => {
        AOS.init()
    })
    const Gallery = [
        {id:1, img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&fm=jpg&q=85&w=1100", name:"01 / floral", subname:"Wildflower", details:"Bright, layered and floral — our signature everyday honey.",price:"₦12,500"},
        {id:2, img:"https://images.unsplash.com/photo-1554230513-961cc6696a80?auto=format&fit=crop&fm=jpg&q=85&w=1100", name:"02 / hive", subname:"Hive Gold", details:"Rich and deep with the warm character of fresh honeycomb.",price:"₦14,000"},
        {id:3, img:"https://images.unsplash.com/photo-1691008050937-86491652d729?auto=format&fit=crop&fm=jpg&q=85&w=1100", name:"03 / meadow", subname:"Sunset Bloom", details:"A seasonal harvest inspired by flowers at the edge of golden hour.",price:"₦15,500"},
    ]
    return ( 
        
        <>
        <section className="mt-15">
            <div className="md:flex flex-cols mx-5 md:mx-15 ">
             <div className="space-y-4  md:w-1/2">  
            <p data-aos="slide-up" data-aos-once="true" data-aos-duration="1000"  className=" text-[12px] tracking-wider uppercase font-extrabold text-(--green)/50">The collection
            </p>
            <h2 data-aos="slide-up" data-aos-once="true" data-aos-duration="1000"  className="text-5xl w-[78%] text-(--green) font-serif ">A little gold for every table.</h2>
            </div>
            <div className="md:w-1/2 flex items-end mt-4">
             <h2 data-aos="slide-up" data-aos-once="true" data-aos-duration="1000"  className="text-(--green)/70">Three expressions of the same simple idea: let the flowers, the bees and the season do the talking.</h2>
            </div> 
            </div>

       {/* Gallery */}
        <div id='honey@' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" className="grid mt-15 grid-cols-1 md:grid-cols-3 gap-4 mx-5 md:mx-15 ">
         {Gallery.map((gal) => (
            <div key={gal.id} className="group rounded-2xl">
                <div className="h-64 overflow-hidden rounded-t-2xl">
                    <img src={gal.img} alt={gal.name} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"/>
                </div>
                <div className="bg-(--green) p-4 space-y-2 rounded-b-2xl ">
                    <h2 className="text-(--gold) text-sm">{gal.name}</h2>
                    <h2 className="text-white text-3xl">{gal.subname}</h2>
                    <h2 className="text-white/50 tracking-wide text-sm">{gal.details}</h2>
                    <div className="flex justify-between mt-7">
                    <h2 className=" text-white font-bold text-[20px]">{gal.price}</h2>
                    <div className="text-(--green) bg-(--butter) rounded-full text-3xl flex items-center w-10 h-10 justify-center text-center "><span className="">→</span></div>
                    </div>
                </div>
            </div>
         ))}
        </div>
        </section>
        </>
     );
}
 
export default Cart