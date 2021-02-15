import React, { Component } from 'react';
import './styles/CommentItem.scss';


class CommentItem extends Component {

    convertTimeStamp = (commentDate) => {

        var date = new Date(commentDate);
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var dateString = year + "-" + month + "-" + day;

        return dateString
    }

    deleteComment = () => {
        this.props.removeComment(this.props.item.id);
    }


    render() {

        const { comment, id, likes, name, timestamp } = this.props.item

        return (
            <div className="commentItem">
                <div className="commentItem__left">
                    <span className="commentItem__left--avatar"></span>
                </div>

                <div className="commentItem__middle">
                    <p> <span className="commentItem__middle--name">{name}</span> <span className="commentItem__middle--date">
                        {this.convertTimeStamp(timestamp)}</span> </p>
                    <p>{comment}</p>
                </div>

                <div className="commentItem__right">
                    <span className="commentItem__right--delete"><i className="fa fa-trash" onClick={this.deleteComment}></i></span>
                </div>
            </div>
        );
    }
}

export default CommentItem;
