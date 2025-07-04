import RegisterForm from '../components/register-component';
import '../styles/RegisterPage.css';

function RegisterPage() {
  return (
    <div className='bg-background'>
      <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;