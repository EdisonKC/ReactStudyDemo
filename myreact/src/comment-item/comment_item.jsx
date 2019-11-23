import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./comment_item.css"

export default class CommentItem extends React.Component {

  constructor (props) {
    super(props)
    this.deleteComment = this.deleteComment.bind(this)
  }

  deleteComment () {
    let username = this.props.comment.username
    if (window.confirm(`确定删除${username}的评论吗?`)) {
      this.props.delete(this.props.index)
    }
  }
  render() {
    return (
      <li id="list-group-item">
            <div className="handle">
              <a href="javascript:" onClick={ this.deleteComment }>删除</a>
            </div>
            <p className="user"><span >{this.props.comment.username}</span><span>说:</span></p>
            <p className="centence">{this.props.comment.content}</p>
      </li>
    )
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired
}

