import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const centerRingRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const rotatingORef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animate the rotating O
    if (rotatingORef.current) {
      const oTimeline = gsap.timeline({ repeat: -1 });

      // Rotate for 1.5s
      oTimeline.to(
        rotatingORef.current,
        {
          rotationY: 360,
          duration: 1.5,
          ease: "power2.inOut",
        },
        0
      );

      // Stop for 1s
      oTimeline.to({}, {}, 2.5);
    }

    // Fade in circular text from start
    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      );
    }

    // Fade in footer text
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.5, ease: "power2.inOut", delay: 0.3 }
      );
    }

    const timeline = gsap.timeline({ repeat: -1, delay: 2 });

    // Rotate the circular text
    if (svgRef.current) {
      timeline.to(
        svgRef.current,
        {
          rotation: 360,
          duration: 10,
          ease: "linear",
        },
        0
      );
    }

    // Scale the center ring to larger size and keep it
    if (centerRingRef.current) {
      gsap.to(centerRingRef.current, {
        scale: 1.15,
        duration: 1.5,
        ease: "power2.out",
      });
    }

    // Add glow effect to center ring
    if (centerRingRef.current) {
      gsap.to(centerRingRef.current, {
        boxShadow: "0 0 40px rgba(255, 255, 255, 0.6)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="header">
        <h1>
          Touch
          <span className="rotating-o" ref={rotatingORef}>
            O
          </span>
          nce
        </h1>
      </div>
      <div className="hero-content">
        <div className="ring-animation-container">
          <svg
            ref={svgRef}
            className="circular-text"
            viewBox="0 0 200 200"
            style={{ transformOrigin: "center" }}>
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                fill="none"
              />
            </defs>
            <text className="text-on-circle">
              <textPath
                href="#circlePath"
                startOffset="0%"
                textAnchor="start"
                fontStretch="expanded">
                Coming Soon • Coming Soon • Coming Soon • Coming Soon •
              </textPath>
            </text>
          </svg>
          <div className="center-ring" ref={centerRingRef}></div>
        </div>
      </div>
      <div className="footer-text" ref={footerRef}>
        <p>
          TOUCHONCE WEARABLES.
          <br />
          Touch Once. You're not Alone.
        </p>
      </div>
    </div>
  );
}
