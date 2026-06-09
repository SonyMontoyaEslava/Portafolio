import { useEffect, useState } from "react";

/**
 * Convierte la página en una "presentación de diapositivas": cada gesto de
 * scroll (rueda, teclado o swipe) mueve exactamente una sección y el scroll
 * queda bloqueado durante la transición, así nunca se descansa a mitad de
 * camino. Si una sección es más alta que la pantalla (móvil), se permite el
 * scroll interno y solo se avanza al llegar a su borde.
 *
 * Devuelve el id de la sección activa para sombrear el nav.
 */
export function useSectionPresentation(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const getSections = () => {
      const found = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      // Orden por posición real en el documento (no por el orden del array),
      // para que avanzar/retroceder siga el desplazamiento visual y el nav
      // no "salte" secciones.
      return found.sort(
        (a, b) =>
          a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );
    };

    let sections = getSections();
    if (sections.length === 0) return undefined;

    let index = 0;
    let locked = false;
    let unlockTimer = 0;
    let scrollFrame = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const clamp = (i) => Math.max(0, Math.min(sections.length - 1, i));

    // ¿La sección actual todavía puede hacer scroll interno en esa dirección?
    const canScrollInside = (el, dir) => {
      if (!el) return false;
      if (dir > 0) return el.scrollTop + el.clientHeight < el.scrollHeight - 2;
      return el.scrollTop > 2;
    };

    const syncFromScroll = () => {
      scrollFrame = 0;
      const line = window.innerHeight * 0.4;
      let current = 0;
      sections.forEach((section, i) => {
        if (section.getBoundingClientRect().top - line <= 0) current = i;
      });
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        current = sections.length - 1;
      }
      index = current;
      setActiveSection(sections[index].id);
    };

    const goTo = (target) => {
      const i = clamp(target);
      if (i === index) return;
      index = i;
      locked = true;
      setActiveSection(sections[i].id);
      sections[i].scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(() => {
        locked = false;
      }, 800);
    };

    const onWheel = (e) => {
      const dir = e.deltaY > 0 ? 1 : -1;
      if (canScrollInside(sections[index], dir)) return; // leer contenido largo
      e.preventDefault();
      if (locked) return;
      goTo(index + dir);
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      const dy = touchStartY - e.touches[0].clientY;
      const dir = dy > 0 ? 1 : -1;
      if (canScrollInside(sections[index], dir)) return;
      e.preventDefault();
      if (locked || Math.abs(dy) < 40) return;
      goTo(index + dir);
    };

    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;

      let dir = 0;
      if (["ArrowDown", "PageDown", " ", "Spacebar"].includes(e.key)) dir = 1;
      else if (["ArrowUp", "PageUp"].includes(e.key)) dir = -1;
      else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
        return;
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(sections.length - 1);
        return;
      } else {
        return;
      }

      if (canScrollInside(sections[index], dir)) return;
      e.preventDefault();
      if (!locked) goTo(index + dir);
    };

    // Mantiene el índice sincronizado tras clicks en el nav o arrastrar la barra.
    const onScroll = () => {
      if (locked) return;
      if (!scrollFrame) scrollFrame = requestAnimationFrame(syncFromScroll);
    };

    const onResize = () => {
      sections = getSections();
    };

    syncFromScroll();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(unlockTimer);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    };
  }, [sectionIds]);

  return activeSection;
}
