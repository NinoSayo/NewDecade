import React, { } from "react";
import { Link, Route, Routes } from 'react-router-dom';

function AdminMenu() {
  return (
    <div >
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index.html" className="brand-link">
          <img src="dist/img/logoicon.png" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Admin</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/logo.png" className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
              <a href="fake_url" className="d-block">Group 3</a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item ">
                <Link to="/" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right " />
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Blogs
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='widget' className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='table'  className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tables                    
                  </p>
                </Link>
              </li>
              <li className="nav-header">OTHERS</li>
              <li className="nav-item">
                <Link to='calendar' className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='todo' className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>
                    Kanban Board
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='contacts' className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to='contacts' className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                      <Link to='compose' className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                      <Link to='read-mail' className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Read</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/lock' className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                      <Link to='/' className="nav-link">
                      <i className="fas fa-arrow-right text-muted"/>
                      <p>Logout</p>
                    </Link>
                  </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}

export default AdminMenu;
