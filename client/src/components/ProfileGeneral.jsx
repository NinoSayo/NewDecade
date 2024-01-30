import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileGeneral = () => {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        userName: '',
        fullName: '',
        phone: '',
        address: '',
        email: '',
    });

    const fetchUserInfo = async () => {
        try {
            // Lấy chuỗi JSON từ sessionStorage
            const storedInfo = sessionStorage.getItem('username');
    
            // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
            const infoObject = JSON.parse(storedInfo);
    
            // Lấy giá trị của thuộc tính userName từ đối tượng
            const storedUsername = infoObject && infoObject.userName;
    
            if (!storedUsername) {
                console.error('Username not found in sessionStorage');
                return;
            }
    
            const response = await axios.get(`https://localhost:7240/api/User/getUser/${storedUsername}`, { withCredentials: true });
            setUserInfo(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);


    return (
        <div className="tab-pane fade active show" id="account-general">
            {/* <div className="card-body d-flex align-items-center">
                <img src={`https://localhost:7240/Images/${userInfo.avatar}`} alt="Avatar" className="d-block ui-w-80" />
                <div className="ml-4 d-flex align-items-center">
                    <form action="">
                        <label className="btn mb-0">
                            <input type="file" className="form-control" onChange={handleFileChange} />
                        </label>
                        <button type="button" className="btn btn-primary ml-2" onClick={handleSaveChanges}>
                            Save
                        </button>
                    </form>
                </div>
            </div> */}
            <hr className="border-light m-0" />
            <div className="card-body">
                <form action="">
                    <input type="text" className="form-control" name="userId" value={userInfo.userId} hidden />
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" value={userInfo.userName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" name="fullname" value={userInfo.fullName} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" name="phone" value={userInfo.phone} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={userInfo.address} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" value={userInfo.email} />
                        <div className="alert alert-warning mt-3">
                            Your email is not confirmed. Please check your inbox.
                        </div>
                    </div>
                    <div className="text-right mt-3">
                        <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileGeneral;