import React, { Component } from 'react';
import './styles/VideoDescription.scss'

class VideoDescription extends Component {

    convertTimeStamp = (uploadDate) => {

        var date = new Date(uploadDate);
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var dateString = year + "-" + month + "-" + day;

        return dateString
    }

    render() {

        const { channel, comments, description, duration, id, image, likes, timestamp, title, views } = this.props.oneVideo

        return (
            <div className="videoDescription">
                <h1><b>{title}</b></h1>

                <div className="videoDescription__details">
                    <div className="videoDescription__details--left">
                        <span><b>{channel}</b></span>
                        <span>{this.convertTimeStamp(timestamp)}</span>
                    </div>
                    <div className="videoDescription__details--right">
                        <img src="../assets/Icons/SVG/Icon-views.svg" alt="views" /><span className="videoDescription__details--rightViews" >{views}</span>
                        <img src="../assets/Icons/SVG/Icon-likes.svg" alt="like" /><span>{likes}</span>
                    </div>
                </div>

                <p>{description}</p>

            </div>
        );
    }
}

export default VideoDescription;
