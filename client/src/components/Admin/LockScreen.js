import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const LockScreen = () => {
    return (
        <div className="hold-transition sidebar-mini">
            <div>
                {/* Automatic element centering */}
                <div className="lockscreen-wrapper">
                    <div className="lockscreen-logo">
                        <a href="../../index2.html"><b>New</b>Decade</a>
                    </div>
                    {/* User name
                    <div className="lockscreen-name">Welcome to Username</div> */}
                    {/* START LOCK SCREEN ITEM */}
                    <div className="lockscreen-item">
                        {/* lockscreen image */}
                        <div className="lockscreen-image">
                            <img src="../../logo.png" alt="User Image" />
                        </div>
                        {/* /.lockscreen-image */}
                        {/* lockscreen credentials (contains the form) */}
                        <form className="lockscreen-credentials">
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="password" />
                                <div className="input-group-append">
                                    <button type="button" className="btn">
                                        <i className="fas fa-arrow-right text-muted" />
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* /.lockscreen credentials */}
                    </div>
                    {/* /.lockscreen-item */}
                    <div className="help-block text-center">
                        Enter your password to retrieve your session
                    </div>
                    <div className="text-center">
                        <a href="login.html">Or sign in as a different user</a>
                    </div>
                </div>
                {/* /.center */}

            </div>
        </div>
    )
}

export default LockScreen;