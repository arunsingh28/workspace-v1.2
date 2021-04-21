import React from 'react'

const Fileuploader = () => {
    return (
        <div className="file_uploader">
            <p>File Uploader</p>
            <i className="fas fa-upload"></i>
            <input type="file" className="custom_file_input" ></input>
            <button>Upload</button>
        </div>
    )
}
export default Fileuploader
