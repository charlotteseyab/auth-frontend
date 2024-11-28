import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const location = useLocation();
    
    // Get user info from localStorage or your auth context
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
        // Redirect to unauthorized page or dashboard based on role
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute; 