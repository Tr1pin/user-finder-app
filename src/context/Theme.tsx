import { createContext, useState, ReactNode } from "react"

interface ThemeContextType {
    theme: string;
    changeTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
    theme: "dark",
    changeTheme: () => {}
};

export const ThemeContex = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState("dark")

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    return (     
        <ThemeContex.Provider value= {{theme, changeTheme}}>
            {children}
        </ThemeContex.Provider>
    )
}

