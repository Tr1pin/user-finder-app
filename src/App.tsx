import { useEffect, useRef, useState } from 'react'
import { useFetch } from './hooks/useFetch' 
import { useUserFilter } from './hooks/useUserFilter'
import { useInputFocus } from './hooks/useInputFocus'
import { UsersList } from './components/User'
import './App.css'

function App() {
  const { users } = useFetch()
  const { filteredUsers, filters, setFilters } = useUserFilter({ users })
  const { nameRef } = useInputFocus();

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
    }, 500) // 500ms de espera antes de actualizar el estado global

    return () => clearTimeout(delayDebounce)
  }, [searchTerm]) // Se ejecuta cuando cambia `searchTerm`


  return (
    <div className='container'>
      <header>
        <h1>Filtros</h1>
        <aside>
          <select name="genres" ref={genreRef} onChange={handleChangeGenre} defaultValue="all">
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>  
   

          <form className='form'> 
              <input 
                placeholder='Buscar por nombre:'
                type="text" 
                ref={nameRef}
                onChange={handleChangeName}
              />
          </form>
        </aside>
      </header>
      {
        <UsersList users={filteredUsers || []} />
      }
    </div>
  )
}

export default App
