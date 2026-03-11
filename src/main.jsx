import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import router from './routes/Routes';
import { ItemProvider } from './context/ItemContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemProvider>
      <RouterProvider router={router} />
    </ItemProvider>
  </StrictMode>,
)
