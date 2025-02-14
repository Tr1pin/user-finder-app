import { useState, useEffect, useRef } from "react";
import { type User } from "../types"; 

export function useFetch() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
        .then( res => res.json() )
        .then( data => setUsers(data.results) )
        .catch(e => {
            console.log(e)
        })

  }, []);

  return { users, setUsers };
}
