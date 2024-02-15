import React from 'react';

const UserContact = () => {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item text-white" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Get In Touch</h5>
                        <h1 className="display-5 w-50 mx-auto">Contact for any query</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="h-100">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4729331241757!2d106.66017231414223!3d10.762622262421799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752951b4e66a55%3A0x9b0b16a1723d1130!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1687175686342!5m2!1sen!2sbd
                      " className="border-0 rounded w-100 h-100" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <div className="rounded contact-form">
                                <div className="mb-4">
                                    <input type="text" className="form-control p-3" placeholder="Your Name" />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control p-3" placeholder="Your Email" />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control p-3" placeholder="Subject" />
                                </div>
                                <div className="mb-4">
                                    <textarea className="w-100 form-control p-3" rows={6} cols={10} placeholder="Message" defaultValue={""} />
                                </div>
                                <button className="btn btn-primary border-0 py-3 px-4 rounded-pill" type="button">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex bg-light p-3 rounded contact-btn-link">
                                <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{ width: 64, height: 64 }}>
                                    <i className="fa fa-share text-dark" />
                                </div>
                                <div className="ms-3 contact-link">
                                    <h4 className="text-dark">fallow Us</h4>
                                    <div className="d-flex justify-content-center">
                                        <a className="pe-2" href="#"><i className="fab fa-facebook-f text-dark" /></a>
                                        <a className="px-2" href="#"><i className="fab fa-twitter text-dark" /></a>
                                        <a className="px-2" href="#"><i className="fab fa-instagram text-dark" /></a>
                                        <a className="px-2" href="#"><i className="fab fa-linkedin-in text-dark" /></a>
                                        <a className="px-2" href="#"><i className="fab fa-youtube text-dark" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex bg-light p-3 rounded contact-btn-link">
                                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{ width: 64, height: 64 }}>
                                    <i className="fas fa-map-marker-alt text-dark" />
                                </div>
                                <div className="ms-3 contact-link">
                                    <h4 className="text-dark">Address</h4>
                                    <a href="#">
                                        <h5 className="text-dark d-inline fs-6">District 3, HCM, VNA</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex bg-light p-3 rounded contact-btn-link">
                                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{ width: 64, height: 64 }}>
                                    <i className="fa fa-phone text-dark" />
                                </div>
                                <div className="ms-3 contact-link">
                                    <h4 className="text-dark">Call Us</h4>
                                    <a className="h5 text-dark fs-6" href="tel:+0123456789">+012 3456 7890</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex bg-light p-3 rounded contact-btn-link">
                                <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle p-3 ms-3" style={{ width: 64, height: 64 }}>
                                    <i className="fa fa-envelope text-dark" />
                                </div>
                                <div className="ms-3 contact-link">
                                    <h4 className="text-dark">Email Us</h4>
                                    <a className="h5 text-dark fs-6" href="#">NewDecade@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </div>

    );
};

export default UserContact;