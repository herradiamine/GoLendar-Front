import LoginForm from '@/components/login-componentt';
import '@/styles/LoginPage.css';

function LoginPage() {
  return (
    <div className='bg-background'>
      <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;