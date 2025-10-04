import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'; // ✅ add this
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './components/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <BrowserRouter> {/* wrap here */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
