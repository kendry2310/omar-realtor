(function () {
  "use strict";

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ---------------- Splash-free boot: reveal current year ---------------- */
  function initYear() {
    var el = $("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------------- Nav: sticky transparent -> solid ---------------- */
  function initNav() {
    var nav = $("[data-nav]");
    if (!nav) return;
    function on() {
      if (window.scrollY > 80) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    }
    on();
    window.addEventListener("scroll", on, { passive: true });
  }

  /* ---------------- Mobile hamburger menu ---------------- */
  function initMobileNav() {
    var burger = $("[data-nav-burger]");
    var menu = $("[data-nav-mobile]");
    if (!burger || !menu) return;
    function close() {
      burger.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("nav-open");
    }
    function toggle() {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      menu.setAttribute("aria-hidden", String(open));
      document.documentElement.classList.toggle("nav-open", !open);
    }
    burger.addEventListener("click", toggle);
    $$(".nav-mobile-link, .btn-mobile-cta", menu).forEach(function (a) {
      a.addEventListener("click", close);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------- Custom cursor ---------------- */
  function initCursor() {
    var root = $("[data-cursor-root]");
    if (!root || !fineHover) return;
    document.documentElement.classList.add("has-cursor");
    var ring = root.querySelector(".cursor-ring");
    var dot = root.querySelector(".cursor-dot");
    var tx = 0, ty = 0, rx = 0, ry = 0, sc = 1, firstMove = false, raf = null;

    function ringTransform() {
      return "translate3d(" + rx + "px," + ry + "px,0) scale(" + sc.toFixed(3) + ")";
    }

    window.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (dot) dot.style.transform = "translate3d(" + tx + "px," + ty + "px,0)";
      if (!firstMove) {
        firstMove = true;
        rx = tx; ry = ty;
        if (ring) ring.style.transform = ringTransform();
        root.classList.add("is-ready");
      }
    }, { passive: true });

    function tick() {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      var scTarget = root.classList.contains("is-interactive") ? 1.73 : 1; // 52px / 30px
      sc += (scTarget - sc) * 0.22;
      if (ring) ring.style.transform = ringTransform();
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    var HOVERABLES = "a, button, .card, [data-cursor]";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest(HOVERABLES)) root.classList.add("is-interactive");
    });
    document.addEventListener("mouseout", function (e) {
      var related = e.relatedTarget;
      if (e.target.closest && e.target.closest(HOVERABLES) && !(related && related.closest && related.closest(HOVERABLES))) {
        root.classList.remove("is-interactive");
      }
    });
  }

  /* ---------------- Scroll reveals (IntersectionObserver, universal) ---------------- */
  function initReveals() {
    var targets = $$("[data-reveal]").concat($$("[data-reveal-mask]"));
    if (!targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -2% 0px" });
    targets.forEach(function (el) { io.observe(el); });

    // Safety net: reveal anything still hidden after 6s
    setTimeout(function () {
      targets.forEach(function (el) {
        if (!el.classList.contains("is-revealed") && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-revealed");
        }
      });
    }, 6000);
  }

  /* ---------------- Split-text (words/lines, preserves <br> and <em>) ---------------- */
  function escHTML(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function initSplitText() {
    $$("[data-split]").forEach(function (el) {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = "1";
      var wrap = function (text) {
        return text.split(/(\s+)/).map(function (w) {
          return /^\s+$/.test(w) ? w : '<span class="split-word">' + escHTML(w) + "</span>";
        }).join("");
      };
      var html = Array.prototype.map.call(el.childNodes, function (node) {
        if (node.nodeType === 3) return wrap(node.textContent);
        if (node.nodeName === "BR") return "<br>";
        if (node.nodeType === 1) {
          var tag = node.tagName.toLowerCase();
          return "<" + tag + ">" + wrap(node.textContent) + "</" + tag + ">";
        }
        return "";
      }).join("");
      el.innerHTML = html;
    });
  }

  /* ---------------- Marquee (GSAP infinite scroll) ---------------- */
  function initMarquee() {
    if (!window.gsap) return;
    $$("[data-marquee]").forEach(function (track) {
      var clone = track.cloneNode(true);
      clone.removeAttribute("data-marquee");
      clone.setAttribute("aria-hidden", "true");
      track.parentNode.appendChild(clone);
      var distance = track.scrollWidth + 26; // include gap
      var speed = 46; // px/sec
      gsap.to([track, clone], {
        x: -distance,
        duration: distance / speed,
        ease: "none",
        repeat: -1,
        modifiers: { x: gsap.utils.unitize(function (x) { return parseFloat(x) % distance; }) }
      });
    });
  }

  /* ---------------- Subtle tilt on property cards ---------------- */
  function initTilt() {
    if (!fineHover) return;
    $$(".card-property").forEach(function (card) {
      var MAX = 4, tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
      card.classList.add("has-tilt");
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        tx = -py * MAX; ty = px * MAX;
        if (!raf) raf = requestAnimationFrame(loop);
      });
      card.addEventListener("mouseleave", function () {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(loop);
      });
      function loop() {
        cx += (tx - cx) * 0.15;
        cy += (ty - cy) * 0.15;
        card.style.setProperty("--rx", cx.toFixed(2) + "deg");
        card.style.setProperty("--ry", cy.toFixed(2) + "deg");
        raf = (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) ? requestAnimationFrame(loop) : null;
      }
    });
  }

  /* ---------------- Smooth-scroll anchors (native) ---------------- */
  function initAnchorScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navOffset = 84;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: reduced ? "auto" : "smooth"
      });
    });
  }

  /* ---------------- Contact form (simulated submit) ---------------- */
  function initForm() {
    var form = $(".contact-form");
    if (!form) return;
    var status = $("[data-form-status]", form);
    var submit = $(".btn-submit", form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      submit.setAttribute("disabled", "true");
      if (status) status.textContent = "Enviando…";
      setTimeout(function () {
        if (status) status.textContent = "Gracias — te contactaremos en breve. (Formulario de demostración: conectar a un backend real antes de publicar.)";
        submit.removeAttribute("disabled");
        form.reset();
      }, 900);
    });
  }

  function boot() {
    safe(initYear, "initYear");
    safe(initNav, "initNav");
    safe(initMobileNav, "initMobileNav");
    safe(initCursor, "initCursor");
    safe(initSplitText, "initSplitText");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initAnchorScroll, "initAnchorScroll");
    safe(initForm, "initForm");

    if (window.gsap) {
      safe(initMarquee, "initMarquee");
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
