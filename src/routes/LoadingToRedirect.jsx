import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LoadingToRedirect = ({ to, redirectPage, message }) => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        count === 0 && navigate(to);
        return () => clearInterval(interval);
    }, [count, navigate]);

    return (
        <div className='flex flex-col justify-center items-center h-screen align-middle w-full'>
            <h1 className='font-bold text-4xl'>Unauthorized Access!</h1>
            <p className='text-2xl font-bold'>{message}</p>
            <p className='font-bold text-2xl'>Redirecting to {redirectPage} in <span className='text-red-700'>{count} second(s)</span></p>
        </div>
    )
}

export default LoadingToRedirect