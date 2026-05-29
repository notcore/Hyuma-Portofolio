import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 80) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      let current = ids[0];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= scrollY) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}