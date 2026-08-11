import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useIntroAnimation = (container) => {
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);
      const counter = { value: 0 };
      const loaderNumber = q("[data-loader-number]")[0];

      if (!loaderNumber) return;

      const tl = gsap.timeline();

      tl.to(counter, {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          loaderNumber.textContent = `${String(Math.round(counter.value)).padStart(2, "0")}%`;
        },
      })
        .to(q("[data-loader-number]"), {
          opacity: 0,
          y: -20,
          duration: 0.25,
          ease: "power2.out",
        })
        .to(
          q("[data-loader-label]"),
          {
            opacity: 0,
            y: -15,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        )
        .to(q("[data-loader]"), {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
        })
        .from(
          q("[data-hero-intro]"),
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .from(
          q("[data-hero-heading]"),
          {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          q("[data-hero-image]"),
          {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.75"
        )
        .from(
          q("[data-hero-description], [data-hero-button], [data-hero-meta]"),
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6"
        );
    },
    { scope: container }
  );
};

export default useIntroAnimation;
