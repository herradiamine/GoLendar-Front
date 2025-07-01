import { Routes, Route, Link } from 'react-router-dom'
import { LoginForm } from '@/components/login-form'
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<LoginForm />} />
        <Route path="/register" element={<LoginForm />} />
        <Route path="/dashboard" element={<LoginForm />}></Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
