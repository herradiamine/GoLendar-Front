import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate } from 'react-router-dom'
import { Store } from './store'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux';

import './styles/index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import LogoutPage from './pages/LogoutPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ThemeProvider from './components/theme-provider.js'
import { fetchUserProfile } from './store/userSlice.js';

export function AuthRequired() {
  const dispatch = useDispatch();
  const { response, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (status === 'loading') {
    return <><div>Chargement...</div></>;
  }
  if (status === 'failed') {
    return <Navigate to="/login" replace/>;
  }
  if (status === 'succeeded') {
    return (response.success) ? <Outlet/> : <Navigate to="/login" replace/>;
  }
}
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/' element={<AuthRequired />}>
              <Route path="/home" element={<App />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  </Provider>
)
