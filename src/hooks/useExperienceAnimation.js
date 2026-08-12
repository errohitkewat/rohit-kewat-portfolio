import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useExperienceAnimation = (container) => {
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      const header = q("[data-experience-header]");
      const items = q("[data-experience-item]");

      gsap.set(header, {
        opacity: 0,
        y: 30,
      });

      gsap.set(items, {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      }).to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );
    },
    {
      scope: container,
    }
  );
};

export default useExperienceAnimation;