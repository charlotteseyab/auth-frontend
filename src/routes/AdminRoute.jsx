import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect';
import { useUser } from '../hooks/user';
import loadingImg from '../assets/img/loading.svg';

const AdminRoute = ({ children }) => {
    
    const { user, userLoading, userError } = useUser()
    return userLoading ? <div className='flex justify-center items-center h-screen'><img src={loadingImg} alt="loading" /></div> : user && user.roles.includes('admin') ? <div>{children}</div> : <LoadingToRedirect to='/login' message="Make you have an admin account" redirectPage="Login page" />
}



export default AdminRoute