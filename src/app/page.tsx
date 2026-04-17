"use client";
import React, { useState, useEffect, useRef } from "react";

/* ── Font shorthands ─────────────────────────────────────────────────────── */
const FH = "var(--font-anton,  'Anton',        system-ui)";
const FB = "var(--font-grotesk,'Space Grotesk',system-ui)";
const FAC = "var(--font-caveat, 'Caveat',        cursive)";

/* ── Data ────────────────────────────────────────────────────────────────── */

const person = {
  initials: "PNLES",
  firstName: "PATRICK",
  lastName: "ESTRELLA",
  role: "Full-Stack Developer",
  tagline: "Building real-world systems, one commit at a time.",
  bio: [
    "4th-year BSIT student and full-stack developer with hands-on experience building and deploying web and mobile applications. I thrive at the intersection of backend architecture and seamless frontend integration.",
    "Experienced with Node.js, React.js, React Native, MongoDB, and Firebase — from REST APIs and LLM integrations to scalable mobile platforms. Currently seeking an IT internship to contribute to real-world systems.",
  ],
  location: "Camarines Sur, Philippines",
  email: "pnlestrella@gmail.com",
  linkedin: "https://www.linkedin.com/in/pnlestrella",
  github: "https://github.com/pnlestrella",
  twitter: "#",
};

const stats = [
  { value: "4th", label: "Year\nBSIT Student" },
  { value: "5+", label: "Projects\nShipped" },
  { value: "2+", label: "Years\nExperience" },
];

const experience = [
  {
    period: "Jan 12 — Present",
    institution: "Cloud Ready Corp",
    role: "IT Intern",
    location: "Remote",
    status: "active" as const,
    highlights: [
      "Contributed to cloud infrastructure projects",
      "Gained hands-on experience with enterprise systems",
    ],
  },
  {
    period: "Aug 2022 — Present",
    institution: "Ateneo de Naga University",
    role: "BSIT (Bachelor of Science in Information Technology)",
    location: "Camarines Sur",
    status: "active" as const,
    highlights: [
      "Advanced software engineering and systems design",
      "Capstone projects in full-stack development",
    ],
  },
  {
    period: "Aug 2020 — Jul 2022",
    institution: "Gardner College Diliman",
    role: "ICT (Information & Communications Technology)",
    location: "Quezon City",
    status: "completed" as const,
    highlights: [
      "Foundation in web and digital technologies",
      "Project-based learning in frontend and backend",
    ],
  },
];

const projects = [
  {
    no: "01",
    name: "Connext",
    year: "2025",
    category: "Mobile App",
    description:
      "Mobile platform for centralized job search and recruitment using Retrieval-Augmented Generation (RAG). Built core backend services in Node.js with LLM integration, and Python (FastAPI) for NLP and AI features. Deployed to Railway with MongoDB and Firebase Auth.",
    tags: [
      "Node.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "Firebase",
      "React Native",
    ],
    link: "#",
  },
  {
    no: "02",
    name: "ADNnounce",
    year: "2025",
    category: "Mobile App",
    description:
      "Social media-style mobile app for Ateneo de Naga University's student government, streamlining org announcements for timely student updates. Designed and implemented backend services using Node.js and Firebase.",
    tags: ["Node.js", "Firebase", "React Native", "REST APIs"],
    link: "#",
  },
  {
    no: "03",
    name: "Hospital Patient Portal",
    year: "2025",
    category: "Web App",
    description:
      "Centralized hospital patient portal integrating multiple web applications into a single platform. Built with Node.js, MongoDB, and React (Vite). Implemented Google OAuth 2.0 via Passport.js with JWT tokens.",
    tags: ["Node.js", "MongoDB", "React.js", "Passport.js", "JWT"],
    link: "#",
  },
];

const socials = [
  { label: "GitHub", href: person.github },
  { label: "LinkedIn", href: person.linkedin },
  { label: "Email", href: `mailto:${person.email}` },
];

/* ── Navbar ──────────────────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 100,
        background: scrolled ? "rgba(245,242,238,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition:
          "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: FH,
            fontSize: 26,
            letterSpacing: "0.04em",
            color: "var(--fg)",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          {person.initials}.
        </a>

        <nav
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
        >
          {(["Work", "About", "Contact"] as const).map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="nav-link"
              style={{
                fontFamily: FB,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--fg)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}

          <a
            href={`mailto:${person.email}`}
            className="btn-solid"
            style={{
              fontFamily: FB,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--fg-inv)",
              background: "var(--fg)",
              padding: "0.55rem 1.4rem",
              textDecoration: "none",
            }}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */

function Hero() {
  const placeholderRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        padding: "6rem 2rem 4rem",
        background: "#F5F2EE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background text elements */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            fontSize: "clamp(60px, 12vw, 280px)",
            fontFamily: FH,
            fontWeight: 700,
            color: "rgba(196, 168, 130, 0.08)",
            lineHeight: 1.1,
            width: "120%",
            textAlign: "right",
            transform: "rotate(-15deg)",
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.02em",
          }}
        >
          GARDNER{"\n"}COLLEGE
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "-5%",
            fontSize: "clamp(50px, 10vw, 240px)",
            fontFamily: FH,
            fontWeight: 700,
            color: "rgba(140, 123, 107, 0.08)",
            lineHeight: 1.1,
            width: "100%",
            transform: "rotate(12deg)",
            whiteSpace: "pre-wrap",
            letterSpacing: "-0.02em",
          }}
        >
          ATENEO{"\n"}BSIT
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "-10%",
            fontSize: "clamp(45px, 9vw, 200px)",
            fontFamily: FH,
            fontWeight: 700,
            color: "rgba(196, 168, 130, 0.06)",
            lineHeight: 1.2,
            transform: "rotate(-20deg)",
            whiteSpace: "nowrap",
            letterSpacing: "0.05em",
          }}
        >
          CLOUD READY
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "-5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "100%" }}>
            <p
              style={{
                fontFamily: FB,
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                background: "#C4A882",
                color: "#FFFFFF",
                padding: "0.85rem 1.8rem",
                borderRadius: "8px",
                boxShadow: "0 4px 16px rgba(196, 168, 130, 0.3)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  flexShrink: 0,
                }}
              />
              {person.role}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <h1
            style={{
              fontFamily: FH,
              fontSize: "clamp(76px, 15vw, 192px)",
              lineHeight: 0.86,
              letterSpacing: "0.01em",
              userSelect: "none",
              margin: 0,
            }}
          >
            <div style={{ color: "var(--fg)" }}>{person.firstName}</div>
            <div
              style={{
                color: "transparent",
                WebkitTextStroke: "2px var(--fg)",
              }}
            >
              {person.lastName}
            </div>
          </h1>

          <div
            ref={placeholderRef}
            style={{
              width: "clamp(250px, 45vw, 500px)",
              height: "clamp(250px, 45vw, 500px)",
              flexShrink: 0,
            }}
          >
            <video
              autoPlay
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            >
              <source src="/chibi-animation.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2.5rem",
            marginTop: "2rem",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <p
              style={{
                fontFamily: FAC,
                fontSize: 22,
                color: "var(--accent)",
                marginBottom: "0.75rem",
                lineHeight: 1.4,
              }}
            >
              &ldquo;{person.tagline}&rdquo;
            </p>
            <p
              style={{
                fontFamily: FB,
                fontSize: 13,
                lineHeight: 1.8,
                color: "var(--fg-muted)",
              }}
            >
              Based in {person.location}. Crafting high-performance web
              applications from architecture to final pixel.
            </p>
          </div>

          <a
            href="#work"
            className="btn-solid"
            style={{
              fontFamily: FB,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--fg-inv)",
              background: "var(--fg)",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            View Work {"\u2197"}
          </a>
        </div>
      </div>

      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "18%",
          right: "4%",
          fontFamily: FAC,
          fontSize: 13,
          opacity: 0.1,
          transform: "rotate(-14deg)",
          pointerEvents: "none",
          lineHeight: 2,
          textAlign: "center",
          color: "var(--fg)",
        }}
      >
        clean code
        <br />
        clean design
        <br />
        clean results
      </span>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid var(--border)",
          padding: "1.25rem 2rem",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {["Available for freelance", "Scroll to explore \u2193"].map((t) => (
            <span
              key={t}
              style={{
                fontFamily: FB,
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.3,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Marquee ─────────────────────────────────────────────────────────────── */

const TICKER =
  "FULL STACK DEVELOPER \u00b7 OPEN SOURCE \u00b7 AVAILABLE FOR HIRE \u00b7 REACT \u00b7 NODE.JS \u00b7 TYPESCRIPT \u00b7 NEXT.JS \u00b7 CLEAN CODE \u00b7 ";

function Marquee() {
  return (
    <div
      aria-hidden
      style={{ background: "var(--fg)", overflow: "hidden", padding: "14px 0" }}
    >
      <div className="marquee-inner">
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: FH,
              fontSize: 13,
              letterSpacing: "0.1em",
              color: "var(--fg-inv)",
              whiteSpace: "nowrap",
              paddingRight: "0.5em",
            }}
          >
            {TICKER}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Project card ────────────────────────────────────────────────────────── */

type Project = (typeof projects)[0];

function ProjectCard({ p }: { p: Project }) {
  const [hov, setHov] = useState(false);

  return (
    <article
      className="proj-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: "1px solid var(--border)",
        background: hov ? "var(--fg)" : "var(--bg)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: FB,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: hov ? "var(--accent-warm)" : "var(--accent)",
          }}
        >
          {p.no}
        </span>
        <span
          style={{
            fontFamily: FB,
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: hov ? "rgba(245,242,238,0.4)" : "var(--fg-muted)",
          }}
        >
          {p.year} {"\u00b7"} {p.category}
        </span>
      </div>

      <h3
        style={{
          fontFamily: FH,
          fontSize: "clamp(22px, 2.8vw, 34px)",
          lineHeight: 1.0,
          letterSpacing: "0.02em",
          color: hov ? "var(--fg-inv)" : "var(--fg)",
        }}
      >
        {p.name.toUpperCase()}
      </h3>

      <p
        style={{
          fontFamily: FB,
          fontSize: 13,
          lineHeight: 1.75,
          color: hov ? "rgba(245,242,238,0.55)" : "var(--fg-muted)",
          flexGrow: 1,
        }}
      >
        {p.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {p.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: FB,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.2rem 0.55rem",
              border: hov
                ? "1px solid rgba(245,242,238,0.2)"
                : "1px solid var(--border)",
              color: hov ? "rgba(245,242,238,0.6)" : "var(--fg-muted)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: FB,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: hov ? "var(--fg-inv)" : "var(--fg)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          alignSelf: "flex-start",
        }}
      >
        View Project
        <span
          style={{
            display: "inline-block",
            transform: hov ? "translate(3px,-3px)" : "none",
            transition: "transform 0.22s ease",
          }}
        >
          {"\u2197"}
        </span>
      </a>
    </article>
  );
}

/* ── Experience ──────────────────────────────────────────────────────────── */

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem",
        background: "var(--fg)",
        color: "var(--fg-inv)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: FB,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent-warm)",
                marginBottom: "1.5rem",
              }}
            >
              {"\u2736"} About Me
            </p>
            <h2
              style={{
                fontFamily: FH,
                fontSize: "clamp(38px, 5vw, 62px)",
                lineHeight: 1,
                letterSpacing: "0.02em",
                color: "var(--fg-inv)",
                marginBottom: "2rem",
              }}
            >
              LESS TALK,
              <br />
              MORE SHIP.
            </h2>

            {person.bio.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: FB,
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "rgba(245,242,238,0.6)",
                  marginBottom: i < person.bio.length - 1 ? "1rem" : "2.5rem",
                }}
              >
                {para}
              </p>
            ))}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(245,242,238,0.1)",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: FH,
                      fontSize: 40,
                      color: "var(--fg-inv)",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: FB,
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(245,242,238,0.35)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Experience Timeline */}
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent-warm)",
                  marginBottom: "0.75rem",
                }}
              >
                {"\u2736"} Background
              </p>
            </div>

            {/* Timeline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {experience.map((exp, i) => {
                const isActive = exp.status === "active";
                const isLast = i === experience.length - 1;
                const isFirst = i === 0;

                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      paddingBottom: isLast ? 0 : "2rem",
                    }}
                  >
                    {/* Timeline indicator */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                        paddingTop: "3px",
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: isActive
                            ? "var(--accent-warm)"
                            : "rgba(196,168,130,0.3)",
                          flexShrink: 0,
                        }}
                      />
                      {!isLast && (
                        <div
                          style={{
                            width: "1px",
                            flex: 1,
                            background: "rgba(196,168,130,0.2)",
                            marginTop: "6px",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.25rem",
                          gap: "0.75rem",
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: FB,
                            fontSize: isFirst ? 15 : 13,
                            fontWeight: 700,
                            color: isActive
                              ? "var(--fg-inv)"
                              : "rgba(245,242,238,0.5)",
                            margin: 0,
                          }}
                        >
                          {exp.institution}
                        </h4>
                        {isActive ? (
                          <span
                            style={{
                              fontFamily: FB,
                              fontSize: 8,
                              fontWeight: 700,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--accent-warm)",
                              border: "1px solid rgba(196,168,130,0.5)",
                              padding: "0.15rem 0.45rem",
                              borderRadius: "2px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Now
                          </span>
                        ) : (
                          <span
                            style={{
                              fontFamily: FB,
                              fontSize: 8,
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "rgba(245,242,238,0.2)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Done
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontFamily: FB,
                          fontSize: 10,
                          color: isActive
                            ? "var(--accent-warm)"
                            : "rgba(196,168,130,0.4)",
                          margin: "0 0 0.2rem 0",
                          fontWeight: 600,
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{
                          fontFamily: FB,
                          fontSize: 9,
                          color: "rgba(245,242,238,0.25)",
                          margin: 0,
                        }}
                      >
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Work section ────────────────────────────────────────────────────────── */

function Work() {
  return (
    <section
      id="work"
      style={{ padding: "8rem 2rem", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid var(--border)",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: FB,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "0.75rem",
              }}
            >
              {"\u2736"} Selected Work
            </p>
            <h2
              style={{
                fontFamily: FH,
                fontSize: "clamp(40px, 6.5vw, 80px)",
                lineHeight: 1,
                letterSpacing: "0.02em",
                color: "var(--fg)",
              }}
            >
              PROJECTS
            </h2>
          </div>
          <p
            style={{
              fontFamily: FB,
              fontSize: 13,
              color: "var(--fg-muted)",
              maxWidth: 280,
              lineHeight: 1.7,
              textAlign: "right",
            }}
          >
            Selected work built for clients and personal exploration.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.no} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ─────────────────────────────────────────────────────────────── */

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: FB,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.5rem",
          }}
        >
          {"\u2736"} Get In Touch
        </p>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: FH,
                fontSize: "clamp(48px, 8vw, 100px)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
                color: "var(--fg)",
                marginBottom: "2.5rem",
              }}
            >
              LET&rsquo;S
              <br />
              WORK
              <br />
              TOGETHER
            </h2>
            <p
              style={{
                fontFamily: FB,
                fontSize: 14,
                lineHeight: 1.8,
                color: "var(--fg-muted)",
                maxWidth: 400,
              }}
            >
              Have a project in mind? I&rsquo;m available for freelance work and
              open to full-time opportunities. Let&rsquo;s build something
              great.
            </p>
          </div>

          {/* Right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              paddingTop: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.35,
                  marginBottom: "0.6rem",
                }}
              >
                Email
              </p>
              <a
                href={`mailto:${person.email}`}
                className="contact-email"
                style={{
                  fontFamily: FB,
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--fg)",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  display: "block",
                }}
              >
                {person.email}
              </a>
            </div>

            <div>
              <p
                style={{
                  fontFamily: FB,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.35,
                  marginBottom: "1rem",
                }}
              >
                Social
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="social-link"
                    style={{
                      fontFamily: FB,
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: "var(--fg)",
                      textDecoration: "none",
                      opacity: 0.6,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    {s.label}
                    <span style={{ opacity: 0.5 }}>{"\u2197"}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${person.email}`}
              className="btn-solid"
              style={{
                fontFamily: FB,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--fg-inv)",
                background: "var(--fg)",
                padding: "1.1rem 2.5rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Send a Message {"\u2192"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      style={{
        background: "var(--fg)",
        padding: "2.5rem 2rem",
        borderTop: "1px solid rgba(245,242,238,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: FH,
            fontSize: 24,
            letterSpacing: "0.04em",
            color: "var(--fg-inv)",
          }}
        >
          {person.initials}.
        </span>
        <p
          style={{
            fontFamily: FB,
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "rgba(245,242,238,0.25)",
          }}
        >
          &copy; {new Date().getFullYear()} {person.firstName} {person.lastName}
          . All rights reserved.
        </p>
        <span
          style={{
            fontFamily: FAC,
            fontSize: 15,
            color: "rgba(245,242,238,0.18)",
            transform: "rotate(-1.5deg)",
            display: "inline-block",
          }}
        >
          Built with Next.js {"\u2736"}
        </span>
      </div>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
