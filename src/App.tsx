import { useEffect, useRef, useState } from 'react'
import { useFetch } from './hooks/useFetch' 
import { useUserFilter } from './hooks/useUserFilter'
import { useInputFocus } from './hooks/useInputFocus'
import { useTheme } from './hooks/useTheme'
import { UsersList } from './components/User'
import { Header } from './components/Header'
import './App.css'

function App() {
  const { users } = useFetch()
  const { filteredUsers, filters, setFilters } = useUserFilter({ users })
  const { nameRef } = useInputFocus()
  const { theme, changeTheme } = useTheme()
  const genreRef = useRef<HTMLSelectElement>(null)

  const [searchTerm, setSearchTerm] = useState(filters.name || '') 

  const handleChangeGenre = () => {
    if (genreRef.current) {
      setFilters({
        ...filters,
        genre: genreRef.current.value
      })
    }
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilters({
        ...filters,
        name: searchTerm
      })
      console.log(filters)
    }, 350) 

    return () => clearTimeout(delayDebounce)
  }, [searchTerm])


  return (
    <div className={`container-${theme}`}>
      {
        <Header
          theme={theme}
          changeTheme={changeTheme}
          handleChangeGenre={handleChangeGenre}
          genreRef={genreRef}
          nameRef={nameRef}
          handleChangeName={handleChangeName}
        />
      }
      {
        <UsersList users={filteredUsers || []} />
      }
    </div>
  )
}

export default App
