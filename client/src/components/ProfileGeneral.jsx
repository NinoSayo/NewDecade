import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileGeneral = () => {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        userName: '',
        phone: '',
        email: '',
        avatar: '',
        isEmailConfirmed: false,
    });

    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [isEditEmailMode, setIsEditEmailMode] = useState(false);
    const [isEditPhoneMode, setIsEditPhoneMode] = useState(false);
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSuccess, setEmailSuccess] = useState('');
    const [confirmationSent, setConfirmationSent] = useState(false);
    const [countdown, setCountdown] = useState(60); // Countdown in seconds
    const [isCountdownActive, setIsCountdownActive] = useState(false);
    const [avatarError, setAvatarError] = useState('');
    const [newEmailError, setNewEmailError] = useState('');
    const [confirmationCodeError, setConfirmationCodeError] = useState('');

    const handleUpdateEmail = async () => {
        try {
            if (!newEmail || !confirmationCode) {
                setNewEmailError('New email and confirmation code are required.');
                return;
            }
            // Xóa lỗi nếu hợp lệ
            setNewEmailError('');

            const response = await axios.put(
                'https://localhost:7240/api/User/editEmail',
                {
                    newEmail: newEmail,
                    confirmationCode: confirmationCode,
                },
                {
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                setIsEditEmailMode(false);
                setUpdatedEmail(newEmail);
                setUserInfo({
                    ...userInfo,
                    email: newEmail,
                });
            } else {
                setEmailError('Failed to update email. ' + response.status);
            }
        } catch (error) {
            setEmailError('Error while updating email: ' + error.message);
        }
    };

    const handleGetConfirmationCode = async () => {
        try {
            if (!newEmail) {
                setNewEmailError('New email are required.');
                return;
            }

            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(newEmail)) {
                setNewEmailError('Invalid email format.');
                return;
            }

            setNewEmailError('');

            const response = await axios.get(
                `https://localhost:7240/api/User/sendConfirmationCodeEmail/${newEmail}`,
                {
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                setConfirmationSent(true);
                setIsCountdownActive(true);
                setCountdown(60);
                setEmailSuccess(response.data);
            }
        } catch (error) {
            setEmailError(error.response.data);
        }
    };

    useEffect(() => {
        let intervalId;

        if (isCountdownActive) {
            intervalId = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
        }

        if (countdown === 0) {
            setIsCountdownActive(false);
        }

        return () => clearInterval(intervalId);
    }, [isCountdownActive, countdown]);

    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('https://localhost:7240/api/User/getUserById', {
                withCredentials: true,
            });

            if (response.status !== 200) {
                console.error('Error fetching user information. Server response:', response.status);
                return;
            }

            setUserInfo({
                ...response.data,
                isEmailConfirmed: response.data.isConfirmed,
            });
        } catch (error) {
            console.error('Error in fetchUserInfo:', error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAvatarFile(file);
    };

    const handleSaveChanges = async () => {
        try {
            // Kiểm tra avatarFile
            if (!avatarFile) {
                setAvatarError('Avatar is required.');
                return;
            }

            // Xóa lỗi nếu hợp lệ
            setAvatarError('');

            const formData = new FormData();
            formData.append('avatarFile', avatarFile);

            const response = await axios.post('https://localhost:7240/api/User/uploadAvatar', formData, {
                withCredentials: true,
            });

            if (response.status === 200) {
                fetchUserInfo();
                setShowForm(false);
            } else {
                console.error('Không thể cập nhật avatar. Máy chủ trả về:', response.status);
            }
        } catch (error) {
            console.error('Lỗi trong quá trình handleSaveChanges:', error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    useEffect(() => {
        setAvatarUrl(`https://localhost:7240/api/User/getAvatar?${Math.random()}`);
    }, [userInfo]);

    return (
        <div className="tab-pane fade active show" id="account-general">
            <div className="card-body d-flex align-items-center">
                <img src={avatarUrl} alt="Avatar" className="d-block ui-w-80" crossOrigin="use-credentials" />
                <div className="ml-4 d-flex align-items-center">
                    {!showForm ? (
                        <button type="button" className="btn btn-primary btn-change" onClick={() => setShowForm(true)}>
                            Update Avatar
                        </button>
                    ) : (
                        <form>
                            <label className="btn mb-0">
                                <input type="file" className="form-control" onChange={handleFileChange} />
                            </label>
                            <button type="button" className="btn btn-primary ml-2" onClick={handleSaveChanges}>
                                Save
                            </button>
                            <div>
                                {avatarError && <div className="text-danger">{avatarError}</div>}
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
                <input type="text" className="form-control" name="userId" value={userInfo.userId} hidden />
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" value={userInfo.userName} readOnly />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone{' '}
                        {!isEditPhoneMode && (
                            <button type="button" className="btn btn-link btn-sm" onClick={() => setIsEditPhoneMode(true)}>
                                Update
                            </button>
                        )}
                    </label>
                    {isEditPhoneMode ? (
                        <form className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={userInfo.phone}
                                readOnly
                            />
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="New phone number"
                            />
                            <div className="input-group mt-2">
                                {/* Add similar input for confirmation code */}
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Confirmation code"
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    Get confirmation code
                                </button>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary mt-2"
                            >
                                Save
                            </button>
                        </form>
                    ) : (
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={userInfo.phone}
                                readOnly
                            />
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email{' '}
                        {!isEditEmailMode && (
                            <button type="button" className="btn btn-link btn-sm" onClick={() => setIsEditEmailMode(true)}>
                                Update
                            </button>
                        )}
                    </label>
                    {isEditEmailMode ? (
                        <form className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={userInfo.email}
                                readOnly
                            />
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="New email address"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />
                            <div className="input-group mt-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Confirmation code"
                                    value={confirmationCode}
                                    onChange={(e) => setConfirmationCode(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleGetConfirmationCode}
                                    disabled={confirmationSent}
                                >
                                    {confirmationSent ? `Resend in ${countdown}s` : "Get confirmation code"}
                                </button>
                            </div>
                            {newEmailError && <div className="text-danger">{newEmailError}</div>}
                            {emailError && <div className="alert alert-danger mt-2">{emailError}</div>}
                            {emailSuccess && <div className="alert alert-success mt-2">{emailSuccess}</div>}
                            <button
                                type="button"
                                className="btn btn-primary mt-2"
                                onClick={handleUpdateEmail}
                            >
                                Save
                            </button>
                        </form>
                    ) : (
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={userInfo.email}
                                readOnly
                            />
                            {userInfo.isEmailConfirmed ? (
                                <div className="alert alert-success mt-2">
                                    Your email is confirmed.
                                </div>
                            ) : (
                                <div className="alert alert-warning mt-2">
                                    Your email is not confirmed. Please check your inbox.
                                </div>
                            )}
                            {updatedEmail && (
                                <span className="text-success">{`Updated: ${updatedEmail}`}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileGeneral;
