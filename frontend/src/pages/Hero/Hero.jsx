import React, { useState, useEffect } from "react";

const Background = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgroundImages = [
    "https://thumbs.dreamstime.com/b/charity-food-poor-people-to-enjoy-eating-139435186.jpg",
    "https://thumbs.dreamstime.com/b/poor-people-eating-donated-food-street-poor-people-eating-donated-food-street-black-white-effect-121289472.jpg",
    "https://th.bing.com/th/id/OIP.Wq6egGn_xkbruW2ruzz4mgHaE7?w=800&h=532&rs=1&pid=ImgDetMain",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    ></div>
  );
};

export default Background;
