"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { id: 1, value: 10000,label: "Total course views" },
    { id: 2, value: 1009, label: "Registered Members" },
    { id: 3, value: 5000, label: "Courses" },
    { id: 4, value: 7000, label: "Students community" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        current += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(current);
          return updated;
        });

        if (current >= stat.value) clearInterval(timer);
      }, interval);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white mt-40 text-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-4"
          >
            <h2 className="text-5xl font-bold text-red-600">
              {counts[i].toLocaleString()}
            </h2>
            <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
