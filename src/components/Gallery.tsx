import { useState } from "react";
import type { Image } from "../types/image";
import { ImageItem } from "./ImageItem";

const initialImages: Image[] = [
    {
        id: '1',
        title: 'Eagle',
        author: 'Mirelle de Sá',
        url: 'https://images.unsplash.com/photo-1788846018535-5735e326a9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '2',
        title: 'Frozen Peaks',
        author: 'Miguel Inácio',
        url: 'https://images.unsplash.com/photo-1778303814569-3cb046f8c7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '3',
        title: 'Beach',
        author: 'Miguel Inácio',
        url: 'https://images.unsplash.com/photo-1766323869651-751a11ed33d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '4',
        title: 'Sunset On The Coast',
        author: 'Alexandra Alvez',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '5',
        title: 'The Moon',
        author: 'Carolina Ferreira',
        url: 'https://images.unsplash.com/photo-1764414596922-3e0bdb091d0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '6',
        title: 'The Bird',
        author: 'Victor Frazan',
        url: 'https://images.unsplash.com/photo-1769784854682-5288db6c7431?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '7',
        title: 'Trees In Autumn',
        author: 'Sofia Paschoal',
        url: 'https://images.unsplash.com/photo-1730018649858-2f7b1a0db987?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '8',
        title: 'Mount Guime Peaks',
        author: 'Alice Pereira',
        url: 'https://images.unsplash.com/photo-1790913766619-431c8f57d923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '9',
        title: 'Natural Landscape',
        author: 'Mirelle de Sá',
        url: 'https://images.unsplash.com/photo-1770103256217-65d2cc069ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
    {
        id: '10',
        title: 'The Bee',
        author: 'Ana Gabriele Mendonsa',
        url: 'https://images.unsplash.com/photo-1790792854851-48f4838d0829?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    },
];

export function Gallery() {
    const [images, setImages] = useState<Image[]>(initialImages);

    const handleDelete = (id: string) => {
        setImages((prevImages) => prevImages.filter((img) => img.id !== id));
    };

    return (
        <section className="p-6 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                Image Gallery
            </h2>

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
                            isFeatured={index === 0}
                            onDelete={handleDelete}
                        />
                    ))}    
                </div>
            )}
        </section>
    );
}