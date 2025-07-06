import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';
import { Toaster } from 'sonner';

import './styles/index.css';
import App from './App.jsx';
import ThemeProvider from './components/theme-provider.js';

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter future={{ 
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}>
          <App/>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
    <Toaster />
  </Provider>
)
