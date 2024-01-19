import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch.jsx";

const Posts = () => {
	// const [posts, setPosts] = useState([]);


	// useEffect(()=> {
	// 	const getPosts = async ()=> {
	// 		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	// 		const data = await res.json();
	// 		setPosts(data);
	// 	}
	// 	getPosts();
	// }, [])

	const {data: posts} = useFetch("https://jsonplaceholder.typicode.com/posts")

	return (
		<div>

			<h1>Posts</h1>
			<ul>
				{posts.map(user => <li key={user.id}>{user.title}</li>)}
			</ul>
		</div>
	);
}

export default Posts;
