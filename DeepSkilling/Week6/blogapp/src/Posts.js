// src/Posts.js
import React from 'react';
import Post from './Post';
import './Posts.css';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(err => {
        console.error(err);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Something went wrong in rendering posts.");
    console.error("Error caught in componentDidCatch: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Failed to load posts.</p>;
    }

    return (
      <div className="posts-container">
        <h2>Blog Posts</h2>
        <table className="posts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
