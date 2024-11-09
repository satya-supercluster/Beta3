import React from 'react'
import EventPage from './pages/EventPage/EventPage'
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import { useAuth } from './context/AuthContext'
import { useUserType } from './context/UserTypeContext'
import HeroSection from './pages/Hero/Hero'
import Login from './pages/Login/Login'
const App = () => {
  return (
    <Routes>
      <Route path='/event' element={<EventPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthenticatedRoute />} />

        {/* Producer Routes */}

        {/* Consumer Routes */}
        
      </Route>
      {/* <Route path="/*" element={<CatchAllRoutes />}></Route> */}
    </Routes>
  );
}

const AuthenticatedRoute = () => {
  const { auth } = useAuth();
  const { loginButton } = useUserType();
  return !auth ? (
    loginButton ? (
      <Login />
    ) : (
      <HeroSection />
    )
  ) : (
    <RedirectBasedOnUser />
  );
};
  
const CatchAllRoutes = () => {
  return <RedirectBasedOnUser />;
};

const RedirectBasedOnUser = () => {
  const { loginButton } = useUserType();
  const { auth, logout, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-3xl bg-transparent font-bold text-gray-700">
        <div>Loading...</div>
      </div>
    );
  }
  if (!auth) return loginButton ? <Login /> : <HeroSection />;
  if (auth?.role === "producer") {
    return <Navigate to="/producer/home" replace />;
  } else if (auth?.role === "consumer") {
    return <Navigate to="/consumer/home" replace />;
  } else {
    logout();
    return loginButton ? <Login /> : <HeroSection />;
  }
};

const ProtectedRoute = ({ role, children }) => {
  const { loginButton } = useUserType();
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
    return loginButton ? <Login /> : <HeroSection />;
  }

  return children;
};

export default App;