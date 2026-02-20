import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import FocusAreaCard from "./FocusAreaCard";
import { CONTAINER } from "./layout";

export default function PreviewScroll({ title, items = [], className = "" }) {
  const scrollContainerRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setCanScroll(el.scrollWidth > el.clientWidth);
    };

    checkScrollable();
    const observer = new ResizeObserver(checkScrollable);
    observer.observe(el);

    return () => observer.disconnect();
  }, [items.length]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className={CONTAINER}>
        {/* Title */}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-therapy-burgundy-600 mb-8">{title}</h2>
        )}

        {/* Scroll Container - margin for arrows only when scrollable */}
        <div className={`relative ${canScroll ? "px-4 md:px-14" : ""}`}>
          {/* Left Arrow - only when scrollable */}
          {canScroll && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 hidden md:block"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-therapy-burgundy-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="grid grid-flow-col gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-6 [grid-auto-columns:100%] sm:[grid-auto-columns:calc(50%-0.75rem)] lg:[grid-auto-columns:calc(33.333%-1rem)]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="min-h-0 snap-start">
                <FocusAreaCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow - only when scrollable */}
          {canScroll && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 hidden md:block"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-therapy-burgundy-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Swipe to explore
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

PreviewScroll.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};
