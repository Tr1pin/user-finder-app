import { useContext } from "react"
import { ThemeContex } from "../context/Theme"


export const useTheme = () => {
    const theme = useContext(ThemeContex)

    if(theme === undefined){
        throw new Error("Use theme must be used whithin ThemeProvider")
    }

    return theme
}