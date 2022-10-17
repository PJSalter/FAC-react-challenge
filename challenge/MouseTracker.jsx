import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [pos, setPos] = useState([0, 0]);

  useEffect(() => {
    function update({ clientX, clientY }) {
      setPos([clientX, clientY]);
    }
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  const [x, y] = pos;
  return (
    <output>
      {x},{y}
    </output>
  );
}
