// src/Post.js
import React from 'react';

class Post extends React.Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    );
  }
}

export default Post;
