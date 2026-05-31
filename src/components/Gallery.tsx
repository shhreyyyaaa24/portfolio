"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Image as ImageIcon, Play, Pause } from "lucide-react";

interface GalleryProps {
  autoScroll?: boolean;
  scrollInterval?: number;
}

export default function Gallery({ autoScroll = true, scrollInterval = 5000 }: GalleryProps) {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAutoScrolling, setIsAutoScrolling] = useState(autoScroll);

  // Placeholder images - User can replace with actual convocation photos
  const photos = [
    { id: 1, title: "Convocation Moment 1", color: "from-gradient-1" },
    { id: 2, title: "Convocation Moment 2", color: "from-gradient-2" },
    { id: 3, title: "Convocation Moment 3", color: "from-accent-2" },
    { id: 4, title: "Convocation Moment 4", color: "from-gradient-1" },
    { id: 5, title: "Convocation Moment 5", color: "from-gradient-2" },
    { id: 6, title: "Convocation Moment 6", color: "from-accent-2" },
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = container.offsetWidth;
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        // Loop back to start when reaching end
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 10
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "auto" });
          }, 500);
        }
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isAutoScrolling, scrollInterval]);

  return (
    <section
      id="gallery"
      className="section-padding border-b border-border relative overflow-hidden"
      ref={ref}
    >
      {/* Background gradient */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-2/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="section-label inline-block">Memories</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold mt-4">
            Convocation & <span className="gradient-text">Moments</span>
          </h2>
          <p className="text-ink-2 text-lg mt-6 max-w-2xl mx-auto">
            A visual journey through milestones, celebrations, and unforgettable moments
          </p>
        </motion.div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Scroll Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {photos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + idx * 0.05 }}
                className="flex-shrink-0 w-96 h-80 snap-center group/card"
              >
                {/* Photo Card */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Placeholder with gradient - Replace src with actual image path */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${photo.color} via-bg-elevated to-bg opacity-80`}
                  />

                  {/* Image (when available) */}
                  <img
                    src={`/photos/${photo.id}.jpg`}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Hide image on error, showing gradient instead
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <div />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-sm text-gray-200">
                        Click to view full resolution
                      </p>
                    </div>
                  </div>

                  {/* Icon when no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon
                      size={64}
                      className="text-white/30 group-hover/card:-translate-y-2 transition-transform"
                    />
                  </div>

                  {/* Border shine effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-accent/50 rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10" />

          {/* Controls */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className="absolute bottom-0 right-0 p-3 rounded-full bg-gradient-to-br from-gradient-1 to-accent-2 text-white shadow-lg hover:shadow-xl transition-shadow"
            title={isAutoScrolling ? "Pause" : "Play"}
          >
            {isAutoScrolling ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
        </div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-ink-3 mt-8"
        >
          📸 Scroll through memories • Auto-scroll enabled • Add your own photos to /public/photos/
        </motion.p>
      </div>
    </section>
  );
}
