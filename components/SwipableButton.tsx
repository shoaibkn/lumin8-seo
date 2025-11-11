"use client";

import type React from "react";
import { useState, useRef, useCallback, useEffect } from "react";

interface SwipableButtonProps {
  onSwipeComplete?: () => void;
  label?: string;
  completedLabel?: string;
  icon?: React.ReactNode;
}

export function SwipableButton({
  onSwipeComplete,
  label = "Swipe to confirm",
  completedLabel = "Confirmed!",
  icon,
}: SwipableButtonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const maxXRef = useRef(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const newX = e.clientX - rect.left;

      const maxX = rect.width - 60;
      maxXRef.current = maxX;
      const constrainedX = Math.max(0, Math.min(newX, maxX));

      setDragX(constrainedX);

      if (constrainedX >= maxX - 10) {
        setIsCompleted(true);
        setIsDragging(false);
        onSwipeComplete?.();
      }
    },
    [isDragging, onSwipeComplete],
  );

  const handleMouseUp = useCallback(() => {
    if (!isCompleted) {
      setIsDragging(false);
      setDragX(0);
    }
  }, [isCompleted]);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const newX = e.touches[0].clientX - rect.left;

      const maxX = rect.width - 60;
      maxXRef.current = maxX;
      const constrainedX = Math.max(0, Math.min(newX, maxX));

      setDragX(constrainedX);

      if (constrainedX >= maxX - 10) {
        setIsCompleted(true);
        setIsDragging(false);
        onSwipeComplete?.();
      }
    },
    [isDragging, onSwipeComplete],
  );

  const handleTouchEnd = useCallback(() => {
    if (!isCompleted) {
      setIsDragging(false);
      setDragX(0);
    }
  }, [isCompleted]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousedown", () => setIsDragging(true));
    container.addEventListener("touchstart", () => setIsDragging(true));

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const resetButton = () => {
    setIsCompleted(false);
    setDragX(0);
  };

  const maxX = containerRef.current?.getBoundingClientRect().width
    ? containerRef.current.getBoundingClientRect().width - 60
    : 300 - 60;
  const progress = dragX / maxX;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        ref={containerRef}
        className={`relative h-16 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 cursor-grab active:cursor-grabbing overflow-hidden border-2 ${
          isCompleted ? "border-emerald-500" : "border-slate-700"
        } transition-all duration-300 will-change-transform`}
      >
        {/* Background progress fill */}
        <div
          className={`absolute left-0 top-0 h-full bg-gradient-to-r transition-all ${
            isCompleted
              ? "from-emerald-500 to-emerald-600 w-full"
              : "from-slate-700 to-slate-600"
          }`}
          style={{
            width: isCompleted ? "100%" : `${Math.min(progress * 100, 100)}%`,
            willChange: isDragging ? "width" : "auto",
          }}
        />

        {/* Text label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className={`text-sm font-semibold transition-all duration-300 ${
              isCompleted
                ? "opacity-0 translate-x-8"
                : dragX > 50
                  ? "opacity-0 -translate-x-8"
                  : "opacity-100"
            } text-white`}
          >
            {label}
          </span>

          <span
            className={`absolute text-sm font-semibold transition-all duration-300 ${
              isCompleted ? "opacity-100" : "opacity-0"
            } text-white`}
          >
            {completedLabel}
          </span>
        </div>

        {/* Draggable thumb */}
        <div
          ref={sliderRef}
          className={`absolute top-1 w-14 h-14 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg flex items-center justify-center ${
            isCompleted ? "" : ""
          } ${isDragging ? "scale-110" : "scale-100"}`}
          style={{
            transform: isCompleted
              ? `translateX(calc(100vw - 60px))`
              : `translateX(${dragX}px)`,
            boxShadow: isDragging
              ? "0 8px 24px rgba(0, 0, 0, 0.4)"
              : "0 4px 12px rgba(0, 0, 0, 0.2)",
            willChange: "transform",
            transition: isCompleted
              ? "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "none",
          }}
        >
          {isCompleted ? (
            <svg
              className="w-6 h-6 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <>
              <svg
                className={`w-5 h-5 text-slate-900 transition-transform ${dragX > 50 ? "translate-x-1" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          )}
        </div>
      </div>

      {/* Reset button */}
      {isCompleted && (
        <button
          onClick={resetButton}
          className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          Reset
        </button>
      )}
    </div>
  );
}
