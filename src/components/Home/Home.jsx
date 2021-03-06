import { useState, useEffect } from 'react'
import Card from './Card'

const Home = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		// Get random users data
		const fetchData = async () => {
			const resp = await fetch("https://randomuser.me/api/?results=2", { method: "GET" })
			const accounts = await resp.json()
			setUsers(accounts.results)
		}

		fetchData()
	}, [])
	
	return (
		<div className="mt-auto flex flex-col flex-wrap sm:flex-row justify-center items-center gap-3">
			{users.map((u) => {
				return (
					<Card
						key={u.login.uuid}
						picture={u.picture.large} 
						name={u.name}
						email={u.email}
						bio={"Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Amet doloremque, nihil vel, debitis sint velit, dicta ullam laboriosam voluptatum quis quas odit aut molestiae accusantium dolorem nostrum incidunt at eaque"}
						city={u.location.city}
						social={{}}
					/>
				)
			})}
		</div>
	)
}


export default Home