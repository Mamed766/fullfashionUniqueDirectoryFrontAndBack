"use client";
import React, { useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { CiZoomIn } from "react-icons/ci";

const Gallery = () => {
  const images = [
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-1.webp",
      className: "blazers",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-2.webp",
      className: "watch",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-3.webp",
      className: "jewelry",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-4.webp",
      className: "blazers",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-5.webp",
      className: "watch",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-6.webp",
      className: "jewelry",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-7.webp",
      className: "blazers",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-8.webp",
      className: "watch",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-9.webp",
      className: "jewelry",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-10.webp",
      className: "blazers",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-11.webp",
      className: "watch",
    },
    {
      src: "https://darkfashion.wpengine.com/wp-content/uploads/2023/10/Gallery-image-12.webp",
      className: "jewelry",
    },
  ];

  const [filterKey, setFilterKey] = useState("*");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredImages =
    filterKey === "*"
      ? images
      : images.filter((image) => image.className === filterKey);

  const openLightbox = (index: any) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="Gallery" />
      </div>
      <div className="bg-black py-20">
        <div className="flex gap-2 text-white justify-center items-center">
          <button
            className={`px-5 py-2 hover:bg-[#BB9D7B] duration-700 border-[2px] border-[#BB9D7B] ${
              filterKey === "*" ? "bg-[#BB9D7B]" : "bg-transparent"
            }`}
            onClick={() => setFilterKey("*")}
          >
            All
          </button>
          <button
            className={`px-5 hover:bg-[#BB9D7B] duration-700 py-2 border-[2px] border-[#BB9D7B] ${
              filterKey === "blazers" ? "bg-[#BB9D7B]" : "bg-transparent"
            }`}
            onClick={() => setFilterKey("blazers")}
          >
            Blazers
          </button>
          <button
            className={`px-5 py-2 hover:bg-[#BB9D7B] duration-700 border-[2px] border-[#BB9D7B] ${
              filterKey === "watch" ? "bg-[#BB9D7B]" : "bg-transparent"
            }`}
            onClick={() => setFilterKey("watch")}
          >
            Watch
          </button>
          <button
            className={`px-5 py-2 border-[2px] hover:bg-[#BB9D7B] duration-700 border-[#BB9D7B] ${
              filterKey === "jewelry" ? "bg-[#BB9D7B]" : "bg-transparent"
            }`}
            onClick={() => setFilterKey("jewelry")}
          >
            Jewelry
          </button>
        </div>
        <div className="max-w-[1500px] flex flex-wrap  justify-center md:justify-between mx-auto">
          <div className="grid grid-cols-1 gap-3 mt-6">
            {filteredImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className={`filter-item relative group ${image.className}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative max-h-[300px] group">
                  <Image
                    alt={`Gallery image ${index + 1}`}
                    src={image.src}
                    height={300}
                    width={300}
                  />
                  <div className="absolute flex justify-center duration-700  items-center top-0 bottom-0 left-0 right-0 group-hover:opacity-80 bg-black opacity-0 z-10 w-full h-full">
                    <CiZoomIn className="text-[40px] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 md:mt-[8rem]">
            {filteredImages.slice(3, 6).map((image, index) => (
              <div
                key={index}
                className={`filter-item relative group ${image.className}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative max-h-[300px] group">
                  <Image
                    alt={`Gallery image ${index + 1}`}
                    src={image.src}
                    height={300}
                    width={300}
                  />
                  <div className="absolute flex justify-center duration-700  items-center top-0 bottom-0 left-0 right-0 group-hover:opacity-80 bg-black opacity-0 z-10 w-full h-full">
                    <CiZoomIn className="text-[40px] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {filteredImages.slice(6, 9).map((image, index) => (
              <div
                key={index}
                className={`filter-item relative group ${image.className}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative max-h-[300px] group">
                  <Image
                    alt={`Gallery image ${index + 1}`}
                    src={image.src}
                    height={300}
                    width={300}
                  />
                  <div className="absolute flex justify-center duration-700  items-center top-0 bottom-0 left-0 right-0 group-hover:opacity-80 bg-black opacity-0 z-10 w-full h-full">
                    <CiZoomIn className="text-[40px] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 md:mt-[8rem]">
            {filteredImages.slice(9, 12).map((image, index) => (
              <div
                key={index}
                className={`filter-item  relative group ${image.className}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative max-h-[300px] group">
                  <Image
                    alt={`Gallery image ${index + 1}`}
                    src={image.src}
                    height={300}
                    width={300}
                  />
                  <div className="absolute flex justify-center duration-700  items-center top-0 bottom-0 left-0 right-0 group-hover:opacity-80 bg-black opacity-0 z-10 w-full h-full">
                    <CiZoomIn className="text-[40px] text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={filteredImages[photoIndex].src}
          nextSrc={filteredImages[(photoIndex + 1) % filteredImages.length].src}
          prevSrc={
            filteredImages[
              (photoIndex + filteredImages.length - 1) % filteredImages.length
            ].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + filteredImages.length - 1) % filteredImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredImages.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
