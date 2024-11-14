import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
    const [username, setUsername] = useState('JohnDoe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [role, setRole] = useState('Client');
    const [profilePicture, setProfilePicture] = useState(null);
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
    });
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        role: false,
        username: false,
        email: false,
        password: false,
        profile: false,
        notifications: false,
        twoFactor: false,
    });

    const navigate = useNavigate();

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
            window.alert('Profile picture changed!');
        }
    };

    // Redirect to Admin Dashboard if role changes to Admin
    useEffect(() => {
        if (role === 'Admin') {
            navigate('/adminDashboard');
        }
    }, [role, navigate]);

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        window.alert(`Are you sure you want to change your role to ${e.target.value}`);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        window.alert('Username changed!');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        window.alert('Email changed!');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        window.alert('Password changed!');
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        window.alert('New password changed!');
    };

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
        window.alert('Confirm new password changed!');
    };

    const handleNotificationChange = (type) => {
        setNotifications((prev) => {
            const newNotifications = { ...prev, [type]: !prev[type] };
            window.alert(`${type.charAt(0).toUpperCase() + type.slice(1)} notifications ${newNotifications[type] ? 'enabled' : 'disabled'}`);
            return newNotifications;
        });
    };

    const handleTwoFactorChange = () => {
        setTwoFactorAuth((prev) => {
            const newStatus = !prev;
            window.alert(`Two-factor authentication ${newStatus ? 'enabled' : 'disabled'}`);
            return newStatus;
        });
    };

    return (
        <div className="p-6 max-w-lg mx-auto space-y-6">
            <button
                onClick={() => toggleSection('role')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.role ? 'Hide Role Settings' : 'Show Role Settings'}
            </button>
            {expandedSections.role && (
                <div className="space-y-4">
                    <label htmlFor="role" className="block text-sm font-semibold">Select Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={handleRoleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="Client">Client</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
            )}

            <button
                onClick={() => toggleSection('username')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.username ? 'Hide Username Settings' : 'Show Username Settings'}
            </button>
            {expandedSections.username && (
                <div className="space-y-4">
                    <label htmlFor="username" className="block text-sm font-semibold">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
            )}

            <button
                onClick={() => toggleSection('email')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.email ? 'Hide Email Settings' : 'Show Email Settings'}
            </button>
            {expandedSections.email && (
                <div className="space-y-4">
                    <label htmlFor="email" className="block text-sm font-semibold">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
            )}

            <button
                onClick={() => toggleSection('password')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.password ? 'Hide Password Settings' : 'Show Password Settings'}
            </button>
            {expandedSections.password && (
                <div className="space-y-4">
                    <label htmlFor="currentPassword" className="block text-sm font-semibold">Current Password:</label>
                    <input
                        id="currentPassword"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <label htmlFor="newPassword" className="block text-sm font-semibold">New Password:</label>
                    <input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <label htmlFor="confirmNewPassword" className="block text-sm font-semibold">Confirm New Password:</label>
                    <input
                        id="confirmNewPassword"
                        type="password"
                        value={confirmNewPassword}
                        onChange={handleConfirmNewPasswordChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
            )}

            <button
                onClick={() => toggleSection('profile')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.profile ? 'Hide Profile Settings' : 'Show Profile Settings'}
            </button>
            {expandedSections.profile && (
                <div className="space-y-4">
                    <label htmlFor="profilePicture" className="block text-sm font-semibold">Profile Picture:</label>
                    <input
                        id="profilePicture"
                        type="file"
                        onChange={handleProfilePictureChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {profilePicture && <img src={profilePicture} alt="Profile" className="mt-4 w-32 h-32 rounded-full object-cover" />}
                </div>
            )}

            <button
                onClick={() => toggleSection('notifications')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.notifications ? 'Hide Notification Settings' : 'Show Notification Settings'}
            </button>
            {expandedSections.notifications && (
                <div className="space-y-4">
                    <label className="block text-sm font-semibold">Notification Preferences:</label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications.email}
                                onChange={() => handleNotificationChange('email')}
                                className="mr-2"
                            />
                            Email
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications.sms}
                                onChange={() => handleNotificationChange('sms')}
                                className="mr-2"
                            />
                            SMS
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications.push}
                                onChange={() => handleNotificationChange('push')}
                                className="mr-2"
                            />
                            Push
                        </label>
                    </div>
                </div>
            )}

            <button
                onClick={() => toggleSection('twoFactor')}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                {expandedSections.twoFactor ? 'Hide Two-Factor Settings' : 'Show Two-Factor Settings'}
            </button>
            {expandedSections.twoFactor && (
                <div className="space-y-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={twoFactorAuth}
                            onChange={handleTwoFactorChange}
                            className="mr-2"
                        />
                        Enable Two-Factor Authentication
                    </label>
                </div>
            )}
        </div>
    );
};

export default AccountSettings;
