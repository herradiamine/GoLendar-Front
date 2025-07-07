import {Routes, Route} from 'react-router-dom';
import {Layout} from '@/Layout';
import LoginPage from '@/pages/LoginPage.jsx';
import LogoutPage from '@/pages/LogoutPage.jsx';
import RegisterPage from '@/pages/RegisterPage.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import DashboardPage from '@/pages/DashboardPage.jsx';
import AccountPage from '@/pages/AccountPage.jsx';
import ProfilPage from '@/pages/ProfilPage.jsx';
import GeneralPage from '@/pages/GeneralPage.jsx';
import BillingPage from '@/pages/BillingPage.jsx';
import NotificationPage from '@/pages/NotificationPage.jsx';
import SessionPage from '@/pages/SessionPage.jsx';
import CalendarsPage from '@/pages/CalendarsPage.jsx';

import './styles/App.css'
import CalendarFormPage from "@/pages/CalendarFormPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path='/' element={<Layout/>}>
                <Route path="/sessions" element={<SessionPage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/calendars" element={<CalendarsPage/>}/>
                <Route path="/calendars/new" element={<CalendarFormPage/>}/>
                <Route path="/settings">
                    <Route path="account" element={<AccountPage/>}/>
                    <Route path="profil" element={<ProfilPage/>}/>
                    <Route path="general" element={<GeneralPage/>}/>
                    <Route path="billing" element={<BillingPage/>}/>
                    <Route path="notifications" element={<NotificationPage/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
