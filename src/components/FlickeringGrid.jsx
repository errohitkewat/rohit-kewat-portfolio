import { useEffect, useRef } from "react";

export default function FlickeringGrid({ squareSize = 2, gridGap = 2, flickerChance = 0.3, maxOpacity = 0.3, className = "", style }) {
  const box = useRef(null);
  const cvs = useRef(null);

  useEffect(() => {
    const canvas = cvs.current, el = box.current, ctx = canvas.getContext("2d");
    let raf, cols, rows, sq, w, h, visible = true, last = 0;
    const rgb = () => {
      const t = document.createElement("canvas").getContext("2d");
      t.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground") || "#000";
      t.fillRect(0, 0, 1, 1);
      const [r, g, b] = t.getImageData(0, 0, 1, 1).data;
      return `rgba(${r},${g},${b},`;
    };
    let color = rgb();
    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      w = el.clientWidth; h = el.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      cols = Math.floor(w / (squareSize + gridGap)); rows = Math.floor(h / (squareSize + gridGap));
      sq = Float32Array.from({ length: cols * rows }, () => Math.random() * maxOpacity);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const tick = (t) => {
      const dt = (t - last) / 1000; last = t;
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < sq.length; i++) if (Math.random() < flickerChance * dt) sq[i] = Math.random() * maxOpacity;
        for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
          ctx.fillStyle = `${color}${sq[i * rows + j]})`;
          ctx.fillRect(i * (squareSize + gridGap), j * (squareSize + gridGap), squareSize, squareSize);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    setup();
    const ro = new ResizeObserver(setup); ro.observe(el);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting)); io.observe(canvas);
    const mo = new MutationObserver(() => (color = rgb()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); mo.disconnect(); };
  }, [squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div ref={box} className={`h-full w-full ${className}`} style={style}>
      <canvas ref={cvs} className="pointer-events-none" />
    </div>
  );
}
