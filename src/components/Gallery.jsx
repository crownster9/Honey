import { useState, useEffect } from "react";

export default function Gallery() {
 const images = [
       {id: 1, src:'https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?auto=format&fit=crop&fm=jpg&q=80&w=700', alt:"Classic Drip", sub:"Warm & traditional"},
       {id: 2, src:'https://images.unsplash.com/photo-1679941279735-b3b35e8bc476?auto=format&fit=crop&fm=jpg&q=80&w=700', alt:"Nature's Garden", sub:"Fresh & natural"},
       {id: 3, src:'https://images.unsplash.com/photo-1642067958024-1a2d9f836920?auto=format&fit=crop&fm=jpg&q=80&w=700 ', alt:"Honeycomb Delight", sub:"Rich & indulgent"},
       {id: 4, src:'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&fm=jpg&q=80&w=700', alt:"Rustic & Pure", sub:"Raw & authentic"},
 ]
  return (
    <>
    <section id="honey" className="mt-15">

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4  mx-5 md:mx-15">
            {images.map((image) => (
              <div className="overflow-hidden group border-(--gold) transition-all duration-300 hover:-translate-y-1 relative cursor-pointer border-2 rounded-2xl" key={image.id}>
                <div className="absolute w-7 text-center items-center flex justify-center font-serif text-sm font-bold top-3 left-4 h-7 rounded-full z-5 bg-(--butter) text-(--green)">{image.id}</div>
                <img src={image.src} alt={image.alt} className="w-full  transition-all  duration-300 group-hover:scale-110  h-full object-cover aspect-square"/>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0  h-1/2 bg-linear-to-t from-green-900/80 to to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0  h-1/2 bg-linear-to-t from-black/50 to to-transparent"></div>

              <div className="absolute bottom-2 font-serif left-3 right-0 ">
                <h2 className="text-white">{image.alt}</h2>
                <h2 className="text-(--gold) text-sm">{image.sub}</h2>
              </div>

              </div>
            ))}
          </div>
          <div className="w-full text-center mt-10">
            <a href="#honey@" className="cursor-pointer font-serif p-4 px-6 rounded-full  font-extrabold group text-(--green) bg-(--butter) hover:-translate-y-2 transition-all duration-300">I'll use this style <span className="group-hover:translate-x-2">→</span></a>        

          </div>
  </section>
        </>
    )}