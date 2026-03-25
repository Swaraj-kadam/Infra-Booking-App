import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { AuthProvider } from './context/authContext.tsx'
import { NotificationProvider } from './context/notificationContext.tsx'
import { BookingProvider } from './context/bookingContext.tsx'
import { RoomProvider } from './context/RoomContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider>
      <AuthProvider>
        <RoomProvider>
          <BookingProvider>
            <App />
          </BookingProvider>
        </RoomProvider>
      </AuthProvider>
    </NotificationProvider>
  </StrictMode>
)
