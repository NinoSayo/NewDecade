import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ProfileChangePassword from './ProfileChangePassword';
import ProfileGeneral from './ProfileGeneral';
import ProfileMembership from './ProfileMembership'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

const Profile = () => {
  console.log(Cookies.get('access_token'));
  console.log(Cookies.get('access_token'));  // Sửa tên cookie ở đây

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <NavLink to="/profile/general" className="list-group-item list-group-item-action" activeClassName="active">
                General
              </NavLink>
              <NavLink to="/profile/change-password" className="list-group-item list-group-item-action" activeClassName="active">
                Change password
              </NavLink>
              <NavLink to="/profile/membership" className="list-group-item list-group-item-action" activeClassName="active">
                Membership
              </NavLink>
              {/* Add nav links for other profile-related pages... */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <Routes>
                <Route path="general" element={<ProfileGeneral />} />
                <Route path="change-password" element={<ProfileChangePassword />} />
                <Route path="membership" element={<ProfileMembership />} />
                {/* Add routes for other profile-related pages... */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;
