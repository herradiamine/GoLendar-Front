import DashboardComponent from '../components/dashboard-component';
import '../styles/LoginPage.css';

function DashboardPage() {
  return (
    <div className='bg-background'>
      <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
          <DashboardComponent />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;