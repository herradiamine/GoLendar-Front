import NotFoundComponent from '../components/not-found-component';
import '../styles/NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className='bg-background'>
      <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
        <div className='w-full max-w-sm'>
          <NotFoundComponent/>
        </div>
      </div>
    </div>
  );
} 