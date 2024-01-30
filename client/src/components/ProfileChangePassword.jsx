import React from 'react';

const ProfileChangePassword = () => {
  return (
    <div className="tab-pane fade active show" id="account-change-password">
      <div className="card-body pb-2">
        <div className="form-group">
          <label className="form-label">Current password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">New password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Repeat new password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="text-right mt-3">
          <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
        </div>
      </div>
    </div>
  );
};

export default ProfileChangePassword;