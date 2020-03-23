import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import Swal from "sweetalert2";


class List extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">
                                        <a href="/#">UBold</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="/#">Forms</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Elements
                                    </li>
                                </ol>
                            </div>
                            <h4 className="page-title">List Contact</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
if (document.getElementById("list-contact")) {
    ReactDOM.render(<List />, document.getElementById("list-contact"));
}
