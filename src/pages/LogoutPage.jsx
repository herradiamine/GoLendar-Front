import LogoutComponent from '@/components/logout-component';
import '../styles/LogoutPage.css';

function LogoutPage() {
  return (
    <div className='bg-background'>
      <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
          <LogoutComponent />
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;