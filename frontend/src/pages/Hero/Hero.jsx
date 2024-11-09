import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useUserType } from "../../context/UserTypeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Login from "../Login/Login";
const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const { loginButton, setLoginButton } = useUserType();
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

  const handlePrevious = () => {
    setBgIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const impactStats = [
    { number: "1.3B", label: "Tons of Food Wasted Yearly" },
    { number: "33%", label: "Of Food Production Lost" },
    { number: "3.3B", label: "Tons of CO₂ Produced" },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen md:h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-md:mt-5">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-emerald-400 text-xl md:text-2xl font-semibold mb-4">
            Every Plate Counts
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Surplus into Sustenance
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our movement to reduce food waste, feed communities, and save
            our planet. Together, we can make every meal matter.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setLoginButton(true)}
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Join ByteMe
            </button>
            <button className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-2 md:bottom-9 left-1/2 -translate-x-1/2 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setBgIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === bgIndex ? "bg-emerald-400 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      {loginButton && <Login />}
    </div>
  );
};

export default HeroSection;
