import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserTypeProvider } from './context/UserTypeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserTypeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </UserTypeProvider>
  </StrictMode>
);
