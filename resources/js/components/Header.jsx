import React, { Component } from "react";
import ReactDOM from "react-dom";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: false,
            notification: false,
            createMenu: false
        };

        this.toggleProfil = this.toggleProfil.bind(this);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.toggleCreateMenu = this.toggleCreateMenu.bind(this);
    }

    toggleProfil(event) {
        event.preventDefault();
        this.setState(state => ({
            profil: !state.profil
        }));
    }

    toggleNotification(event) {
        event.preventDefault();
        this.setState(state => ({
            notification: !state.notification
        }));
    }

    toggleCreateMenu(event) {
        event.preventDefault();
        this.setState(state => ({
            createMenu: !state.createMenu
        }));
    }

    render() {
        return (
            <div className="navbar-custom navbar-custom-light">
                <ul className="list-unstyled topnav-menu float-right mb-0">
                    <li className="d-none d-sm-block">
                        <form className="app-search">
                            <div className="app-search-box">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                    />
                                    <div className="input-group-append">
                                        <button className="btn" type="submit">
                                            <i className="fe-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li className="dropdown notification-list">
                        <a
                            className="nav-link dropdown-toggle  waves-effect"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded={this.state.notification}
                            onClick={this.toggleNotification}
                        >
                            <i className="fe-bell noti-icon" />
                            <span className="badge badge-danger rounded-circle noti-icon-badge">
                                9
                            </span>
                        </a>
                        <div
                            className={
                                this.state.notification
                                    ? "dropdown-menu dropdown-menu-right dropdown-lg show"
                                    : "dropdown-menu dropdown-menu-right dropdown-lg"
                            }
                        >
                            {/* item*/}
                            <div className="dropdown-item noti-title">
                                <h5 className="m-0">
                                    <span className="float-right">
                                        <a href="/" className="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>
                                    Notification
                                </h5>
                            </div>
                            <div className="slimscroll noti-scroll">
                                {/* item*/}
                                <a
                                    href="/"
                                    className="dropdown-item notify-item active"
                                >
                                    <div className="notify-icon">
                                        <img
                                            src="/assets/images/users/user-1.jpg"
                                            className="img-fluid rounded-circle"
                                        />{" "}
                                    </div>
                                    <p className="notify-details">
                                        Cristina Pride
                                    </p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>
                                            Hi, How are you? What about our next
                                            meeting
                                        </small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a
                                    href="/"
                                    className="dropdown-item notify-item"
                                >
                                    <div className="notify-icon bg-primary">
                                        <i className="mdi mdi-comment-account-outline" />
                                    </div>
                                    <p className="notify-details">
                                        Caleb Flakelar commented on Admin
                                        <small className="text-muted">
                                            1 min ago
                                        </small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a
                                    href="/"
                                    className="dropdown-item notify-item"
                                >
                                    <div className="notify-icon">
                                        <img
                                            src="/assets/images/users/user-4.jpg"
                                            className="img-fluid rounded-circle"
                                        />{" "}
                                    </div>
                                    <p className="notify-details">
                                        Karen Robinson
                                    </p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>
                                            Wow ! this admin looks good and
                                            awesome design
                                        </small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a
                                    href="/"
                                    className="dropdown-item notify-item"
                                >
                                    <div className="notify-icon bg-warning">
                                        <i className="mdi mdi-account-plus" />
                                    </div>
                                    <p className="notify-details">
                                        New user registered.
                                        <small className="text-muted">
                                            5 hours ago
                                        </small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a
                                    href="/"
                                    className="dropdown-item notify-item"
                                >
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-comment-account-outline" />
                                    </div>
                                    <p className="notify-details">
                                        Caleb Flakelar commented on Admin
                                        <small className="text-muted">
                                            4 days ago
                                        </small>
                                    </p>
                                </a>
                                {/* item*/}
                                <a
                                    href="/"
                                    className="dropdown-item notify-item"
                                >
                                    <div className="notify-icon bg-secondary">
                                        <i className="mdi mdi-heart" />
                                    </div>
                                    <p className="notify-details">
                                        Carlos Crouch liked
                                        <b>Admin</b>
                                        <small className="text-muted">
                                            13 days ago
                                        </small>
                                    </p>
                                </a>
                            </div>
                            {/* All*/}
                            <a
                                href="/"
                                className="dropdown-item text-center text-primary notify-item notify-all"
                            >
                                View all
                                <i className="fi-arrow-right" />
                            </a>
                        </div>
                    </li>
                    <li
                        className={
                            this.state.profil
                                ? "dropdown notification-list show"
                                : "dropdown notification-list "
                        }
                    >
                        <a
                            className="nav-link dropdown-toggle nav-user mr-0 waves-effect"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded={this.state.profil}
                            onClick={this.toggleProfil}
                        >
                            <img
                                src="/assets/images/users/user-1.jpg"
                                alt="user-image"
                                className="rounded-circle"
                            />
                            <span className="pro-user-name ml-1">
                                Geneva <i className="mdi mdi-chevron-down" />
                            </span>
                        </a>
                        <div
                            className={
                                this.state.profil
                                    ? "dropdown-menu dropdown-menu-right profile-dropdown show"
                                    : "dropdown-menu dropdown-menu-right profile-dropdown"
                            }
                        >
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fe-user" />
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fe-settings" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fe-lock" />
                                <span>Lock Screen</span>
                            </a>
                            <div className="dropdown-divider" />
                            {/* item*/}
                            <a href="/" className="dropdown-item notify-item">
                                <i className="fe-log-out" />
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <a
                            href="/"
                            className="nav-link right-bar-toggle waves-effect"
                        >
                            <i className="fe-settings noti-icon" />
                        </a>
                    </li>
                </ul>
                {/* LOGO */}
                <div className="logo-box">
                    <a href="/" className="logo text-center">
                        <span className="logo-lg">
                            <img
                                src="/assets/images/logo-dark.png"
                                height={18}
                            />
                            {/* <span class="logo-lg-text-light">UBold</span> */}
                        </span>
                        <span className="logo-sm">
                            {/* <span class="logo-sm-text-dark">U</span> */}
                            <img src="/assets/images/logo-sm.png" height={24} />
                        </span>
                    </a>
                </div>
                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button className="button-menu-mobile waves-effect waves-light">
                            <i className="fe-menu" />
                        </button>
                    </li>
                    <li className="dropdown d-none d-lg-block">
                        <a
                            className="nav-link dropdown-toggle waves-effect waves-light"
                            aria-haspopup="false"
                            aria-expanded={this.state.createMenu}
                            onClick={this.toggleCreateMenu}
                        >
                            Create New
                            <i className="mdi mdi-chevron-down" />
                        </a>
                        <div
                            className={
                                this.state.createMenu
                                    ? "dropdown-menu show"
                                    : "dropdown-menu "
                            }
                        >
                            {/* item*/}
                            <a href="/" className="dropdown-item">
                                <i className="fe-briefcase mr-1" />
                                <span>New Projects</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item">
                                <i className="fe-user mr-1" />
                                <span>Create Users</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item">
                                <i className="fe-bar-chart-line- mr-1" />
                                <span>Revenue Report</span>
                            </a>
                            {/* item*/}
                            <a href="/" className="dropdown-item">
                                <i className="fe-settings mr-1" />
                                <span>Settings</span>
                            </a>
                            <div className="dropdown-divider" />
                            {/* item*/}
                            <a href="/" className="dropdown-item">
                                <i className="fe-headphones mr-1" />
                                <span>Help &amp; Support</span>
                            </a>
                        </div>
                    </li>
                    <li className="dropdown dropdown-mega d-none d-lg-block">
                        <a
                            className="nav-link dropdown-toggle waves-effect waves-light"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            Mega Menu
                            <i className="mdi mdi-chevron-down" />
                        </a>
                        <div className="dropdown-menu dropdown-megamenu">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h5 className="text-dark mt-0">
                                                UI Components
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a>Widgets</a>
                                                </li>
                                                <li>
                                                    <a>Nestable List</a>
                                                </li>
                                                <li>
                                                    <a>Range Sliders</a>
                                                </li>
                                                <li>
                                                    <a>Masonry Items</a>
                                                </li>
                                                <li>
                                                    <a>Sweet Alerts</a>
                                                </li>
                                                <li>
                                                    <a>Treeview Page</a>
                                                </li>
                                                <li>
                                                    <a>Tour Page</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h5 className="text-dark mt-0">
                                                Applications
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a>eCommerce Pages</a>
                                                </li>
                                                <li>
                                                    <a>CRM Pages</a>
                                                </li>
                                                <li>
                                                    <a>Email</a>
                                                </li>
                                                <li>
                                                    <a>Calendar</a>
                                                </li>
                                                <li>
                                                    <a>Team Contacts</a>
                                                </li>
                                                <li>
                                                    <a>Task Board</a>
                                                </li>
                                                <li>
                                                    <a>Email Templates</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h5 className="text-dark mt-0">
                                                Extra Pages
                                            </h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a>
                                                        Left Sidebar with User
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>Menu Collapsed</a>
                                                </li>
                                                <li>
                                                    <a>Small Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a>New Header Style</a>
                                                </li>
                                                <li>
                                                    <a>Search Result</a>
                                                </li>
                                                <li>
                                                    <a>Gallery Pages</a>
                                                </li>
                                                <li>
                                                    <a>
                                                        Maintenance &amp; Coming
                                                        Soon
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="text-center mt-3">
                                        <h3 className="text-dark">
                                            Special Discount Sale!
                                        </h3>
                                        <h4>Save up to 70% off.</h4>
                                        <button className="btn btn-primary btn-rounded mt-3">
                                            Download Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
if (document.getElementById("header-layout")) {
    ReactDOM.render(<Header />, document.getElementById("header-layout"));
}
