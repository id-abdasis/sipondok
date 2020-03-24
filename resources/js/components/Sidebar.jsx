import React, { Component } from "react";
import ReactDOM from "react-dom";
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="left-side-menu">
                    <div className="slimscroll-menu">
                        {/*- Sidemenu */}
                        <div id="sidebar-menu">
                            <ul className="metismenu" id="side-menu">
                                <li className="menu-title">Navigation</li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-airplay" />
                                        <span className="badge badge-success badge-pill float-right">
                                            4
                                        </span>
                                        <span> Dashboards </span>
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="index.html">Dashboard 1</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-2.html">
                                                Dashboard 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-3.html">
                                                Dashboard 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-4.html">
                                                Dashboard 4
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-pocket" />
                                        <span> Apps </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="apps-kanbanboard.html">
                                                Kanban Board
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-calendar.html">
                                                Calendar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-contacts.html">
                                                Contacts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-projects.html">
                                                Projects
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-tickets.html">
                                                Tickets
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-companies.html">
                                                Companies
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-users" />
                                        <span> CRM </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="crm-dashboard.html">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="crm-contacts.html">
                                                Contacts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="crm-opportunities.html">
                                                Opportunities
                                            </a>
                                        </li>
                                        <li>
                                            <a href="crm-leads.html">Leads</a>
                                        </li>
                                        <li>
                                            <a href="crm-customers.html">
                                                Customers
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-shopping-cart" />
                                        <span> eCommerce </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="ecommerce-dashboard.html">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-products.html">
                                                Products
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-prduct-detail.html">
                                                Product Detail
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-product-edit.html">
                                                Product Edit
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-orders.html">
                                                Orders
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ecommerce-sellers.html">
                                                Sellers
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-sidebar" />
                                        <span className="badge badge-pink float-right">
                                            New
                                        </span>
                                        <span> Layouts </span>
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="layouts-sidebar-user.html">
                                                Sidebar with User
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layouts-sidebar-sm.html">
                                                Small Sidebar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layouts-dark-sidebar.html">
                                                Dark Sidebar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layouts-light-topbar.html">
                                                Light Topbar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layouts-preloader.html">
                                                Preloader
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layouts-sidebar-collapsed.html">
                                                Sidebar Collapsed
                                            </a>
                                        </li>
                                        <li>
                                            <a href="layouts-boxed.html">
                                                Boxed
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-mail" />
                                        <span> Email </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="email-inbox.html">Inbox</a>
                                        </li>
                                        <li>
                                            <a href="email-read.html">
                                                Read Email
                                            </a>
                                        </li>
                                        <li>
                                            <a href="email-compose.html">
                                                Compose Email
                                            </a>
                                        </li>
                                        <li>
                                            <a href="email-templates.html">
                                                Email Templates
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-file-text" />
                                        <span> Pages </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="pages-starter.html">
                                                Starter
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-login.html">
                                                Log In
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-register.html">
                                                Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-signin-signup.html">
                                                Signin - Signup
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-recoverpw.html">
                                                Recover Password
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-lock-screen.html">
                                                Lock Screen
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-logout.html">
                                                Logout
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-confirm-mail.html">
                                                Confirm Mail
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-404.html">
                                                Error 404
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-404-alt.html">
                                                Error 404-alt
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-500.html">
                                                Error 500
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-package" />
                                        <span> Extra Pages </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="extras-profile.html">
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-timeline.html">
                                                Timeline
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-sitemap.html">
                                                Sitemap
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-invoice.html">
                                                Invoice
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-faqs.html">FAQs</a>
                                        </li>
                                        <li>
                                            <a href="extras-search-results.html">
                                                Search Results
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-pricing.html">
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-maintenance.html">
                                                Maintenance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-coming-soon.html">
                                                Coming Soon
                                            </a>
                                        </li>
                                        <li>
                                            <a href="extras-gallery.html">
                                                Gallery
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-title mt-2">Components</li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-briefcase" />
                                        <span> UI Elements </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="ui-buttons.html">
                                                Buttons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-cards.html">Cards</a>
                                        </li>
                                        <li>
                                            <a href="ui-portlets.html">
                                                Portlets
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-tabs-accordions.html">
                                                Tabs &amp; Accordions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-modals.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="ui-progress.html">
                                                Progress
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-notifications.html">
                                                Notifications
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-spinners.html">
                                                Spinners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-images.html">Images</a>
                                        </li>
                                        <li>
                                            <a href="ui-carousel.html">
                                                Carousel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-video.html">
                                                Embed Video
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-dropdowns.html">
                                                Dropdowns
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-ribbons.html">
                                                Ribbons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-tooltips-popovers.html">
                                                Tooltips &amp; Popovers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-general.html">
                                                General UI
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-typography.html">
                                                Typography
                                            </a>
                                        </li>
                                        <li>
                                            <a href="ui-grid.html">Grid</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-layers" />
                                        <span className="badge badge-info float-right">
                                            Hot
                                        </span>
                                        <span> Admin UI </span>
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="admin-widgets.html">
                                                Widgets
                                            </a>
                                        </li>
                                        <li>
                                            <a href="admin-nestable.html">
                                                Nestable List
                                            </a>
                                        </li>
                                        <li>
                                            <a href="admin-range-slider.html">
                                                Range Slider
                                            </a>
                                        </li>
                                        <li>
                                            <a href="admin-animation.html">
                                                Animation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="admin-sweet-alert.html">
                                                Sweet Alert
                                            </a>
                                        </li>
                                        <li>
                                            <a href="admin-tour.html">
                                                Tour Page
                                            </a>
                                        </li>
                                        <li>
                                            <a href="admin-loading-buttons.html">
                                                Loading Buttons
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-cpu" />
                                        <span> Icons </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="icons-feather.html">
                                                Feather Icons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icons-mdi.html">
                                                Material Design Icons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icons-dripicons.html">
                                                Dripicons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icons-font-awesome.html">
                                                Font Awesome
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icons-themify.html">
                                                Themify
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icons-simple-line.html">
                                                Simple Line
                                            </a>
                                        </li>
                                        <li>
                                            <a href="icons-weather.html">
                                                Weather
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-bookmark" />
                                        <span> Forms </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="forms-elements.html">
                                                General Elements
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-advanced.html">
                                                Advanced
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-validation.html">
                                                Validation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-pickers.html">
                                                Pickers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-wizard.html">
                                                Wizard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-masks.html">Masks</a>
                                        </li>
                                        <li>
                                            <a href="forms-summernote.html">
                                                Summernote
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-quilljs.html">
                                                Quilljs Editor
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-file-uploads.html">
                                                File Uploads
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-x-editable.html">
                                                X Editable
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-image-crop.html">
                                                Image Crop
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-grid" />
                                        <span> Tables </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="tables-basic.html">
                                                Basic Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-datatables.html">
                                                Data Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-editable.html">
                                                Editable Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-responsive.html">
                                                Responsive Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-footables.html">
                                                FooTable
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-bootstrap.html">
                                                Bootstrap Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-tablesaw.html">
                                                Tablesaw Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-jsgrid.html">
                                                JsGrid Tables
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-bar-chart-2" />
                                        <span> Charts </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="charts-flot.html">
                                                Flot Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-morris.html">
                                                Morris Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-chartjs.html">
                                                Chartjs Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-peity.html">
                                                Peity Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-chartist.html">
                                                Chartist Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-c3.html">
                                                C3 Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-sparklines.html">
                                                Sparklines Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-knob.html">
                                                Jquery Knob Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-ricksaw.html">
                                                Ricksaw Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="charts-just-gage.html">
                                                JustGage Charts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-map" />
                                        <span> Maps </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="maps-google.html">
                                                Google Maps
                                            </a>
                                        </li>
                                        <li>
                                            <a href="maps-vector.html">
                                                Vector Maps
                                            </a>
                                        </li>
                                        <li>
                                            <a href="maps-mapael.html">
                                                Mapael Maps
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <i className="fe-folder-plus" />
                                        <span> Multi Level </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level nav"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="javascript: void(0);">
                                                Level 1.1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript: void(0);"
                                                aria-expanded="false"
                                            >
                                                Level 1.2
                                                <span className="menu-arrow" />
                                            </a>
                                            <ul
                                                className="nav-third-level nav"
                                                aria-expanded="false"
                                            >
                                                <li>
                                                    <a href="javascript: void(0);">
                                                        Level 2.1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript: void(0);">
                                                        Level 2.2
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* End Sidebar */}
                        <div className="clearfix" />
                    </div>
                    {/* Sidebar -left */}
                </div>
            </div>
        );
    }
}

export default Sidebar;
if (document.getElementById("sidebar-layout")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar-layout"));
}
