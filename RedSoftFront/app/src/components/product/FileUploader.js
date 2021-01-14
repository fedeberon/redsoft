import React from 'react'

// const url = "http://164.68.101.162:8093/img/"

class FileUploader extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: "",
            data: [],
        }
    }

    // handleChange(event) {
    //     const value = event.target.value
    // }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {

        } catch {

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Product ID(Code):
                    <input type="text" placeholder="Código de producto.."/><br/>
                    </label>
                    <input type="file" id="fileupload" accept="image/*" required/><br/>
                </form>
            </div>
        );
    }
}

export default FileUploader;