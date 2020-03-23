import React, { Component } from "react";
class Create extends Component {
    render() {
        return (
            <div>
                <h1>Halaman Create Contact</h1>
            </div>
        );
    }
}

export default Create;

if (document.getElementById("create-layout")) {
    ReactDOM.render(<Create />, document.getElementById("create-layout"));
}
