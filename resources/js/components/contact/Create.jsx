import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import Swal from "sweetalert2";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            telepon: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitButton(event) {
        event.preventDefault();
        const contact = {
            nama: this.state.nama,
            telepon: this.state.telepon
        };
        Axios.post("/contact/store-contact", contact)
            .then(response => {
                this.setState({
                    nama: "",
                    telepon: ""
                });
                Swal.fire("Good job!", "Data berhasil disimpan", "success");
            })
            .catch(error => {
                Swal.fire(
                    "Kesalahan!",
                    "Ada kesalahan saat memasukan data!",
                    "warning"
                );
            });
    }

    componentDidMount() {}

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
                            <h4 className="page-title">Tambah Contact</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.onSubmitButton}>
                                    <div className="form-group">
                                        <label htmlFor="">Nama Kontak</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Masukan Nama Kontak"
                                            onChange={this.handleChange}
                                            value={this.state.nama}
                                            name="nama"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Nomor Telepon</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Masukan Telepon"
                                            onChange={this.handleChange}
                                            value={this.state.telepon}
                                            name="telepon"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary">
                                            Tambah Contact
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
if (document.getElementById("create-contact")) {
    ReactDOM.render(<Create />, document.getElementById("create-contact"));
}
