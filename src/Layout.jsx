import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SidebarComponent } from '@/components/sidebar-component';
import { fetchUserProfile } from '@/store/userSlice.js';
import BreadcrumbComponent from '@/components/breadcrumb-component';

export function Layout() {
  const dispatch = useDispatch();
  const { response, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (status === 'loading') {
    return (<><div>Chargement...</div></>);
  }
  if (status === 'failed') {
    return (<Navigate to="/login" replace/>);
  }
  if (status === 'succeeded') {
    if (response.success) {
      return (
        <SidebarProvider>
          <SidebarComponent />
          <SidebarInset>
            <main>
              <BreadcrumbComponent />
              <Outlet/>
            </main>
            <Toaster />
          </SidebarInset>
        </SidebarProvider>
      )
    } else {
      return (<Navigate to="/login" replace/>);
    }
  }
}