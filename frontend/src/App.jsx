import React from "react";
// import EventPage from "./pages/EventPage/EventPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { useAuth } from "./context/AuthContext";
import HeroSection from "./pages/Hero/Hero";
import ProviderDashboard from "./pages/Provider/ProviderDashboard";
import ConsumerDashboard from "./pages/Consumer/ConsumerDashboard";
import ProfilePreview from "./pages/Profile/Profile";
// import ProducerCards from "./DistanceCalcu/lator";
const App = () => {
  return (
    <Routes>
      {/* <Route path="/event" element={<EventPage />} /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthenticatedRoute />} />

        {/* Provider Routes */}
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/provider/profile" element={<ProfilePreview />} />
        

        {/* <Route path="/provider/get" element={<P />} /> */}
        {/* Consumer Routes */}
        <Route path="/consumer/dashboard" element={<ConsumerDashboard />} /> 
      </Route>
      <Route path="/*" element={<CatchAllRoutes />}></Route>
    </Routes>
  );
};

const AuthenticatedRoute = () => {
  const { auth } = useAuth();
  return !auth ? <HeroSection /> : <RedirectBasedOnUser />;
};

const CatchAllRoutes = () => {
  return <RedirectBasedOnUser />;
};

const RedirectBasedOnUser = () => {
  const { auth, logout, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-3xl bg-transparent font-bold text-gray-700">
        <div>Loading...</div>
      </div>
    );
  }
  if (!auth) return <HeroSection />;
  if (auth?.role === "provider") {
    return <Navigate to="/provider/dashboard" replace />;
  } else if (auth?.role === "consumer") {
    return <Navigate to="/consumer/dashboard" replace />;
  } else {
    logout();
    return <HeroSection />;
  }
};

const ProtectedRoute = ({ role, children }) => {
  const { auth, logout, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-3xl bg-transparent font-bold text-gray-700">
        <div>Loading...</div>
      </div>
    );
  }

  if (!auth || auth?.role !== role) {
    logout();
    return <HeroSection />;
  }

  return children;
};

export default App;
