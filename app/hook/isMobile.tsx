import { useEffect, useState } from "react";

function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleSize = () => setIsMobile(window.innerWidth < 768);
      setIsMobile(window.innerWidth < 768);

      window.addEventListener("resize", handleSize);
      return () => window.removeEventListener("resize", handleSize);
    }
  });

  return isMobile;
}

export default useMobile;
