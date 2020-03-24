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
                                <li className="menu-title">SIAKAD</li>
                                <li>
                                    <a href="#">
                                        <i className="fe-airplay" />
                                        <span> Dashboards </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fe-users" />
                                        <span> Data Santri </span>
                                        <span className="menu-arrow" />
                                    </a>
                                    <ul
                                        className="nav-second-level"
                                        aria-expanded="false"
                                    >
                                        <li>
                                            <a href="apps-kanbanboard.html">
                                                Tambah Santri
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-calendar.html">
                                                Data Santri
                                            </a>
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
