import { memo } from "react";

const ProductListImage = ({ image, descriptions }) => {
  return (
    <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden group">
      <img
        src={image}
        alt="Description image product"
        className="w-full h-full object-cover rounded-lg"
        height="300"
        width="300"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay oscuro con transición */}
      <div
        className={`
          absolute inset-0 bg-transparent group-hover:bg-black/60
          transition-all duration-500 rounded-lg z-[10]
        `}
      ></div>

      {/* Texto centrado sobre el overlay */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center px-4
          text-white text-lg text-center opacity-0 group-hover:opacity-100
          transition-opacity duration-500 z-[20]
          overflow-hidden text-ellipsis whitespace-nowrap
        `}
      >
        {descriptions[0]}
      </div>
    </div>
  );
};

export default memo(ProductListImage);
