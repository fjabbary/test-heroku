import React, { Component } from 'react';
import './styles/VideoPlayer.scss'

class VideoPlayer extends Component {
    render() {
        return (
            <div className="videoContainer">
                <video controls className="videoContainer__video" poster={this.props.oneVideo.image}>
                    <source src="../assets/Video/sample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default VideoPlayer;
