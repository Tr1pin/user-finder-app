import React from 'react'
import { type HeaderProps } from '../types/types'

export const Header: React.FC<HeaderProps> = ({ theme, changeTheme, genreRef,  handleChangeGenre, nameRef, handleChangeName }) => {

  return (
    <header className={`header-${theme}`}>
      <h1>Filtros</h1>
      <aside className={`aside-${theme}`}>{/*Cambiar esto en el css*/}
        <select name="genres" ref={genreRef} onChange={handleChangeGenre} defaultValue="all">
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>  

        <form className={`form-${theme}`}> 
          <input 
            placeholder='Buscar por nombre:'
            type="text" 
            ref={nameRef}
            onChange={handleChangeName}
          />
        </form>

        <button onClick={changeTheme} className={`changeButton-${theme}`}>
          {theme === "dark" ? <p>LightMode</p> : <p>DarkMode</p>}
        </button>
      </aside>
    </header>
  )

}

