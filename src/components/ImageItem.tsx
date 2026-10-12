import type { Image } from "../types/image";

interface ImageItemProps {
  image: Image;
  isFeatured?: boolean;
}

export function ImageItem({ image, isFeatured = false }: ImageItemProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-white border flex flex-col h-full ${
        isFeatured
          ? "ring-4 ring-emerald-700 border-emerald-700 shadow-xl transform sm:-translate-x-3 sm:scale-105 z-10"
          : "border-gray-200"
      }`}
    >
      <div className="relative w-full overflow-hidden flex-1 min-h-[160px]">
        <img
          src={image.url}
          alt={`Photograph titled ${image.title} by ${image.author}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 min-h-[160px]"
        />
      </div>
      <div className="p-3 bg-white border-t border-gray-100">
        <h3 className="font-medium text-gray-800 text-sm truncate">
          {image.title}
        </h3>
        <p className="text-xs text-gray-500">By: {image.author}</p>
      </div>
    </div>
  );
}