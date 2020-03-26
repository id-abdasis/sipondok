import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import Pagination from "react-js-pagination";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            activePage: 1,
            itemCountPerPage: 1,
            totalItemsCount: 5,
            pageRangeDisplayed: 5,
            from: 1,
            to: 5
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        Axios.get("/api/contact/data-contact").then(response => {
            this.setState({
                contacts: response.data.data,
                itemCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
                activePage: response.data.current_page,
                from: response.data.from,
                to: response.data.to
            });
        });
    }

    handlePageChange(pageNumber) {
        console.log(`Acite page is ${pageNumber}`);
        Axios.get("/api/contact/data-contact?page=" + pageNumber).then(
            response => {
                this.setState({
                    contacts: response.data.data,
                    itemCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                    from: response.data.from,
                    to: response.data.to
                });
            }
        );
    }

    render() {
        const DataTable = () => {
            if (this.state.contacts.length < 1) {
                return (
                    <tbody>
                        <tr>
                            <td colSpan="5" align="center">
                                Tidak Ada Data yang bisa di tampilkan
                            </td>
                        </tr>
                    </tbody>
                );
            } else {
                return (
                    <tbody>
                        {this.state.contacts.map(contact => (
                            <tr key={contact.id}>
                                <th>{contact.id}</th>
                                <td>{contact.nama}</td>
                                <td>{contact.telepon}</td>
                                <td>{contact.created_at}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger">
                                        hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                        ;
                    </tbody>
                );
            }
        };
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h4 className="card-header">Belajar Tabel</h4>
                            <div className="card-body">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Option</th>
                                        </tr>
                                    </thead>
                                    <DataTable />
                                </table>

                                <div
                                    class="dataTables_info"
                                    id="basic-datatable_info"
                                    role="status"
                                    aria-live="polite"
                                >
                                    Showing {this.state.from}{" "}
                                    <span className="text-info">to </span>{" "}
                                    {this.state.to}
                                    <span className="text-info"> from </span>
                                    {this.state.totalItemsCount} total data
                                </div>

                                <div className="dataTables_paginate paging_simple_numbers mt-2">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={
                                            this.state.itemCountPerPage
                                        }
                                        totalItemsCount={
                                            this.state.totalItemsCount
                                        }
                                        pageRangeDisplayed={
                                            this.state.pageRangeDisplayed
                                        }
                                        onChange={this.handlePageChange}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </div>
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
