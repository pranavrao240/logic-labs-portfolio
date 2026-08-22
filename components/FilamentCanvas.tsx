"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTransform, useSpring, MotionValue } from "framer-motion";

interface FilamentCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const FilamentCanvas: React.FC<FilamentCanvasProps> = ({ scrollYProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameCount = 192;

  // Smooth the scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  // Map scroll progress to three sections with specific frame ranges
  // Section 1: 0-0.33 -> Frames 0-40 (41 frames)
  // Section 2: 0.33-0.66 -> Frames 40-157 (118 frames)
  // Section 3: 0.66-1 -> Frames 157-239 (83 frames)
  const frameIndex = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    [0, 50, 150, 192],
  );

  // Preload all images
  const preloadImages = useCallback(async () => {
    try {
      const imagePromises: Promise<HTMLImageElement>[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const frameNumber = i.toString().padStart(3, "0");
        const imagePath = `/rever/frame-${frameNumber}.webp`;

        const promise = new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = imagePath;
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Failed to load image: ${imagePath}`);
            // Create a fallback image for missing frames
            const canvas = document.createElement("canvas");
            canvas.width = 1920;
            canvas.height = 1080;
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.fillStyle = "#050505";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "#ffffff";
              ctx.font = "48px Inter";
              ctx.textAlign = "center";
              ctx.fillText(`Frame ${i}`, canvas.width / 2, canvas.height / 2);
            }
            const fallbackImg = new Image();
            fallbackImg.src = canvas.toDataURL();
            fallbackImg.onload = () => resolve(fallbackImg);
          };
        });

        imagePromises.push(promise);
      }

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
      setIsLoading(false);
    } catch (error) {
      console.error("Error preloading images:", error);
      setIsLoading(false);
    }
  }, [frameCount]);

  // Draw frame on canvas
  const drawFrame = useCallback(
    (frameNumber: number) => {
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = images[frameNumber];
      if (!img) return;

      // Clear canvas with background color
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate aspect ratio and positioning
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, drawX, drawY;

      if (imgAspect > canvasAspect) {
        // Image is wider than canvas - fit to height
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
        drawX = (canvas.width - drawWidth) / 2;
        drawY = 0;
      } else {
        // Image is taller than canvas - fit to width
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
        drawX = 0;
        drawY = (canvas.height - drawHeight) / 2;
      }

      // Draw the image
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    },
    [images],
  );

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Redraw current frame
    drawFrame(currentFrame);
  }, [currentFrame, drawFrame]);

  // Initialize component on mount
  useEffect(() => {
    let isMounted = true;

    // Start preloading images
    preloadImages().then(() => {
      if (isMounted) {
        handleResize();
      }
    });

    // Handle resize
    const handleResizeEvent = () => {
      if (isMounted) {
        handleResize();
      }
    };

    window.addEventListener("resize", handleResizeEvent);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []); // Empty dependency array for mount-only effect

  // Update frame based on scroll progress
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest: number) => {
      const frame = Math.round(latest);
      if (frame !== currentFrame && frame >= 0 && frame < images.length) {
        setCurrentFrame(frame);
        drawFrame(frame);
      }
    });

    return () => unsubscribe();
  }, [frameIndex, currentFrame, images.length, drawFrame]);

  // Draw initial frame when images are loaded
  useEffect(() => {
    if (images.length > 0 && !isLoading) {
      drawFrame(0);
    }
  }, [images, isLoading, drawFrame]);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "#050505" }}
      />
    </div>
  );
};

export default FilamentCanvas;
