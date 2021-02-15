import React, { Component } from 'react';
import './styles/VideoList.scss'
import VideoItem from './VideoItem';
import axios from 'axios'

class VideoList extends Component {
    state = {
        videos: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/videos')
            .then(res => {
                this.setState({
                    videos: res.data
                })
            })
    }

    render() {

        const videoJSX = this.state.videos.map(item => <VideoItem key={item.id} item={item} />)

        return (
            <div className="videoList">
                <h3>NEXT VIDEO</h3>
                {videoJSX}
            </div>
        );
    }
}

export default VideoList;
