import { useState, useRef } from "react";
import type { Image } from "../types/image";
import { ImageItem } from "./ImageItem";

const initialImages: Image[] = [
    {
        id: '1',
        title: 'Eagle',
        author: 'Mirelle de Sá',
        src: 'https://picsum.photos/id/10/600/600'
    },
    {
        id: '2',
        title: 'Frozen Peaks',
        author: 'Miguel Inácio',
        src: 'https://picsum.photos/id/15/600/600'
    },
    {
        id: '3',
        title: 'Beach',
        author: 'Miguel Inácio',
        src: 'https://picsum.photos/id/28/600/600'
    },
    {
        id: '4',
        title: 'Sunset On The Coast',
        author: 'Alexandra Alvez',
        src: 'https://picsum.photos/id/29/600/600'
    },
    {
        id: '5',
        title: 'The Moon',
        author: 'Carolina Ferreira',
        src: 'https://picsum.photos/id/42/600/600'
    },
    {
        id: '6',
        title: 'The Bird',
        author: 'Victor Frazan',
        src: 'https://picsum.photos/id/57/600/600'
    },
    {
        id: '7',
        title: 'Trees In Autumn',
        author: 'Sofia Paschoal',
        src: 'https://picsum.photos/id/65/600/600'
    },
    {
        id: '8',
        title: 'Mount Guime Peaks',
        author: 'Alice Pereira',
        src: 'https://picsum.photos/id/76/600/600'
    },
    {
        id: '9',
        title: 'Natural Landscape',
        author: 'Mirelle de Sá',
        src: 'https://picsum.photos/id/88/600/600'
    },
    {
        id: '10',
        title: 'The Bee',
        author: 'Ana Gabriele Mendonsa',
        src: 'https://picsum.photos/id/91/600/600'
    },
];

export function Gallery() {
    const [images, setImages] = useState<Image[]>(initialImages);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const draggedItemIndex = useRef<number | null>(null);

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            setImages((prevImages) => prevImages.filter((img) => img.id !== id));
            setSelectedIds((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
            });
        }
    };

    const handleToggleSelect = (id: string) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const handleDeleteSelected = () => {
        if (selectedIds.size === 0) return;

        if (window.confirm(`Are you sure you want to delete ${selectedIds.size} selected image(s)?`)) {
            setImages((prevImages) => prevImages.filter((img) => !selectedIds.has(img.id)));
            setSelectedIds(new Set());
        }
    };

    const handleDragStart = (_e: React.DragEvent<HTMLDivElement>, index: number) => {
        draggedItemIndex.current = index;
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (_e: React.DragEvent<HTMLDivElement>, targetIndex: number) => {
        if (draggedItemIndex.current === null) return;

        const sourceIndex = draggedItemIndex.current;
        if (sourceIndex === targetIndex) return;

        const updatedImages = [...images];
        const [movedImage] = updatedImages.splice(sourceIndex, 1);
        updatedImages.splice(targetIndex, 0, movedImage);

        setImages(updatedImages);
        draggedItemIndex.current = null;
    };

    return (
        <section className="p-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Image Gallery
                </h2>

                {selectedIds.size > 0 && (
                    <button
                        onClick={handleDeleteSelected}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition-colors flex items-center gap-2"
                    >
                        Delete Selected ({selectedIds.size})
                    </button>
                )}
            </div>

            {images.length === 0 ? (
                <p className="text-center text-gray-500 py-12">
                    No images available in the gallery.
                </p>
            ) : ( 
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
                    {images.map((img, index) => (
                        <ImageItem
                            key={img.id}
                            image={img}
                            index={index}
                            isFeatured={index === 0}
                            isSelected={selectedIds.has(img.id)}
                            onDelete={handleDelete}
                            onToggleSelect={handleToggleSelect}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        />
                    ))}    
                </div>
            )}
        </section>
    );
}