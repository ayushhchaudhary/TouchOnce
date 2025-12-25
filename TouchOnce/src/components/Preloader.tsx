import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

export default function Preloader() {
  const ringRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ringRef.current || !containerRef.current) return;

    const timeline = gsap.timeline();

    // Smooth deceleration spin
    timeline.to(
      ringRef.current,
      {
        rotationX: "+=1080",
        rotationY: "+=360",
        duration: 2,
        ease: "power2.out",
      },
      0
    );

    // Wobble back to origin
    timeline.to(
      ringRef.current,
      {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        duration: 2.0,
        ease: "elastic.out",
      },
      2
    );

    // Hold and transition
    timeline.to({}, {}, 4);
  }, []);

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="ring-animation-container">
        <div
          className="preloader-ring-wrapper"
          ref={ringRef}
          style={{ transformOrigin: "center" }}>
          <div className="center-ring"></div>
        </div>
      </div>
    </div>
  );
}
