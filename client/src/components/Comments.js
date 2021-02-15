import React, { Component } from 'react';
import './styles/Comments.scss';
import CommentItem from './CommentItem';

class Comments extends Component {

    render() {

        const { comments } = this.props.oneVideo
        const passedComments = comments || []

        const commentJSX = passedComments.map(item => <CommentItem key={item.id} item={item} videoId={this.props.oneVideo.id} removeComment={this.props.removeComment} />)


        return (
            <div className="comments">
                <p><b><span className="comments__count">{passedComments.length}</span> Comment</b></p>
                <div className="comments__input">

                    <form>
                        <img src="../assets/Images/Mohan-muruge.jpg" alt="" className="comments__input--avatar" />
                        <input type="text" className="comments__input--input" />
                        <button className="comments__input--btn">COMMENT</button>
                    </form>
                </div>

                {commentJSX}
            </div>
        );
    }
}

export default Comments;
