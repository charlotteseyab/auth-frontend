import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect';
import { useUser } from '../hooks/user';
import loadingImg from '../assets/img/loading.svg';

const ClientRoute = ({ children }) => {
    
    const { user, userLoading, userError } = useUser()
    return userLoading ? <div className='flex justify-center items-center h-screen'><img src={loadingImg} alt="loading" /></div> : user && user.roles.includes('client') ? <div>{children}</div> : <LoadingToRedirect to='/login' message="What the f*ck are you trying to do?" redirectPage="Login page" />
}



export default ClientRoute