import React from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const HandleSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("videodata", selectedFile);
        try {
            const response = await axios({
                method: "post",
                url: "https://flask-service.8ac5gsv5hb4sm.us-east-2.cs.amazonlightsail.com/upload",
                data: formData,
                headers: {"Content-Type": "multipart/form-data"}
            })
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type='file' onChange={handleFileSelect}/>
                <input type='submit' value='Upload File'/>
            </form>
        </div>
    )
}

export default FileUpload;