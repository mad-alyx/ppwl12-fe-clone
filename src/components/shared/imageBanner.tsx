import React from 'react';

interface ImageBannerProps {
  imgSrc: string;
  altText: string;
  linkUrl: string;
  // Tambahkan prop opsional untuk mengatur rasio secara dinamis
  aspectRatioClass?: string; 
}

export const ImageBanner: React.FC<ImageBannerProps> = ({ 
  imgSrc, 
  altText, 
  linkUrl, 
  aspectRatioClass = "aspect-[3/1]" // Nilai default jika tidak diisi
}) => {
  return (
    <section className="mb-10 w-full">
      <a 
        href={linkUrl} 
        target="_blank" 
        rel="noreferrer noopener"
        className="block w-full overflow-hidden rounded-2xl shadow-sm transition-opacity duration-200 hover:opacity-95 cursor-pointer"
      >
        <img 
          src={imgSrc} 
          alt={altText} 
          // Inject aspectRatioClass ke dalam className Tailwind
          className={`w-full h-auto object-cover block ${aspectRatioClass}`}
          loading="lazy"
        />
      </a>
    </section>
  );
};