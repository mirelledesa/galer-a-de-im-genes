import type { Image } from "../types/image";

interface ImageItemProps {
  image: Image;
  index: number;
  isFeatured?: boolean;
  isSelected?: boolean;
  onDelete: (id: string) => void;
  onToggleSelect: (id: string) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
}

export function ImageItem({
  image,
  index,
  isFeatured = false,
  isSelected = false,
  onDelete,
  onToggleSelect,
  onDragStart,
  onDragOver,
  onDrop,
}: ImageItemProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      onClick={() => onToggleSelect(image.id)}
      className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-white border flex flex-col h-full relative group cursor-grab active:cursor-grabbing ${
        isSelected
          ? "ring-4 ring-red-800 border-red-800 shadow-xl scale-[0.98]"
          : isFeatured
          ? "ring-4 ring-black-700 border-black-500 shadow-xl transform sm:-translate-x-3 sm:scale-105 z-10"
          : "border-gray-200 hover:border-gray-400"
      }`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(image.id);
        }}
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
          onDragStart={(e) => e.preventDefault()}
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