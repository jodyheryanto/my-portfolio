'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState, useCallback } from 'react';
import clsx from 'clsx';

interface ProjectSliderProps {
  images: (StaticImageData | string)[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

/**
 * Experimenting with a custom slider for project images.
 */
export default function ProjectSlider({ images }: ProjectSliderProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[imageIndex]}
            alt={`Project Image ${imageIndex + 1}`}
            fill
            className="object-contain m-auto"
            sizes="(min-width: 1216px) 76rem, 100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-opacity opacity-0 group-hover:opacity-100"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft height={32} width={32} />
          </button>
          <button
            className="absolute right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-opacity opacity-0 group-hover:opacity-100"
            onClick={() => paginate(1)}
          >
            <ChevronRight height={32} width={32} />
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
              className={clsx(
                "w-2 h-2 rounded-full transition-all",
                i === imageIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Simple internal icon placeholders since I need ChevronLeft/Right which might not be exported from @/icons exactly like this
function ChevronLeft({ height = 24, width = 24 }: { height?: string | number, width?: string | number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRight({ height = 24, width = 24 }: { height?: string | number, width?: string | number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
