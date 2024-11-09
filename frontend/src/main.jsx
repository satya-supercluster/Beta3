import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserTypeProvider } from './context/UserTypeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { DataProvider } from './context/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserTypeProvider>
        <AuthProvider>
          <DataProvider>
            <App className="bg-gray-50" />
          </DataProvider>
        </AuthProvider>
      </UserTypeProvider>
    </BrowserRouter>
  </StrictMode>
);
