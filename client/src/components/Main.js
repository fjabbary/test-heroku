import VideoPlayer from './VideoPlayer'
import Content from './Content'
import React, { Component } from 'react';
import axios from 'axios'

class Main extends Component {

    state = {
        oneVideo: {}
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/videos/1af0jruup5gu`)
            .then(res => {
                this.setState({
                    oneVideo: res.data
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const id = this.props.match.params.id

        if (prevState.oneVideo.id !== id) {
            axios.get(`http://localhost:8080/videos/${id}`)
                .then(res => {
                    this.setState({
                        oneVideo: res.data
                    })
                })
        }

    }

    removeComment = (id) => {
        axios.delete('http://localhost:8080/delete', { data: { videoId: this.state.oneVideo.id, commentId: id } })
            .then(response => {
                this.setState({
                    oneVideo: { ...this.state.oneVideo, comments: response.data }
                })
            })
    }

    render() {

        return (
            <div>
                <VideoPlayer oneVideo={this.state.oneVideo} />
                <Content oneVideo={this.state.oneVideo} removeComment={this.removeComment} />
            </div>
        );
    }
}

export default Main;
