import { useRouter } from "next/router";
import React, { useState, useRef, Fragment, useEffect } from "react";
import {
  // BCP_icon,
  CallIcon,
  SplashContainer,
  SwipableContainer,
} from "@/styles/splash-screen/splash.styles";
import Image from "next/image";
import callerIcon from "../../public/splashScreen/callerIcon.svg";
// import BCP_logo from "../../public/splashScreen/BCP_logo.svg";

const SplashScreen = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const swipableContainerRef = useRef<HTMLDivElement>(null);
  const callIconRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (startX !== null) {
      const deltaX = (clientX - startX) * 0.2;

      // Check if moving would exceed the right edge of the container
      const containerWidth = swipableContainerRef.current?.offsetWidth || 0;
      const iconWidth = callIconRef.current?.offsetWidth || 0;

      const maxOffsetX = containerWidth - iconWidth;

      // Calculate the new offset without using Math.min and Math.max
      const newOffsetX = offsetX + deltaX;

      // Check if the new offset is within the valid range
      if (newOffsetX >= 0 && newOffsetX <= maxOffsetX) {
        setOffsetX(newOffsetX);
      }

      if (newOffsetX + iconWidth >= containerWidth / 2) {
        // Redirect to a new page
        router.push("/new-page");
        console.log("Redirecting to a new page...");
        console.log({ offsetX, iconWidth, containerWidth });
      }
    }
  };

  const handleEnd = () => {
    // Reset startX and offsetX when drag or touch ends
    setStartX(null);
    setOffsetX(0);
    setIsDragging(false);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    handleStart(e.clientX);
  };

  const handleDragMove = (e: React.DragEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <SplashContainer>
      {/* <BCP_icon>
        <Image src={BCP_logo} alt="BCP Icon" />
      </BCP_icon> */}
      {/* <h1>Better Call Paul</h1> */}
      {/* <h2>ringing...</h2> */}
      <SwipableContainer>
        {isDragging ? null : <p>Swipe to Continue</p>}
        <div
          style={{
            position: "absolute",
            height: "inherit",
            width: "inherit",
            borderRadius: "inherit",
            alignItems: "center",
            padding: "7px 42px 7px 11px",
          }}
          ref={swipableContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          onDragStart={handleDragStart}
          onDrag={handleDragMove}
          onDragEnd={handleEnd}
        >
          <CallIcon
            ref={callIconRef}
            draggable
            onDragStart={handleDragStart}
            onDrag={handleDragMove}
            onDragEnd={handleEnd}
            style={{ transform: `translateX(${offsetX}px)` }}
          >
            <Image src={callerIcon} alt="Call Icon" />
          </CallIcon>
        </div>
      </SwipableContainer>
    </SplashContainer>
  );
};

export default SplashScreen;
