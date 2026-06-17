import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const DUST_PARTICLES = [
  { x: 8, y: 15, size: 2, delay: 0, dur: 9 },
  { x: 22, y: 72, size: 1.5, delay: 1.2, dur: 11 },
  { x: 45, y: 38, size: 1, delay: 0.4, dur: 13 },
  { x: 67, y: 85, size: 2, delay: 2.1, dur: 8 },
  { x: 78, y: 22, size: 1, delay: 3.3, dur: 12 },
  { x: 90, y: 55, size: 1.5, delay: 0.8, dur: 7 },
  { x: 12, y: 90, size: 2, delay: 1.5, dur: 14 },
  { x: 35, y: 5, size: 1, delay: 4.2, dur: 10 },
  { x: 55, y: 60, size: 2, delay: 2.8, dur: 11 },
  { x: 88, y: 40, size: 1, delay: 0.3, dur: 9 },
  { x: 5, y: 48, size: 1.5, delay: 3.7, dur: 15 },
  { x: 72, y: 10, size: 1, delay: 1.9, dur: 10 },
  { x: 30, y: 95, size: 2, delay: 4.5, dur: 8 },
  { x: 95, y: 75, size: 1, delay: 2.3, dur: 12 },
  { x: 18, y: 30, size: 1.5, delay: 5.1, dur: 9 },
  { x: 60, y: 18, size: 1, delay: 1.1, dur: 11 },
  { x: 42, y: 78, size: 2, delay: 3.9, dur: 10 },
  { x: 83, y: 62, size: 1, delay: 0.7, dur: 7 },
  { x: 15, y: 55, size: 1.5, delay: 2.6, dur: 14 },
  { x: 70, y: 33, size: 1, delay: 4.8, dur: 9 },
  { x: 50, y: 88, size: 2, delay: 1.6, dur: 12 },
  { x: 25, y: 8, size: 1, delay: 3.2, dur: 8 },
  { x: 92, y: 22, size: 1.5, delay: 0.9, dur: 13 },
  { x: 38, y: 47, size: 1, delay: 2.4, dur: 10 },
  { x: 62, y: 68, size: 2, delay: 5.5, dur: 7 },
  { x: 3, y: 65, size: 1, delay: 1.4, dur: 11 },
  { x: 48, y: 25, size: 1.5, delay: 4.0, dur: 9 },
  { x: 80, y: 80, size: 1, delay: 0.6, dur: 13 },
  { x: 20, y: 45, size: 2, delay: 3.1, dur: 8 },
  { x: 58, y: 92, size: 1, delay: 2.0, dur: 10 },
];

const GOLD_PARTICLES = [
  { offX: -32, offY: -20, delay: 1.5, dur: 3.2 },
  { offX: -18, offY: -10, delay: 2.1, dur: 2.8 },
  { offX: 10, offY: -15, delay: 1.8, dur: 3.5 },
  { offX: 28, offY: -8, delay: 2.8, dur: 3.0 },
  { offX: -40, offY: 5, delay: 3.2, dur: 3.3 },
  { offX: 5, offY: -22, delay: 1.2, dur: 4.0 },
  { offX: -5, offY: -18, delay: 2.5, dur: 2.6 },
  { offX: 22, offY: -5, delay: 3.8, dur: 3.1 },
  { offX: -25, offY: -12, delay: 0.8, dur: 3.8 },
  { offX: 40, offY: 10, delay: 4.1, dur: 2.4 },
  { offX: 15, offY: -28, delay: 1.0, dur: 3.6 },
  { offX: -8, offY: 8, delay: 2.9, dur: 2.9 },
];

// Steam wisps: x offset from center (150), how far right (dx), height
// Left wisps taller (outer crescent arc), right wisps shorter (inner concave)
const STEAM_WISPS = [
  { x: 112, dx: -35, h: 105, w: 2.5, delay: 0.0, col: "247,240,230" },
  { x: 128, dx: -18, h: 115, w: 2.8, delay: 0.9, col: "247,240,230" },
  { x: 148, dx: -2, h: 120, w: 3.0, delay: 1.7, col: "247,240,230" },
  { x: 164, dx: 14, h: 80, w: 2.2, delay: 0.5, col: "212,175,55" },
  { x: 177, dx: 24, h: 48, w: 1.8, delay: 1.3, col: "212,175,55" },
  { x: 188, dx: 30, h: 28, w: 1.4, delay: 2.1, col: "212,175,55" },
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [pouringStarted, setPouringStarted] = useState(false);
  const [showMist, setShowMist] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const pourTimer = setTimeout(() => setPouringStarted(true), 1300);

    let rafId: number;
    let startTime: number | null = null;
    const TOTAL_DURATION = 4500;
    const START_DELAY = 1300;
    let completed = false;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime - START_DELAY;
      if (elapsed > 0 && !completed) {
        const newProg = Math.min(100, Math.round((elapsed / TOTAL_DURATION) * 100));
        setProgress(newProg);
        if (newProg >= 100) {
          completed = true;
          setTimeout(() => setShowMist(true), 150);
          setTimeout(() => setIsExiting(true), 1500);
          setTimeout(() => onComplete(), 2100);
          return;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      clearTimeout(pourTimer);
      cancelAnimationFrame(rafId);
    };
  }, [onComplete]);

  // Cup interior: y=140 to y=290, height=150
  const CUP_TOP = 140;
  const CUP_HEIGHT = 150;
  const fillFrac = progress / 100;
  const coffeeFillY = CUP_TOP + CUP_HEIGHT * (1 - fillFrac);
  const coffeeFillH = CUP_HEIGHT * fillFrac;

  // Center of cup for gold particles
  const CX = 150;
  const CY_RIM = 135;

  const steamOpacity = progress > 20 ? Math.min(1, (progress - 20) / 35) : 0;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center select-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #3a0d13 0%, #28090f 45%, #1A0A0A 100%)",
          }}
        >
          {/* Edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, rgba(0,0,0,0.75) 100%)",
            }}
          />

          {/* Ambient center glow */}
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 560,
              height: 560,
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.07) 0%, rgba(180,30,50,0.05) 50%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating dust particles */}
          {DUST_PARTICLES.map((p, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: "rgba(212,175,55,0.35)",
                boxShadow: "0 0 3px rgba(212,175,55,0.2)",
              }}
              animate={{
                y: [0, -100, -200],
                opacity: [0, 0.55, 0],
                x: [0, i % 2 === 0 ? 12 : -12, i % 2 === 0 ? 20 : -20],
              }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* ── Main content ── */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Top tagline */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-center mb-6"
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(212,175,55,0.7)",
                  fontSize: "10px",
                  letterSpacing: "0.55em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                ✦ &nbsp; Est. 2026 &nbsp; ✦
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#F7F0E6",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textShadow:
                    "0 0 60px rgba(212,175,55,0.25), 0 2px 20px rgba(0,0,0,0.8)",
                  fontSize: "clamp(1.9rem, 5.5vw, 3.2rem)",
                  lineHeight: 1.1,
                }}
              >
                Moon Light Cafe
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(212,175,55,0.65)",
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  marginTop: "10px",
                  fontStyle: "italic",
                }}
              >
                Crafted Under The Moonlight
              </motion.p>
            </motion.div>

            {/* ── SVG Coffee Cup ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Soft glow under cup */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "200px",
                  height: "80px",
                  background:
                    "radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, transparent 70%)",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  filter: "blur(8px)",
                }}
              />

              <svg
                width="260"
                height="330"
                viewBox="0 0 300 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Cup interior clip */}
                  <clipPath id="cupInteriorClip">
                    <path d="M 72,140 L 93,291 L 207,291 L 228,140 Z" />
                  </clipPath>

                  {/* Coffee fill gradient (espresso tones) */}
                  <linearGradient
                    id="coffeeGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#8B4513" />
                    <stop offset="40%" stopColor="#4a2010" />
                    <stop offset="100%" stopColor="#2B1D18" />
                  </linearGradient>

                  {/* Coffee surface shimmer */}
                  <radialGradient
                    id="coffeeSurface"
                    cx="40%"
                    cy="35%"
                    r="60%"
                  >
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#8B6914" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#4a2010" stopOpacity="0" />
                  </radialGradient>

                  {/* Cup body gradient */}
                  <linearGradient
                    id="cupBodyGrad"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#3d0815" />
                    <stop offset="35%" stopColor="#6d1023" />
                    <stop offset="65%" stopColor="#7a1428" />
                    <stop offset="100%" stopColor="#3a0612" />
                  </linearGradient>

                  {/* Pour stream gradient */}
                  <linearGradient
                    id="pourGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.95" />
                    <stop
                      offset="60%"
                      stopColor="#8B5E3C"
                      stopOpacity="0.85"
                    />
                    <stop
                      offset="100%"
                      stopColor="#4a2010"
                      stopOpacity="0.75"
                    />
                  </linearGradient>

                  {/* Saucer gradient */}
                  <linearGradient
                    id="saucerGrad"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#3a0612" />
                    <stop offset="50%" stopColor="#5c0e1f" />
                    <stop offset="100%" stopColor="#3a0612" />
                  </linearGradient>

                  {/* Rim glow */}
                  <filter id="rimGlow">
                    <feGaussianBlur stdDeviation="1.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Pour blur */}
                  <filter id="pourBlur">
                    <feGaussianBlur stdDeviation="2" />
                  </filter>

                  {/* Steam blur */}
                  <filter id="steamBlur">
                    <feGaussianBlur stdDeviation="3.5" />
                  </filter>
                </defs>

                {/* ── Pour stream ── */}
                {pouringStarted && (
                  <g>
                    {/* Main stream */}
                    <motion.path
                      d="M 151,5 Q 148,45 150,88 Q 151,115 150,133"
                      stroke="url(#pourGrad)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#pourBlur)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: progress < 97 ? 1 : 0,
                        opacity: progress < 97 ? 0.9 : 0,
                      }}
                      transition={{
                        pathLength: { duration: 0.45, ease: "easeOut" },
                        opacity: { duration: 0.4 },
                      }}
                    />
                    {/* Secondary shimmer stream */}
                    <motion.path
                      d="M 149,5 Q 146,42 147,85 Q 148,112 149,131"
                      stroke="rgba(212,175,55,0.35)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#pourBlur)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: progress < 97 ? 1 : 0,
                        opacity: progress < 97 ? 0.5 : 0,
                      }}
                      transition={{
                        pathLength: {
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.08,
                        },
                        opacity: { duration: 0.4, delay: 0.08 },
                      }}
                    />
                    {/* Pour origin droplet */}
                    {progress < 97 && (
                      <motion.circle
                        cx={150}
                        cy={8}
                        r={6}
                        fill="#D4AF37"
                        animate={{ opacity: [0.5, 1, 0.5], r: [5, 7, 5] }}
                        transition={{ duration: 0.9, repeat: Infinity }}
                      />
                    )}
                    {/* Splash droplets at rim */}
                    {progress > 3 && progress < 97 && [
                      { cx: 132, cy: 145, r: 2.5, delay: 0 },
                      { cx: 168, cy: 143, r: 2, delay: 0.3 },
                      { cx: 145, cy: 150, r: 1.5, delay: 0.6 },
                      { cx: 158, cy: 147, r: 2, delay: 0.15 },
                    ].map((d, i) => (
                      <motion.circle
                        key={`drop-${i}`}
                        cx={d.cx}
                        cy={d.cy}
                        r={d.r}
                        fill="#8B5E3C"
                        animate={{
                          cy: [d.cy, d.cy - 8, d.cy + 2],
                          opacity: [0, 0.7, 0],
                        }}
                        transition={{
                          duration: 0.7,
                          delay: d.delay,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                        }}
                      />
                    ))}
                  </g>
                )}

                {/* ── Saucer ── */}
                <ellipse
                  cx="150"
                  cy="308"
                  rx="100"
                  ry="14"
                  fill="url(#saucerGrad)"
                />
                <ellipse
                  cx="150"
                  cy="308"
                  rx="100"
                  ry="14"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  fill="none"
                />
                <ellipse
                  cx="150"
                  cy="305"
                  rx="80"
                  ry="8"
                  fill="none"
                  stroke="rgba(212,175,55,0.25)"
                  strokeWidth="1"
                />
                {/* Saucer highlight */}
                <ellipse
                  cx="130"
                  cy="303"
                  rx="25"
                  ry="4"
                  fill="rgba(255,255,255,0.04)"
                />

                {/* ── Cup body ── */}
                <path
                  d="M 63,135 L 88,294 L 212,294 L 237,135 Z"
                  fill="url(#cupBodyGrad)"
                />

                {/* Cup left highlight strip */}
                <path
                  d="M 66,148 L 85,288 L 94,288 L 74,148 Z"
                  fill="rgba(255,255,255,0.03)"
                />
                {/* Cup right shadow strip */}
                <path
                  d="M 234,148 L 215,288 L 207,288 L 226,148 Z"
                  fill="rgba(0,0,0,0.15)"
                />

                {/* ── Coffee fill (clipped) ── */}
                <motion.rect
                  x="62"
                  width="176"
                  fill="url(#coffeeGrad)"
                  clipPath="url(#cupInteriorClip)"
                  animate={{
                    y: coffeeFillY,
                    height: Math.max(0, coffeeFillH),
                  }}
                  transition={{ duration: 0.08, ease: "linear" }}
                />

                {/* Coffee surface shimmer */}
                {progress > 2 && (
                  <motion.ellipse
                    cx={150}
                    rx={74}
                    ry={9}
                    fill="url(#coffeeSurface)"
                    clipPath="url(#cupInteriorClip)"
                    animate={{ cy: coffeeFillY + 5 }}
                    transition={{ duration: 0.08, ease: "linear" }}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.5;0.9;0.5"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </motion.ellipse>
                )}

                {/* ── Top rim (outer ellipse) ── */}
                <ellipse
                  cx="150"
                  cy="135"
                  rx="87"
                  ry="18"
                  fill="#4a0012"
                  stroke="#D4AF37"
                  strokeWidth="2.2"
                  filter="url(#rimGlow)"
                />
                {/* Rim inner dark */}
                <ellipse cx="150" cy="135" rx="74" ry="13" fill="#1a0808" />
                {/* Rim gold arc highlight */}
                <path
                  d="M 68,128 Q 150,115 232,128"
                  stroke="rgba(212,175,55,0.65)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* ── Handle ── */}
                {/* Handle outer (gold) */}
                <path
                  d="M 235,160 C 292,168 294,228 235,234"
                  stroke="#D4AF37"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Handle fill (body color) */}
                <path
                  d="M 235,160 C 278,167 280,228 235,234"
                  stroke="url(#cupBodyGrad)"
                  strokeWidth="9"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Handle inner gold line */}
                <path
                  d="M 235,162 C 274,169 276,226 235,232"
                  stroke="rgba(212,175,55,0.3)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Side gold accent lines */}
                <path
                  d="M 67,152 L 90,291"
                  stroke="rgba(212,175,55,0.12)"
                  strokeWidth="1"
                />
                <path
                  d="M 233,152 L 210,291"
                  stroke="rgba(212,175,55,0.12)"
                  strokeWidth="1"
                />
                {/* Bottom edge accent */}
                <path
                  d="M 90,292 L 210,292"
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                />

                {/* ── Steam (crescent moon formation) ── */}
                <g
                  style={{
                    opacity: steamOpacity,
                    transition: "opacity 1.2s ease",
                  }}
                >
                  {STEAM_WISPS.map((s, i) => (
                    <motion.path
                      key={`steam-${i}`}
                      d={`M ${s.x},128 Q ${s.x + s.dx * 0.4},${128 - s.h * 0.55} ${s.x + s.dx},${128 - s.h}`}
                      stroke={`rgba(${s.col},0.18)`}
                      strokeWidth={s.w}
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#steamBlur)"
                      animate={{
                        opacity: [0, 0.7, 0.5, 0],
                        pathLength: [0, 1, 1, 0.8],
                      }}
                      transition={{
                        duration: 3.8,
                        delay: s.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                        repeatDelay: 0.3,
                      }}
                    />
                  ))}

                  {/* Moon crescent suggestion (subtle arc) */}
                  {progress > 45 && (
                    <motion.path
                      d="M 115,55 Q 140,20 170,30 Q 145,10 115,55 Z"
                      fill="rgba(212,175,55,0.04)"
                      stroke="rgba(212,175,55,0.08)"
                      strokeWidth="1"
                      animate={{ opacity: [0, 0.6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </g>

                {/* ── Gold particles floating up ── */}
                {progress > 15 &&
                  GOLD_PARTICLES.map((p, i) => (
                    <motion.circle
                      key={`gp-${i}`}
                      cx={CX + p.offX}
                      cy={CY_RIM + p.offY}
                      r={1.4}
                      fill="#D4AF37"
                      initial={{ opacity: 0, cy: CY_RIM + p.offY }}
                      animate={{
                        opacity: [0, 0.9, 0],
                        cy: [CY_RIM + p.offY, CY_RIM + p.offY - 70],
                      }}
                      transition={{
                        duration: p.dur,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </svg>
            </motion.div>

            {/* ── Progress counter ── */}
            <motion.div
              className="flex flex-col items-center -mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Gold divider line */}
              <div
                style={{
                  width: "120px",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)",
                  marginBottom: "14px",
                }}
              />

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#D4AF37",
                  fontSize: "2.8rem",
                  letterSpacing: "0.04em",
                  textShadow:
                    "0 0 30px rgba(212,175,55,0.45), 0 0 60px rgba(212,175,55,0.15)",
                  minWidth: "90px",
                  textAlign: "center",
                  lineHeight: 1,
                }}
              >
                {progress}%
              </div>

              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "rgba(247,240,230,0.4)",
                  fontSize: "9px",
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  marginTop: "10px",
                }}
              >
                Preparing Your Experience...
              </div>
            </motion.div>
          </div>

          {/* ── Golden mist reveal ── */}
          <AnimatePresence>
            {showMist && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  background:
                    "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(212,175,55,0.22) 0%, rgba(247,240,230,0.55) 40%, rgba(247,240,230,0.97) 100%)",
                  backdropFilter: "blur(2px)",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
