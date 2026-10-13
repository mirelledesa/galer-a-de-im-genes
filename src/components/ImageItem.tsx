import type { Image } from "../types/image";

interface ImageItemProps {
  image: Image;
  index: Number;
  isFeatured?: boolean;
  isSelected?: boolean;

  onDelete: (id: string) => void;
  onToggleSelected: (id: string) => void
  onDragStart: (e: React.DragEvent<HTMLVideoElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
}

export function ImageItem({ 
  image,
  index,
   isFeatured = false, 
   isSelected = false,
   onDelete,
   onToggleSelected,
   onDragStart,
   onDragOver,
   onDrop,
   }: ImageItemProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-white border flex flex-col h-full relative group ${
        isFeatured
          ? "ring-4 ring-emerald-700 border-emerald-700 shadow-xl transform sm:-translate-x-3 sm:scale-105 z-10"
          : "border-gray-200"
      }`}
    >
      <button
        onClick={() => onDelete(image.id)}
        aria-label={`Delete image ${image.title}`}
        className="absolute bottom-2 right-2 z-20 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862A2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

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