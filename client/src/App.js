import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		axios
			.get('http://localhost:4000/api/posts/')
			.then((res) => {
				this.setState({ posts: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="App">
				<h1>List of Posts</h1>
				<div className="postsWrapper">
					{this.state.posts.length &&
						this.state.posts.map((post) => {
							return (
								<div className="post" key={post.id}>
									<h4>{post.title}</h4>
									<p>{post.contents}</p>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default App;
