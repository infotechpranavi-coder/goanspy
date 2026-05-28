"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Review = {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  avatar: string;
  accent: string;
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Aniket Naik",
    role: "Cafe Owner",
    location: "Panaji, Goa",
    rating: 5,
    avatar: "AN",
    accent: "#5f7b94",
    text: "The CCTV coverage is clean and the mobile view works without any fuss. They explained everything in simple terms.",
  },
  {
    id: 2,
    name: "Riya Fernandes",
    role: "Villa Manager",
    location: "Candolim, Goa",
    rating: 5,
    avatar: "RF",
    accent: "#8ca4ac",
    text: "We needed a tidy setup before guest season. Installation was on time and the cameras blend nicely with the property.",
  },
  {
    id: 3,
    name: "Suresh Patil",
    role: "Warehouse Supervisor",
    location: "Verna, Goa",
    rating: 4,
    avatar: "SP",
    accent: "#2c3a42",
    text: "Night visibility improved a lot compared to our old system. Their team also helped us organize recording storage properly.",
  },
  {
    id: 4,
    name: "Megha Desai",
    role: "HR Admin",
    location: "Margao, Goa",
    rating: 5,
    avatar: "MD",
    accent: "#7d9cb7",
    text: "Attendance and door access are much smoother now. Staff picked it up quickly because the handover was done patiently.",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Retail Owner",
    location: "Mapusa, Goa",
    rating: 5,
    avatar: "VJ",
    accent: "#486071",
    text: "Good balance between budget and quality. We installed cameras in both the shop and stock room and the picture is sharp.",
  },
  {
    id: 6,
    name: "Pooja Kamat",
    role: "School Coordinator",
    location: "Ponda, Goa",
    rating: 5,
    avatar: "PK",
    accent: "#5f7b94",
    text: "The visitor tracking setup has reduced confusion during school hours. Support calls are answered faster than I expected.",
  },
  {
    id: 7,
    name: "Nitin Sawant",
    role: "Site Engineer",
    location: "Vasco, Goa",
    rating: 4,
    avatar: "NS",
    accent: "#5f7b94",
    text: "Cable routing was neat and didn’t leave the place looking messy. That mattered a lot on an active commercial site.",
  },
  {
    id: 8,
    name: "Shreya Kulkarni",
    role: "Clinic Director",
    location: "Porvorim, Goa",
    rating: 5,
    avatar: "SK",
    accent: "#8ca4ac",
    text: "We wanted reception monitoring without making patients uncomfortable. The final placement feels discreet and practical.",
  },
  {
    id: 9,
    name: "Ganesh Chari",
    role: "Apartment Secretary",
    location: "Dona Paula, Goa",
    rating: 5,
    avatar: "GC",
    accent: "#2c3a42",
    text: "Entry gate cameras and intercom integration have made resident complaints much easier to resolve with actual footage.",
  },
  {
    id: 10,
    name: "Aarti Nair",
    role: "Operations Lead",
    location: "Bicholim, Goa",
    rating: 4,
    avatar: "AN",
    accent: "#7d9cb7",
    text: "The proposal was clear and they did not oversell features we didn’t need. That gave us confidence to move ahead.",
  },
  {
    id: 11,
    name: "Rahul Mhatre",
    role: "Restaurant Partner",
    location: "Calangute, Goa",
    rating: 5,
    avatar: "RM",
    accent: "#486071",
    text: "Kitchen, billing counter, and entrance are all visible in one place now. Playback is fast when we need to check incidents.",
  },
  {
    id: 12,
    name: "Fatima Sheikh",
    role: "Office Manager",
    location: "Mapusa, Goa",
    rating: 5,
    avatar: "FS",
    accent: "#5f7b94",
    text: "Their team coordinated well with our interior work and avoided delays. The final finish looks professional, not temporary.",
  },
  {
    id: 13,
    name: "Devendra Pawar",
    role: "Factory Admin",
    location: "Curchorem, Goa",
    rating: 4,
    avatar: "DP",
    accent: "#5f7b94",
    text: "We had blind spots near loading areas earlier. The updated layout fixed that and improved supervisor visibility during shifts.",
  },
  {
    id: 14,
    name: "Nisha Borkar",
    role: "Boutique Owner",
    location: "Panjim, Goa",
    rating: 5,
    avatar: "NB",
    accent: "#8ca4ac",
    text: "I liked that they recommended compact cameras for a smaller store. It feels secure without looking too industrial.",
  },
  {
    id: 15,
    name: "Clinton Dsouza",
    role: "Property Consultant",
    location: "Siolim, Goa",
    rating: 5,
    avatar: "CD",
    accent: "#2c3a42",
    text: "Remote viewing has been stable even when I’m moving between sites. That has saved me a lot of follow-up calls.",
  },
  {
    id: 16,
    name: "Komal Verma",
    role: "Admin Executive",
    location: "Old Goa, Goa",
    rating: 4,
    avatar: "KV",
    accent: "#7d9cb7",
    text: "Installation was completed in the promised window and they cleaned up well after the work. Small thing, but appreciated.",
  },
  {
    id: 17,
    name: "Pratik Salgaonkar",
    role: "Gym Owner",
    location: "Margao, Goa",
    rating: 5,
    avatar: "PS",
    accent: "#486071",
    text: "The entrance and training floor are covered properly now. Members barely notice the system, which is exactly what we wanted.",
  },
  {
    id: 18,
    name: "Heena Kapoor",
    role: "Accounts Manager",
    location: "Verem, Goa",
    rating: 5,
    avatar: "HK",
    accent: "#5f7b94",
    text: "We had a smooth billing process and no surprise add-ons later. The team was direct, polite, and easy to work with.",
  },
  {
    id: 19,
    name: "Omkar Rane",
    role: "Resort Supervisor",
    location: "Anjuna, Goa",
    rating: 4,
    avatar: "OR",
    accent: "#5f7b94",
    text: "The camera quality near the parking and poolside is noticeably better than our previous vendor’s setup. Good improvement overall.",
  },
  {
    id: 20,
    name: "Lavina Pinto",
    role: "Front Desk Lead",
    location: "Colva, Goa",
    rating: 5,
    avatar: "LP",
    accent: "#8ca4ac",
    text: "Support after installation has been dependable. Even small questions were handled properly instead of being brushed off.",
  },
];

const CARDS_PER_VIEW = 4;
const AUTO_ADVANCE_MS = 3500;

function chunkReviews(items: Review[], size: number) {
  const groups: Review[][] = [];

  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }

  return groups;
}

export default function Testimonials() {
  const groupedReviews = useMemo(() => chunkReviews(reviews, CARDS_PER_VIEW), []);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentGroup((active) => (active + 1) % groupedReviews.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [groupedReviews.length]);

  return (
    <section className="elemen-dots" style={{ padding: "88px 0" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
        <div className="text-center" style={{ marginBottom: 42 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: 3,
              color: "var(--wine-berry)",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Client Reviews
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--navy)",
              margin: "12px 0 10px",
              fontWeight: 700,
            }}
          >
            Real feedback from completed installations
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.985 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 22,
              }}
            >
              {groupedReviews[currentGroup].map((review, index) => (
                <motion.article
                  key={review.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    borderRadius: 24,
                    border: "1px solid rgba(91,29,54,0.08)",
                    boxShadow: "0 18px 48px rgba(26,39,68,0.08)",
                    padding: 22,
                    aspectRatio: "1 / 1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(145deg, ${review.accent}10, transparent 45%, ${review.accent}16)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: 14,
                          background: `linear-gradient(135deg, ${review.accent}, ${review.accent}cc)`,
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: 14,
                          boxShadow: `0 12px 24px ${review.accent}33`,
                        }}
                      >
                        {review.avatar}
                      </div>
                      <Quote size={26} color={review.accent} strokeWidth={2.2} />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        marginBottom: 14,
                      }}
                    >
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          fill={starIndex < review.rating ? "#f59e0b" : "none"}
                          color={starIndex < review.rating ? "#f59e0b" : "#d1d5db"}
                        />
                      ))}
                    </div>

                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {review.text}
                    </p>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      paddingTop: 18,
                      borderTop: "1px solid rgba(26,39,68,0.08)",
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>
                      {review.name}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-mid)", marginBottom: 2 }}>{review.role}</div>
                    <div style={{ fontSize: 12, color: "var(--text-light)", letterSpacing: 0.3 }}>{review.location}</div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 26,
          }}
        >
          {groupedReviews.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show review group ${index + 1}`}
              onClick={() => setCurrentGroup(index)}
              style={{
                width: currentGroup === index ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                background: currentGroup === index ? "var(--wine-berry)" : "rgba(26,39,68,0.16)",
                cursor: "pointer",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
