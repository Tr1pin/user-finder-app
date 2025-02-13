import { useEffect, useRef, useState } from 'react'
import { type User } from './types'
import { ListUsers } from './components/User'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [filters, setFilters] = useState({
    genre: "all"
  })
  const genreRef = useRef<HTMLSelectElement>(null)

  const filterUserByGenre = (users: User[]) => {
    if (filters.genre === "all") {
      return users;
    }
    return users.filter(user => user.gender === filters.genre);
    
  }

  const handleChangeGenre = () => {
    if (genreRef.current) {
      setFilters({ genre: genreRef.current.value })
    }
    
      console.log("handleChangeGenre");
      console.log(users);
      console.log(filters);
  }
  const filteresUser = filterUserByGenre(users)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(e => {
        console.log(e)
      })
  },[])

  return (
    <div>
      <label htmlFor="">
        <select name="genres" ref={genreRef} onChange={handleChangeGenre} defaultValue={"all"}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male" selected>Male</option>
        </select>  
      </label>
      {
        <ListUsers users={filteresUser} />
      }
    </div>
  )
}

export default App
