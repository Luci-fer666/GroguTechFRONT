import "./Galeria.css"
import React from "react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TarjetaGaleria from "../TarjetadeGaleria/TarjetaGaleria";

function GaleriaFila({imagenes}){
    return(
        <Swiper
        slidesPerView={4}      
        spaceBetween={20}     
        navigation           
        loop={true}           
        modules={[Navigation]}
        className="galeriaFila"
        breakpoints={{
                            0: {          // móviles pequeños
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {        // tablets
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1024: {       // desktop
                    slidesPerView: 4,
                    spaceBetween: 20,
                }}}
        >
        {imagenes.map((img, index) => (
            <SwiperSlide key={index}>
                <TarjetaGaleria producto={img} className="imagenGaleriaFila" />
            </SwiperSlide>
        ))}
        </Swiper>
    );
    }
export default GaleriaFila;