import React, { useState } from 'react';

const AdminAccountSettings = () => {
    const [username, setUsername] = useState('AdminUser');
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
    });
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [message, setMessage] = useState('');

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Account settings updated successfully!");
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Account Settings</h2>
            {message && <p className="text-green-600 font-semibold text-center mb-4">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Password Change */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Current Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Profile Picture Upload */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium mb-2">Profile Picture</label>
                    <input type="file" onChange={handleProfilePictureChange} />
                </div>

                {/* Notification Preferences */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Notification Preferences</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications.email}
                                onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
                                className="mr-2"
                            />
                            Email
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications.sms}
                                onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                                className="mr-2"
                            />
                            SMS
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications.push}
                                onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
                                className="mr-2"
                            />
                            Push
                        </label>
                    </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={twoFactorAuth}
                        onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                        className="mr-2"
                    />
                    <label className="text-gray-700 font-medium">Enable Two-Factor Authentication</label>
                </div>

                {/* Save Button */}
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default AdminAccountSettings;
