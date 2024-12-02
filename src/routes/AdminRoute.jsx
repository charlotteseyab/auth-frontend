import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect';

const AdminRoute = ({ children }) => {
    const { user } = useSelector(state => ({ ...state }));
    return user && user.roles.includes('admin') ? <div>{children}</div> : <LoadingToRedirect to='/login' message="Make sure you are an admin" redirectPage="Login page" />
}

export default AdminRoute