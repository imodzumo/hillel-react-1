import {useEffect, useState} from "react";
import {useFetcher} from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";

const Users = ()=> {
	// const [users, setUsers] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [isError, setIsError] = useState(false);

	// useEffect(()=> {
	// 	const getUsers = async ()=> {
	// 		try {
	// 			setIsError(false)
	// 			setIsLoading(true)
	// 			const res = await fetch("https://jsonplaceholder.typicode.com/users");
	// 			const data = await res.json();
	// 			setUsers(data);
	// 		} catch (error) {
	// 			console.log(error.message);
	// 			setIsError(true)
	// 		} finally {
	// 			setIsLoading(false)
	// 		}
	//
	// 	}
	// 	getUsers();
	// }, [])

	const {data, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/users")




	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div>

			<h1>Users</h1>
			{isError && <div>Error</div>}
			<ul>
				{data.map(user => <li key={user.id}>{user.name}</li>)}
			</ul>
		</div>
	);
}

export default Users;
