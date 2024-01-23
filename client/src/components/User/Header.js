// UserHeader.js
import React from 'react';
import '../../styles/User/css/style.css';

const Header = () => {
  return (
    <div>
        <div>
  {/* Spinner Start
  <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" role="status" />
  </div> */}
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid topbar-top bg-primary">
    <div className="container">
      <div className="d-flex justify-content-between topbar py-2">
        <div className="d-flex align-items-center flex-shrink-0 topbar-info">
          <a href="https://www.google.com/maps/place/391A+%C4%90.+Nam+K%E1%BB%B3+Kh%E1%BB%9Fi+Ngh%C4%A9a,+Ph%C6%B0%E1%BB%9Dng+14,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vietnam/@10.7907758,106.6792676,17z/data=!3m1!4b1!4m6!3m5!1s0x317528d4a8afdb7b:0x2e46c4ada94947dd!8m2!3d10.7907758!4d106.6818425!16s%2Fg%2F11h89s2mz2?entry=ttu" className="me-4 text-secondary"><i className="fas fa-map-marker-alt me-2 text-dark" />District 3, HCM, VN</a>
          <a href="#" className="me-4 text-secondary"><i className="fas fa-phone-alt me-2 text-dark" />+01234567890</a>
          <a href="#" className="text-secondary"><i className="fas fa-envelope me-2 text-dark" />NewDecade@gmail.com</a>
        </div>
        <div className="text-end pe-4 me-4 border-end border-dark search-btn">
          <div className="search-form">
            <form method="post" action="index.html">
              <div className="form-group">
                <div className="d-flex">
                  <input type="search" className="form-control border-0 rounded-pill" name="search-input" defaultValue placeholder="Search Here" required />
                  <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center topbar-icon">
          <a href="#" className="me-4"><i className="fab fa-facebook-f text-dark" /></a>
          <a href="#" className="me-4"><i className="fab fa-twitter text-dark" /></a>
          <a href="#" className="me-4"><i className="fab fa-instagram text-dark" /></a>
          <a href="#" className><i className="fab fa-linkedin-in text-dark" /></a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
</div>

    </div>
    
  );
};

export default Header;
