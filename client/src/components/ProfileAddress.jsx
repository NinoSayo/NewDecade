import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileAddress = () => {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        fullName: '',
        address: '',
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedSuccess, setUpdatedSuccess] = useState('');
    const [fullnameError, setFullnameError] = useState('');
    const [addressError, setAddressError] = useState('');


    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('https://localhost:7240/api/User/getUserById', {
                withCredentials: true,
            });

            if (response.status !== 200) {
                console.error('Lỗi khi lấy thông tin người dùng. Máy chủ trả về:', response.status);
                return;
            }

            setUserInfo({
                ...response.data,
                isEmailConfirmed: response.data.isConfirmed,
            });
        } catch (error) {
            console.error('Lỗi trong quá trình fetchUserInfo:', error);
        }
    };

    const handleUpdateInfo = async () => {
        try {
            if (!userInfo.fullName || !userInfo.address) {
                setFullnameError('Full Name is required.');
                setAddressError('Address is required.');
                return;
            }

            // Xóa lỗi nếu hợp lệ
            setFullnameError('');
            setAddressError('');
            
            const response = await axios.put(
                'https://localhost:7240/api/User/editInfo',
                {
                    Fullname: userInfo.fullName,
                    Address: userInfo.address,
                },
                {
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                // Exit edit mode after successful update
                setIsEditMode(false);
                setUpdatedSuccess("Update successfully!");
            } else {
                // Handle failure
                console.error('Failed to change info. Server response:', response);
            }
        } catch (error) {
            console.error('Error while updating info:', error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <div className="tab-pane fade active show" id="account-general">
            <hr className="border-light m-0" />
            <div className="card-body">
                <input type="text" className="form-control" name="userId" value={userInfo.userId} hidden />
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    {isEditMode ? (
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                name="fullname"
                                value={userInfo.fullName}
                                onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                            />
                            {fullnameError && <div className="text-danger">{fullnameError}</div>}
                        </div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                name="fullname"
                                value={userInfo.fullName}
                                readOnly
                            />
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    {isEditMode ? (
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={userInfo.address}
                                onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                            />
                            {addressError && <div className="text-danger">{addressError}</div>}
                        </div>
                    ) : (
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={userInfo.address}
                                readOnly
                            />
                        </div>
                    )}
                </div>
                <div className="text-right mt-3">
                    {isEditMode ? (
                        <button type="button" className="btn btn-primary" onClick={handleUpdateInfo}>
                            Save
                        </button>
                    ) : (
                        <button type="button" className="btn btn-primary" onClick={() => setIsEditMode(true)}>
                            Update
                        </button>
                    )}
                </div>
                {updatedSuccess && <div className="alert alert-success mt-2">{updatedSuccess}</div>}
            </div>
        </div>
    );
};

export default ProfileAddress;
