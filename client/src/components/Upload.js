import React, { Component } from 'react';
import './styles/Upload.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Upload extends Component {

    addVideo = (e) => {
        e.preventDefault();

        const title = e.target.title.value
        const channel = e.target.channel.value

        axios.post('http://localhost:8080/video/add', {
            title: title,
            channel: channel
        })

        window.location.href = "/"
    }

    render() {
        return (
            <div className="upload">
                <h2>Upload Video</h2>

                <div className="upload__video">
                    <div className="upload__video--left">
                        <img src="./assets/Images/video-list-1.jpg" width="100%" alt="upload-img" />
                    </div>
                    <div className="upload__video--right">
                        <form onSubmit={this.addVideo}>
                            <div>
                                <label htmlFor="title">Title:</label><br />
                                <input type="text" id="title" name="title" />
                            </div><br />
                            <div>
                                <label htmlFor="channel">Channel:</label><br />
                                <textarea id="channel" cols="30" rows="10" name="channel"></textarea>
                            </div>


                            <button id="publish">Publish</button>
                            <Link to="/"><button id="cancel">Cancel</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upload;
