"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    return {
      background: { color: "transparent" },
      fullScreen: { enable: false },
      particles: {
        number: {
          value: 110,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          distance: 110,
          opacity: 10,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: { value: 0.6 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 150,
            links: { opacity: 0.7 },
          },
        },
      },
    };
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
