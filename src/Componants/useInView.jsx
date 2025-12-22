import { useEffect, useRef, useState } from "react";

const useInViewRepeat = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // viewport এ 30% ঢুকলেই trigger
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

export default useInViewRepeat;
