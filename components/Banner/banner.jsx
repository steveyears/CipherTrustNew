import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <p>This is a temporary banner. <button onClick={() => setIsVisible(false)} className="underline">Dismiss</button></p>
    </div>
  );
};

export default Banner;