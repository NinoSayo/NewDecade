import React from 'react';
import '../../styles/User/css/style.css'; // Import stylesheet từ template của bạn

const Navbar = () => {
  return (
    <div>
    {/* Navbar Start */}
<div className="container-fluid bg-dark">
  <div className="container">
    <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
      <a href="index.html" className="navbar-brand">
        <h1 className="text-primary mb-0 display-5">New<span className="text-white">Decade</span><i /></h1>
      </a>
      <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars text-dark" />
      </button>
      <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
          <a href="index.html" className="nav-item nav-link active">Home</a>
          <a href="about.html" className="nav-item nav-link">About</a>
          <a href="service.html" className="nav-item nav-link">Services</a>
          <a href="project.html" className="nav-item nav-link">Projects</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0 bg-primary">
              <a href="price.html" className="dropdown-item">Pricing Plan</a>
              <a href="blog.html" className="dropdown-item">Blog Post</a>
              <a href="team.html" className="dropdown-item">Team Members</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
      </div>
    </nav>
  </div>
</div>
{/* Navbar End */}

    </div>
  );
};

export default Navbar;