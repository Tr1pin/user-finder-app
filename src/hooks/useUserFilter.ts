import { useState, useMemo } from "react"
import { type User } from "../types"

export function useUserFilter({ users }: { users: User[] }) {
  const [filters, setFilters] = useState({ 
    genre: "all" ,
    name: ""
  })

  const filteredUsers = useMemo(() => {
    return users.filter( user => {
      return (
        user.name.first.toLocaleLowerCase().startsWith(filters.name.toLocaleLowerCase()) && 
        (
          filters.genre === "all" ||
          user.gender === filters.genre
        )
      )
    })

  }, [users, filters])
  
  return { filteredUsers, filters, setFilters }
}