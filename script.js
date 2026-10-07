/* =========================================================================
   Sheikh Ashik Rahman — Tribute Site
   Author: Masrafi Haque
   Plain vanilla JavaScript. No libraries, no build step.

   >>> EVERYTHING EDITABLE LIVES IN THE CONFIG OBJECT BELOW <<<
   ========================================================================= */

"use strict";

/* =========================================================================
   1) CONFIG — the single place to edit content
   ========================================================================= */
const CONFIG = {
  /* --- Identity --- */
  name: "Sheikh Ashik Rahman",
  nameBn: "শেখ আশিক রহমান",
  heroSubtitleBn: "আমাদের প্রিয় গণিত স্যার",   // Bengali heartfelt subtitle
  tagline: "Where mathematics becomes magic.",   // typed out in the hero
  monogram: "AR",                                // fallback if a photo is missing

  /* --- Primary designation (shown first in the hero + roles) --- */
  designation: "Lecturer, Kurigram City College",

  /* --- Photos (relative to index.html) --- */
  photoHero: "images/sir-hero.jpg",
  photoAbout: "images/sir-about.jpg",

  /* --- Birthday (day & month only — never a year) --- */
  birthday: { day: 19, month: 6 }, // 19 June

  /* --- Roles & Ventures (section 3) --- */
  roles: [
    {
      icon: "≈",
      title: "Kurigram City College",
      role: "Lecturer",
      text: "Serving as a Lecturer at Kurigram City College, in the heart of Kurigram, Bangladesh.",
      featured: true
    },
    {
      icon: "∑",
      title: "Scholastica Coaching Center",
      role: "Lead Mathematics Teacher",
      text: "Guiding students through the beauty of mathematics with clarity, structure and warmth."
    },
    {
      icon: "π",
      title: "Ashik Mathmagics",
      role: "CEO & Founder",
      text: "An initiative built to make mathematics feel simple, lively and full of wonder."
    },
    {
      icon: "∞",
      title: "Luminary (Science Private Program)",
      role: "Co-Founder & Lead Mathematics Mentor",
      text: "Mentoring curious minds and shaping strong foundations in science and mathematics."
    }
  ],

  /* --- Sir's Journey (section 4) --- */
  journey: [
    {
      year: "2012",
      title: "SSC",
      place: "Kurigram Govt. High School",
      quote: "Ohh dear!! This School is into my soul...",
      quoteBy: "Sir, on his school"
    },
    {
      year: "2012 – 2014",
      title: "HSC",
      place: "Kurigram Govt. College, Kurigram",
      note: "20 May 2012 – 30 April 2014"
    },
    {
      year: "B.Sc.",
      title: "B.Sc. in Civil Engineering",
      place: "Technology Education Center (TEC), University of Rajshahi, Faculty of Engineering"
    },
    {
      year: "Now",
      title: "Teaching & building his own ventures",
      place: "Lecturer at Kurigram City College — sharing mathematics with students and growing his own initiatives."
    }
  ],

  /* --- What Sir Taught Us (section 5) --- */
  lessons: [
    {
      icon: "√",
      title: "Making the hard simple",
      text: "Sir can turn a frightening problem into small, clear steps anyone can follow."
    },
    {
      icon: "⏳",
      title: "Patience",
      text: "He never rushes us. He waits, explains again, and lets understanding take its time."
    },
    {
      icon: "Σ",
      title: "Consistent practice",
      text: "A little every day adds up to something big — just like a steady sum."
    },
    {
      icon: "Δ",
      title: "Learning from mistakes",
      text: "Every wrong answer became a stepping stone, never a reason to feel small.",
      bn: "ভুল থেকে শেখার সাহস।"
    },
    {
      icon: "∞",
      title: "Self-belief",
      text: "He believed in us first — and slowly, we learned to believe in ourselves."
    },
    {
      icon: "θ",
      title: "Courage to dream",
      text: "He showed us that a mind from anywhere can reach anywhere."
    }
  ],

  /* --- Words from Students (section 8) ---
     Replace these SAMPLE messages with real ones from students. */
  messages: [
    // SAMPLE message 1
    {
      name: "A student",
      text: "Sir, you made me fall in love with mathematics. I will never forget your class.",
      sample: true
    },
    // SAMPLE message 2
    {
      name: "A grateful learner",
      text: "স্যার, আপনার ক্লাস আমার সবচেয়ে প্রিয় ছিল। ধন্যবাদ স্যার।",
      sample: true
    },
    // SAMPLE message 3
    {
      name: "Aditi",
      text: "Whenever I was stuck, you found a way to make it simple. Thank you, Sir.",
      sample: true
    },
    // SAMPLE message 4
    {
      name: "Rafi",
      text: "You taught us patience and confidence, not just equations. That means everything.",
      sample: true
    }
  ],

  /* --- Thank You section (section 9) --- */
  thankyou: {
    titleEn: "Thank You, Sir",
    titleBn: "ধন্যবাদ স্যার",
    creditEn: "This website is made with love and gratitude for our Sir.",
    creditBn: "এই ওয়েবসাইটটি স্যারের প্রতি ভালোবাসা ও কৃতজ্ঞতা থেকে তৈরি।"
  },

  /* --- Footer credit (section 10) --- */
  creator: {
    name: "Masrafi Haque",
    url: "https://www.facebook.com/MasrafiHaquee" // opens in a new tab
  },
  copyright: "© 2026 · All rights reserved"
};

/* =========================================================================
   2) Capability detection (reduce effects on weak devices / user choice)
   ========================================================================= */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const nav = navigator || {};
const lowEnd =
  (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4) ||
  (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2);
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const isSmallScreen = window.matchMedia("(max-width: 900px)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* =========================================================================
   3) Small DOM helpers
   ========================================================================= */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* Safely escape text for any string we ever put into HTML. */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* =========================================================================
   4) Fill in CONFIG-driven content
   ========================================================================= */
function fillConfigContent() {
  // Identity + hero
  const heroName = $("#heroName");
  const heroDesig = $("#heroDesig");
  const heroSub  = $("#heroSubtitleBn");
  const heroImg  = $("#heroPhoto");
  const aboutImg = $("#aboutPhoto");

  if (heroName) heroName.textContent = CONFIG.name;
  if (heroDesig) heroDesig.textContent = CONFIG.designation;
  if (heroSub)  heroSub.textContent  = CONFIG.heroSubtitleBn;
  if (heroImg)  heroImg.src = CONFIG.photoHero;
  if (aboutImg) aboutImg.src = CONFIG.photoAbout;

  // Roles grid
  const rolesGrid = $("#rolesGrid");
  if (rolesGrid) {
    rolesGrid.innerHTML = CONFIG.roles.map((r) => `
      <article class="card reveal${r.featured ? " card--feature" : ""}" tabindex="0">
        <div class="card__icon" aria-hidden="true">${escapeHtml(r.icon)}</div>
        <h3 class="card__title">${escapeHtml(r.title)}</h3>
        <span class="card__role">${escapeHtml(r.role)}</span>
        <p class="card__text">${escapeHtml(r.text)}</p>
      </article>`).join("");
  }

  // Timeline
  const timeline = $("#timeline");
  if (timeline) {
    timeline.innerHTML = CONFIG.journey.map((j) => `
      <li class="tl-item reveal">
        <span class="tl-year">${escapeHtml(j.year)}</span>
        <h3 class="tl-title">${escapeHtml(j.title)}</h3>
        <p class="tl-place">${escapeHtml(j.place)}</p>
        ${j.note ? `<p class="tl-place">${escapeHtml(j.note)}</p>` : ""}
        ${j.quote ? `<blockquote class="tl-quote">“${escapeHtml(j.quote)}”
          <cite>— ${escapeHtml(j.quoteBy || "")}</cite></blockquote>` : ""}
      </li>`).join("");
  }

  // Lessons
  const lessonsGrid = $("#lessonsGrid");
  if (lessonsGrid) {
    lessonsGrid.innerHTML = CONFIG.lessons.map((l) => `
      <article class="card reveal" tabindex="0">
        <div class="card__icon" aria-hidden="true">${escapeHtml(l.icon)}</div>
        <h3 class="card__title">${escapeHtml(l.title)}</h3>
        <p class="card__text">${escapeHtml(l.text)}</p>
        ${l.bn ? `<p class="card__bn bn">${escapeHtml(l.bn)}</p>` : ""}
      </article>`).join("");
  }

  // Thank-you text
  const tyTitle = $("#thankyou-title");
  const tyBn = $(".thankyou__bn");
  const tyCredit = $(".thankyou__credit");
  if (tyTitle) tyTitle.textContent = CONFIG.thankyou.titleEn;
  if (tyBn) tyBn.textContent = CONFIG.thankyou.titleBn;
  if (tyCredit) {
    tyCredit.innerHTML =
      `${escapeHtml(CONFIG.thankyou.creditEn)} <span class="bn">— ${escapeHtml(CONFIG.thankyou.creditBn)}</span>`;
  }

  // Footer credit
  const creatorLink = $("#creatorLink");
  if (creatorLink) {
    creatorLink.textContent = CONFIG.creator.name;
    creatorLink.href = CONFIG.creator.url;
    creatorLink.target = "_blank";
    creatorLink.rel = "noopener noreferrer";
  }
  const copy = $(".footer__copy");
  if (copy) copy.textContent = CONFIG.copyright;
}

/* =========================================================================
   5) Photo fallbacks -> elegant gold monogram placeholder
   ========================================================================= */
function setupPhotoFallbacks() {
  [["#heroPhotoWrap", CONFIG.photoHero], ["#aboutCard", CONFIG.photoAbout]].forEach(
    ([wrapSel, path]) => {
      const wrap = $(wrapSel);
      if (!wrap) return;
      const img = $("img", wrap);
      if (!img) return;

      const showMonogram = () => {
        const holder = document.createElement("div");
        holder.className = "monogram";
        holder.setAttribute("role", "img");
        holder.setAttribute("aria-label", CONFIG.name + " monogram");
        holder.textContent = CONFIG.monogram;
        if (img.parentNode) img.parentNode.replaceChild(holder, img);
      };

      img.addEventListener("error", showMonogram, { once: true });
      // If the browser already failed before JS attached
      if (img.complete && img.naturalWidth === 0) showMonogram();
    }
  );
}

/* =========================================================================
   6) Floating math-symbol background
   ========================================================================= */
function setupFloatingSymbols() {
  const layer = $("#bgSymbols");
  if (!layer || prefersReducedMotion) return;

  const symbols = ["π", "∑", "∞", "√", "∫", "θ", "x²", "Δ", "a²+b²=c²", "e^{iπ}+1=0", "∫ f(x) dx"];
  const count = isSmallScreen ? (lowEnd ? 5 : 6) : lowEnd ? 8 : 14;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.textContent = symbols[i % symbols.length];

    let left, top, size, opacity, dur;
    if (isSmallScreen) {
      // Bigger, softer, slower — kept near the edges so text stays readable.
      left = Math.random() < 0.5 ? 2 + Math.random() * 16 : 82 + Math.random() * 14;
      top = 4 + Math.random() * 90;
      size = 34 + Math.random() * 42;
      opacity = 0.10 + Math.random() * 0.12;
      dur = 22 + Math.random() * 14;
    } else {
      left = Math.random() * 94;
      top = Math.random() * 94;
      size = 20 + Math.random() * 46;
      opacity = 0.14 + Math.random() * 0.2;
      dur = 12 + Math.random() * 14;
    }

    const dx = (Math.random() * 36 - 18).toFixed(0);
    const dy = (-24 - Math.random() * 48).toFixed(0);
    const rot = (Math.random() * 30 - 15).toFixed(0);
    const delay = (-Math.random() * 20).toFixed(1);

    el.style.setProperty("--x", left.toFixed(1) + "%");
    el.style.setProperty("--y", top.toFixed(1) + "%");
    el.style.setProperty("--size", size.toFixed(0) + "px");
    el.style.setProperty("--dur", dur.toFixed(1) + "s");
    el.style.setProperty("--delay", delay + "s");
    el.style.setProperty("--dx", dx + "px");
    el.style.setProperty("--dy", dy + "px");
    el.style.setProperty("--rot", rot + "deg");
    el.style.setProperty("--o", opacity.toFixed(2));
    frag.appendChild(el);
  }
  layer.appendChild(frag);

  // Pause when the tab is hidden (save battery / CPU)
  document.addEventListener("visibilitychange", () => {
    layer.classList.toggle("is-paused", document.hidden);
  });
}

/* =========================================================================
   7) Scroll-reveal via IntersectionObserver (with stagger + safe fallback)
   ========================================================================= */
function setupScrollReveal() {
  const items = $$(".reveal");

  // Stagger children inside grids so they cascade in.
  ["#rolesGrid", "#lessonsGrid", "#messageWall"].forEach((sel) => {
    $$(sel + " .reveal").forEach((el, i) => {
      el.style.setProperty("--d", (i % 3) * 0.09 + "s");
    });
  });

  // Smooth hero entrance: text and photo rise in one after another.
  $$(".hero .reveal").forEach((el, i) => {
    el.style.setProperty("--d", (i * 0.14).toFixed(2) + "s");
  });

  // Add a short-lived rendering hint while the reveal plays, then free it.
  const revealIn = (el) => {
    if (el.classList.contains("is-visible")) return;
    el.classList.add("is-visible");
    el.style.willChange = "transform, opacity";
    setTimeout(() => { el.style.willChange = ""; }, 900);
  };

  const revealStuckInView = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    $$(".reveal:not(.is-visible)").forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < vh) revealIn(el); // any element already on screen must never stay hidden
    });
  };

  if (!("IntersectionObserver" in window)) {
    // No observer support: show everything immediately.
    items.forEach(revealIn);
    return;
  }

  let firedAny = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          firedAny = true;
          revealIn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px 12% 0px" }
  );

  items.forEach((el) => observer.observe(el));

  // Watchdogs: (1) reveal anything already on screen shortly after load,
  // (2) if the observer never fired at all (broken), force-reveal everything.
  setTimeout(revealStuckInView, 900);
  setTimeout(() => {
    if (!firedAny) $$(".reveal:not(.is-visible)").forEach(revealIn);
  }, 8000);
}

/* =========================================================================
   8) Scroll progress bar (rAF + passive listener, GPU transform only)
   ========================================================================= */
function setupScrollProgress() {
  const bar = $("#scrollBar");
  if (!bar) return;

  let ticking = false;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
    bar.style.transform = "scaleX(" + pct.toFixed(4) + ")";
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

/* =========================================================================
   9) Hero typewriter (word/letter reveal)
   ========================================================================= */
function setupTypewriter() {
  const target = $("#typeTarget");
  const caret = $("#typeCaret");
  if (!target) return;

  const text = CONFIG.tagline;

  if (prefersReducedMotion) {
    target.textContent = text;
    if (caret) caret.style.display = "none";
    return;
  }

  let i = 0;
  const speed = lowEnd ? 55 : 42;

  const tick = () => {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    }
  };
  // small pause before typing starts
  setTimeout(tick, 500);
}

/* =========================================================================
   10) About-photo parallax/tilt (desktop, fine pointer only)
   ========================================================================= */
function setupTilt() {
  if (prefersReducedMotion || lowEnd || !canHover) return;
  const card = $("#aboutCard");
  const media = card && $(".about__media", card);
  if (!card || !media) return;

  let raf = null;
  let rx = 0, ry = 0;

  const apply = () => {
    media.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    raf = null;
  };

  card.addEventListener("pointermove", (e) => {
    media.style.willChange = "transform";
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry = px * 10;
    rx = -py * 10;
    if (!raf) raf = requestAnimationFrame(apply);
  });

  card.addEventListener("pointerleave", () => {
    rx = 0; ry = 0;
    if (!raf) raf = requestAnimationFrame(apply);
    setTimeout(() => { media.style.willChange = ""; }, 500);
  });
}

/* =========================================================================
   11) "An Equation for Sir" — step-by-step solver
   ========================================================================= */
function setupEquation() {
  const btn = $("#solveBtn");
  const result = $("#equationResult");
  const hint = $("#equationHint");
  if (!btn || !result) return;

  const terms = $$("#equationBox .term");
  let timers = [];

  // Show the equation immediately; the button animates it again.
  terms.forEach((t) => t.classList.add("is-in"));

  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  btn.addEventListener("click", () => {
    clearTimers();
    terms.forEach((t) => t.classList.remove("is-in"));
    result.textContent = "?";
    result.classList.remove("pulse");
    if (hint) hint.textContent = "Let us solve it, step by step…";

    // Reveal each term in order
    terms.forEach((t, idx) => {
      timers.push(setTimeout(() => t.classList.add("is-in"), 300 * (idx + 1)));
    });

    // Reveal the answer
    const answerAt = 300 * (terms.length + 1) + 200;
    timers.push(setTimeout(() => {
      result.textContent = "Success";
      result.classList.add("pulse");
      if (hint) hint.textContent = "Sir + Student + Hard Work = Success. Every single time.";
    }, answerAt));
  });
}

/* =========================================================================
   12) Birthday countdown (+ special state on the day)
   ========================================================================= */
function setupBirthday() {
  const wrap = $("#birthdayBox");
  if (!wrap) return;

  const { day, month } = CONFIG.birthday;
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, "0");
  };

  const wish = $("#birthdayWish");
  const label = $("#birthdayLabel");
  let fired = false;

  const nextBirthday = (from) => {
    const year = from.getFullYear();
    let d = new Date(year, month - 1, day, 0, 0, 0, 0);
    if (d.getTime() <= from.getTime()) d = new Date(year + 1, month - 1, day, 0, 0, 0, 0);
    return d;
  };

  const isBirthdayToday = (now) =>
    now.getMonth() === month - 1 && now.getDate() === day;

  const update = () => {
    const now = new Date();

    if (isBirthdayToday(now)) {
      wrap.classList.add("is-today");
      if (wish) wish.hidden = false;
      if (label) label.textContent = "Today is the day! 🎉";
      set("cdDays", 0); set("cdHours", 0); set("cdMins", 0); set("cdSecs", 0);
      if (!fired) {
        fired = true;
        if (!prefersReducedMotion) burstConfetti({ count: isMobile || lowEnd ? 40 : 110, duration: 3000 });
      }
      return;
    }

    const target = nextBirthday(now);
    let diff = Math.max(0, target.getTime() - now.getTime());
    const days = Math.floor(diff / 86400000); diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000); diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);

    set("cdDays", days);
    set("cdHours", hours);
    set("cdMins", mins);
    set("cdSecs", secs);
  };

  // Tick once per second using a self-scheduling timeout (paused when hidden).
  let timer = null;
  const loop = () => {
    update();
    timer = setTimeout(loop, 1000);
  };
  const start = () => { if (!timer) loop(); };
  const stop = () => { clearTimeout(timer); timer = null; };

  update();
  if (!document.hidden) start();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
}

/* =========================================================================
   13) Confetti / special effects (transform + opacity only, auto cleanup)
   ========================================================================= */
function burstConfetti(opts = {}) {
  const layer = $("#confettiLayer");
  if (!layer || prefersReducedMotion) return;

  const count = opts.count || (isMobile || lowEnd ? 40 : 100);
  const duration = opts.duration || (isMobile || lowEnd ? 3000 : 4200);
  const colors = ["#fff3d1", "#f7dd9b", "#e9c063", "#d9a441", "#ffffff"];
  const symbols = ["π", "∑", "∞", "√", "θ", "Δ"];
  const frag = document.createDocumentFragment();
  const pieces = [];

  for (let i = 0; i < count; i++) {
    const useSymbol = Math.random() < 0.22;
    const el = document.createElement("span");
    el.className = "confetti" + (useSymbol ? " confetti--symbol" : "");
    if (useSymbol) {
      el.textContent = symbols[(Math.random() * symbols.length) | 0];
    } else {
      el.style.background = colors[(Math.random() * colors.length) | 0];
      el.style.width = (6 + Math.random() * 8).toFixed(0) + "px";
      el.style.height = (8 + Math.random() * 10).toFixed(0) + "px";
    }
    el.style.left = (5 + Math.random() * 90).toFixed(2) + "vw";
    frag.appendChild(el);
    pieces.push(el);
  }
  layer.appendChild(frag);

  pieces.forEach((el) => {
    // keep horizontal drift inside the viewport (the fixed layer clips anything tiny)
    const driftX = (Math.random() * 2 - 1) * Math.min(110, window.innerWidth * 0.14);
    const rotate = (Math.random() * 2 - 1) * 600;
    const durationMs = duration * (0.7 + Math.random() * 0.5);
    const anim = el.animate(
      [
        { transform: "translate3d(0,0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate3d(${driftX}px, ${window.innerHeight + 60}px, 0) rotate(${rotate}deg)`, opacity: 0 }
      ],
      { duration: durationMs, easing: "cubic-bezier(.2,.6,.35,1)", fill: "forwards" }
    );
    anim.onfinish = () => el.remove();
  });

  // Safety cleanup
  setTimeout(() => { layer.textContent = ""; }, duration + 800);
}

/* Fire confetti once when the Thank-You section scrolls into view */
function setupThankYouEffect() {
  const section = $("#thankyou");
  if (!section) return;
  let fired = false;

  if (!("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          if (!prefersReducedMotion) burstConfetti({ count: isMobile || lowEnd ? 40 : 100, duration: 3000 });
          obs.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  obs.observe(section);
}

/* =========================================================================
   14) Message wall + form (localStorage, safe escaping)
   ========================================================================= */
const STORAGE_KEY = "ashik_messages_v1";

function loadStoredMessages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((m) => m && typeof m.name === "string" && typeof m.text === "string");
  } catch (err) {
    return []; // storage blocked or corrupt — page still works
  }
}

function saveStoredMessages(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (err) {
    return false;
  }
}

function initials(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  const first = parts[0] ? parts[0][0] : "?";
  const second = parts[1] ? parts[1][0] : "";
  return (first + second).toUpperCase();
}

/* Build one message card using safe DOM APIs (no user HTML injection). */
function makeMessageCard(msg) {
  const article = document.createElement("article");
  article.className = "msg reveal";

  const mark = document.createElement("span");
  mark.className = "msg__mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "“";

  const p = document.createElement("p");
  p.className = "msg__text" + (isLikelyBengali(msg.text) ? " bn" : "");
  p.textContent = msg.text; // textContent => XSS-safe

  const meta = document.createElement("div");
  meta.className = "msg__meta";

  const avatar = document.createElement("span");
  avatar.className = "msg__avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = initials(msg.name);

  const name = document.createElement("span");
  name.className = "msg__name";
  name.textContent = msg.name; // XSS-safe

  meta.appendChild(avatar);
  meta.appendChild(name);

  if (msg.sample) {
    const tag = document.createElement("span");
    tag.className = "msg__tag";
    tag.textContent = "Sample";
    meta.appendChild(tag);
  }

  article.appendChild(mark);
  article.appendChild(p);
  article.appendChild(meta);
  return article;
}

/* Cheap check: does the string contain Bengali code points? */
function isLikelyBengali(str) {
  return /[\u0980-\u09FF]/.test(str);
}

function renderMessages(observer) {
  const wall = $("#messageWall");
  if (!wall) return;
  wall.innerHTML = "";
  const samples = CONFIG.messages;
  const stored = loadStoredMessages();
  const all = samples.concat(stored);

  all.forEach((m, i) => {
    const card = makeMessageCard(m);
    card.style.setProperty("--d", (i % 3) * 0.09 + "s");
    wall.appendChild(card);
    if (observer) observer.observe(card);
    else card.classList.add("is-visible");
  });
}

function setupMessages() {
  // A dedicated observer so freshly added cards also animate in.
  let observer = null;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }

  renderMessages(observer);

  const form = $("#messageForm");
  const note = $("#formNote");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = $("#msgName");
    const textInput = $("#msgText");
    const name = (nameInput.value || "").trim();
    const text = (textInput.value || "").trim();

    if (!name || !text) {
      if (note) note.textContent = "Please add your name and a short message. / নাম ও বার্তা লিখুন।";
      return;
    }

    const msg = { name: name.slice(0, 40), text: text.slice(0, 280) };
    const stored = loadStoredMessages();
    stored.push(msg);
    const saved = saveStoredMessages(stored);

    const wall = $("#messageWall");
    if (wall) {
      const card = makeMessageCard(msg);
      card.classList.add("is-visible");
      wall.appendChild(card);
      card.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
    }

    nameInput.value = "";
    textInput.value = "";
    if (note) {
      note.textContent = saved
        ? "Thank you! Your message was added. / আপনার বার্তা যোগ হয়েছে।"
        : "Message added for now, but this browser blocked saving. / বার্তা যোগ হয়েছে (সেভ হয়নি)।";
    }
  });
}

/* =========================================================================
   15) Pause hero-only animations when the hero is off-screen
   ========================================================================= */
function setupHeroPause() {
  const hero = $("#hero");
  if (!hero || !("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => hero.classList.toggle("is-offscreen", !e.isIntersecting));
    },
    { threshold: 0 }
  );
  obs.observe(hero);
}

/* =========================================================================
   16) Boot
   ========================================================================= */
function init() {
  fillConfigContent();
  setupPhotoFallbacks();
  setupFloatingSymbols();
  setupScrollReveal();
  setupScrollProgress();
  setupTypewriter();
  setupTilt();
  setupEquation();
  setupBirthday();
  setupThankYouEffect();
  setupMessages();
  setupHeroPause();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
