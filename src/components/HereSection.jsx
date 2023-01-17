import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";

function HereSection() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    TR: "+90",
    GR: "+30",
    RO: "+40",
    DE: "+49",
    FR: "+33",
    GB: "+44",
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="getir"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt="getir1"
          ></img>
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt="getir2"
          ></img>
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Logo"
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde
            <br />
            kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6 ">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4 ">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 relative block group">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm focus:pt-2"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs ">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow transition-color hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-color hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold ">
              <FaFacebook size={24} />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereSection;
